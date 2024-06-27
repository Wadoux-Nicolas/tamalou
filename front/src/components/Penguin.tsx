import {
    Box,
    Center,
    Flex, IconButton,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Text
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
import {IoIosInformationCircleOutline} from "react-icons/io";
import {useContext, useEffect, useState} from "react";
import {MessageContext} from "./MessagesProvider.tsx";
import {Message, MessageProps} from "./Message.tsx";

const Penguin = (
    {
        state = PenguinStateByName.NORMAL,
    }: {
        state?: PenguinStateByName,
    }
) => {
    const [message, setMessage] = useState<MessageProps | null>(null)
    const context = useContext(MessageContext)
    useEffect(() => {
        setMessage(getLastMessageWithState())
    }, [context.messages]);

    const getLastMessageWithState = () : MessageProps | null => {
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
            <Box position="absolute"
            top="0px"
            right="-45px">
                <Popover placement="left">
                    <PopoverTrigger>
                        <IconButton  variant='outline'
                                     icon={<IoIosInformationCircleOutline />}></IconButton>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Confirmation!</PopoverHeader>
                        <PopoverBody>
                            {message && <Message outlined={true} message={message}/>}
                            {!message && <Text>Chargement en cours...</Text>}
                        </PopoverBody>
                    </PopoverContent>
                </Popover>

            </Box>
        </Flex>
    );
};

export default Penguin;