import {
    Modal, ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure
} from "@chakra-ui/react";
import {MutableRefObject, useRef} from "react";
import {Message, MessageProps} from "./Message.tsx";
import {TextInput} from "./TextInput.tsx";
import CustomButton from "./CustomButton.tsx";
import {FaMessage} from "react-icons/fa6";
import {FaPaperPlane} from "react-icons/fa";

export const Messages = (
    {messages}: { messages: MessagesPropsConfig[] }
) => {
    const initialRef: MutableRefObject<HTMLTextAreaElement | null> = useRef(null)
    const {isOpen, onOpen, onClose} = useDisclosure()

    return (
        <div>
            <CustomButton
                icon={FaMessage}
                iconColor={"white"}
                bgColor={"blue.main"}
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
                    <ModalBody>
                        {
                            messages.map((message, index) => (
                                <Message
                                    key={index}
                                    message={message}
                                    outlined={message.outlined}
                                    borderRadius={message.borderRadius}
                                    border={message.border}
                                    m={message.m}
                                    p={message.p}
                                    otherBoxProps={{
                                        maxW: '80%',
                                        mr: message.type === 'received' ? 'auto' : 0,
                                        ml: message.type !== 'received' ? 'auto' : 0,
                                        ...message.otherBoxProps
                                    }}
                                />
                            ))
                        }

                        {messages.length === 0 &&
                            <Message
                                message={{type: 'errored', content: 'Aucun message à afficher'}}
                            />
                        }
                    </ModalBody>
                    <ModalFooter
                        gap={8}
                    >
                        <TextInput
                            placeholder='Ecrire un message'
                            resize={'none'}
                            ref={initialRef}
                        />
                        <CustomButton
                            icon={FaPaperPlane}
                            bgColor={"blue.main"}
                            iconColor={"white"}
                        />
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
    m?: number;
    p?: number;
    otherBoxProps?: Record<string, unknown>;
}