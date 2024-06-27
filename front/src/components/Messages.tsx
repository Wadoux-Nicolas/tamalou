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
                    <ModalBody>
                        {
                            messages.map((message, index) => (
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

                        {messages.length === 0 &&
                            <Message
                                message={{type: 'errored', content: 'Aucun message à afficher'}}
                            />
                        }
                    </ModalBody>
                    <ModalFooter
                        gap={2}
                    >
                        <TextInput
                            placeholder='Ecrire un message'
                            resize={'none'}
                            ref={initialRef}
                            focusBorderColor={"green.light"}
                        />
                        <CustomButton
                            icon={FaPaperPlane}
                            bgColor={"green.main"}
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
    my?: number;
    p?: number;
    otherBoxProps?: Record<string, unknown>;
}