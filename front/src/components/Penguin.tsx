import React, { useEffect, useState } from 'react';
import { Box, Center, Flex } from '@chakra-ui/react';
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
import {Message} from "./Message.tsx";

const Penguin = (
    {
        state = PenguinStateByName.NORMAL,
    }: {
        state?: PenguinStateByName,
    }
) => {

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
            <Box
                position="absolute"
                top="0px"
                left="-45px"
            >
                <Message
                    outlined={true}
                    message={{
                        content: "Salut !",
                        type: "sent",
                    }}
                />
            </Box>
        </Flex>
    );
};

export default Penguin;

export enum PenguinStateByName {
    NORMAL = 'normal',
    DIARRHEA = 'diarrhé',
    ALERT = 'alerte',
    SWEATY = 'sueur',
    FEVERISH = 'fievreux',
    BLEEDING = 'saignement',
    VOMITING = 'vomissements',
    FATIGUE = 'fatigue',
    DEPRESSION = 'depression',
    PAIN = 'douleur',
    WAITING_FOR_CARE = 'en_attente_de_soins',
}