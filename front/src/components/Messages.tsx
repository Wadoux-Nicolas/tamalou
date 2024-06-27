import {
    Alert,
    AlertIcon,
    Modal, ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay, Spinner, Text,
    useDisclosure
} from "@chakra-ui/react";
import {MutableRefObject, useEffect, useRef, useState} from "react";
import {Message, MessageProps} from "./Message.tsx";
import {TextInput} from "./TextInput.tsx";
import CustomButton from "./CustomButton.tsx";
import {FaMessage} from "react-icons/fa6";
import {FaPaperPlane} from "react-icons/fa";
import {parseMessage} from "../models/message.ts";

export const Messages = (
    {messages}: { messages: MessagesPropsConfig[] }
) => {
    const initialRef: MutableRefObject<HTMLTextAreaElement | null> = useRef(null)
    const {isOpen, onOpen, onClose} = useDisclosure()
    const [newMessage, setNewMessage] = useState('')
    const [sendingFailed, setSendingFailed] = useState(false)
    const [sending, setSending] = useState(false)
    const bodyRef = useRef<HTMLDivElement>(null);
    const [notFetchedMessages, setNotFetchedMessages] = useState<MessagesPropsConfig[]>([]);

    useEffect(() => {
        if (bodyRef.current) {
            bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
        }
        setNotFetchedMessages([]);
    }, [messages]);

    const submitMessage = () => {
        if (newMessage === '') {
            return
        }

        setSendingFailed(false)
        setSending(true)
        fetch('http://localhost:8000/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                input: newMessage,
                role: "patient",
                should_be_analyzed: true
            }),
        })
            .then(response => response.json())
            .then((message) => {
                setNewMessage('')
                setNotFetchedMessages((prevMessages) => {
                    return [...prevMessages, parseMessage(message)]
                })
            })
            .catch(() => {
                setSendingFailed(true)
            })
            .finally(() => {
                setSending(false)
            })
    }

    return (
        <div>
            <CustomButton
                icon={FaMessage}
                iconColor={"white"}
                bgColor={"green.main"}
                onClick={onOpen}
            />

            <Modal
                onClose={onClose}
                initialFocusRef={initialRef}
                isOpen={isOpen}
                scrollBehavior="inside"
                size="full"
            >
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Messages</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody ref={bodyRef}>
                        {
                            [...messages, ...notFetchedMessages].map((message, index) => (
                                <Message
                                    key={index}
                                    message={message}
                                    outlined={message.outlined}
                                    borderRadius={message.borderRadius}
                                    border={message.border}
                                    my={message.my}
                                    p={message.p}
                                    otherBoxProps={{
                                        maxW: '65%',
                                        mr: message.type === 'received' ? 'auto' : 0,
                                        ml: message.type !== 'received' ? 'auto' : 0,
                                        fontSize: '0.8rem',
                                        ...message.otherBoxProps
                                    }}
                                />
                            ))
                        }

                        {messages.length === 0 && notFetchedMessages.length === 0 &&
                            <Text>Aucun message à afficher</Text>
                        }

                        {sendingFailed &&
                            <Alert status='error'>
                                <AlertIcon/>
                                Une erreur est survenue lors de l'envoi du message
                            </Alert>
                        }
                    </ModalBody>
                    <ModalFooter
                        gap={2}
                    >
                        <TextInput
                            placeholder='Ecrire un message'
                            resize={'none'}
                            ref={initialRef}
                            handleInputChange={(e) => setNewMessage(e.target.value)}
                            value={newMessage}
                            focusBorderColor={"green.light"}
                        />

                        {sending &&
                            <Spinner
                                color={"green.main"}
                            />
                        }
                        {!sending &&
                            <CustomButton
                                icon={FaPaperPlane}
                                bgColor={"green.main"}
                                iconColor={"white"}
                                onClick={submitMessage}
                            />
                        }
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
}

export interface MessagesPropsConfig extends MessageProps {
    outlined?: boolean;
    borderRadius?: number;
    border?: string;
    my?: number;
    p?: number;
    otherBoxProps?: Record<string, unknown>;
}