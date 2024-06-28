import {
    Box,
    Center,
    Flex, IconButton,
    Collapse,
    Text,
    useDisclosure, Divider
} from '@chakra-ui/react';
import PenguinSVG from "../assets/penguins/normal.svg";
import PenguinDiarrheaSVG from "../assets/penguins/diarrhea.svg";
import PenguinAlertSVG from "../assets/penguins/alert.svg";
import PenguinSweatySVG from "../assets/penguins/sweaty.svg";
import PenguinFeverishSVG from "../assets/penguins/feverish.svg";
import PenguinBleedingSVG from "../assets/penguins/bleeding.svg";
import PenguinVomitingSVG from "../assets/penguins/vomiting.svg";
import PenguinFatigueSVG from "../assets/penguins/fatigue.svg";
import PenguinDepressionSVG from "../assets/penguins/depression.svg";
import PenguinPainSVG from "../assets/penguins/pain.svg";
import PenguinWaitingForCareSVG from "../assets/penguins/waiting_for_care.svg";


import blobSVG from "../assets/blob.svg";
import {PenguinStateByName} from "../models/penguin_state.tsx";
import {IoInformation} from "react-icons/io5";
import {useContext, useEffect, useState} from "react";
import {MessageContext} from "./MessagesProvider.tsx";
import {MessageProps} from "./Message.tsx";

const Penguin = (
    {
        state = PenguinStateByName.NORMAL,
    }: {
        state?: PenguinStateByName,
    }
) => {
    const [message, setMessage] = useState<MessageProps | null>(null)
    const context = useContext(MessageContext)
    const {isOpen, onToggle} = useDisclosure()


    useEffect(() => {
        setMessage(getLastMessageWithState())
    }, [context.messages]);

    const getLastMessageWithState = (): MessageProps | null => {
        for (let i = context.messages.length - 1; i >= 0; i--) {
            const message = context.messages[i];

            if (message.state) {
                return message;
            }
        }
        return null;
    }


    const getSVG = () => {
        switch (state) {
            case PenguinStateByName.DIARRHEA:
                return PenguinDiarrheaSVG;
            case PenguinStateByName.ALERT:
                return PenguinAlertSVG;
            case PenguinStateByName.SWEATY:
                return PenguinSweatySVG;
            case PenguinStateByName.FEVERISH:
                return PenguinFeverishSVG;
            case PenguinStateByName.BLEEDING:
                return PenguinBleedingSVG;
            case PenguinStateByName.VOMITING:
                return PenguinVomitingSVG;
            case PenguinStateByName.FATIGUE:
                return PenguinFatigueSVG;
            case PenguinStateByName.DEPRESSION:
                return PenguinDepressionSVG;
            case PenguinStateByName.PAIN:
                return PenguinPainSVG;
            case PenguinStateByName.WAITING_FOR_CARE:
                return PenguinWaitingForCareSVG;
            case PenguinStateByName.NORMAL:
            default:
                return PenguinSVG;
        }
    }

    return (
        <Flex
            flexDirection="column"
            alignItems="center"
            w="100%">
            {message &&
              <Box
                pb="4"
                px="4"
                alignSelf="flex-start"
                w='100%'
              >
                <IconButton
                  onClick={onToggle}
                  isRound={true}
                  variant='outline'
                  color='green.main'
                  borderColor="green.main"
                  aria-label='Done'
                  fontSize='15px'
                  size="xs"
                  icon={<IoInformation/>}
                />
                <Collapse in={isOpen} startingHeight="0.1px">
                  <Box
                    p='3'
                    color='black'
                    mt='2'
                    bg='transparent'
                    borderWidth="1px"
                    borderColor="green.main"
                    rounded="xl"
                    fontSize='0.9rem'
                  >

                    <Text fontWeight="bold">Message à l'origine de l'apparence du pingouin</Text>
                    <Center mx="auto" my={3}>
                      <Divider width={"120px"} borderColor="grey" />
                    </Center>
                      "{message.content}"
                  </Box>
                </Collapse>
              </Box>
            }
            <Flex align="center" position="relative">
                <Box h="300px">
                    <Center>
                        <Box
                            w="100%"
                            h="100%"
                            top="30%"
                            position="absolute"
                        >
                            <img src={blobSVG}/>
                        </Box>
                        <Box w="80%" h="100%" position="relative">
                            <img src={getSVG()}/>
                        </Box>
                    </Center>
                </Box>
            </Flex>
        </Flex>
    );
};

export default Penguin;