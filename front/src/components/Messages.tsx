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

export const Messages = (
    {messages}: { messages: MessageProps[] }
) => {
    const btnRef = useRef(null)
    const {isOpen, onOpen, onClose} = useDisclosure()

    return (
        <div>
            <Button mt={3} ref={btnRef} onClick={onOpen}>
                Trigger modal
            </Button>

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
                                message={{type: 'errored', content: 'No messages to display'}}
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
                            Close
                        </Button>
                        <TextInput
                            placeholder='Ecrire un message'
                            resize={'none'}
                        />
                        <Button colorScheme="blue">Send</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
}