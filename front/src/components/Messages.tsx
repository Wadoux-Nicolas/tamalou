import {
    Button,
    Modal, ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure
} from "@chakra-ui/react";
import {useRef} from "react";
import {Message, MessageProps} from "./Message.tsx";
import {TextInput} from "./TextInput.tsx";
import CustomButton from "./CustomButton.tsx";
import {FaMessage} from "react-icons/fa6";
import {FaPaperPlane} from "react-icons/fa";

export const Messages = (
    {messages}: { messages: MessageProps[] }
) => {
    const btnRef = useRef(null)
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
                finalFocusRef={btnRef}
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
                                    otherBoxProps={{
                                        maxW: '80%',
                                        mr: message.type === 'received' ? 'auto' : 0,
                                        ml: message.type !== 'received' ? 'auto' : 0
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
                        <Button
                            onClick={onClose}
                            mr={24}
                        >
                            Annuler
                        </Button>
                        <TextInput
                            placeholder='Ecrire un message'
                            resize={'none'}
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