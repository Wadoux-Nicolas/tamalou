import React from 'react';
import {Box, Center, Flex, Text} from '@chakra-ui/react';
import PenguinSVG from "../assets/normal.svg";
import blobSVG from "../assets/blob.svg";

const PenguinComponent = () => {
    return (
        <Flex align="center" position="relative">
            <Box h="300px">
                <Center>
                    <Box w="80%" h="100%" position="relative" zIndex="1" >
                        <img src={PenguinSVG}/>

                    </Box>
                    <Box
                        w="100%"
                        h="100%"
                        top="30%"
                        position="absolute"
                    >
                        <img src={blobSVG}/>

                    </Box>

                </Center>
            </Box>
            <Box
                position="absolute"
                top="0px"
                left="0px"
                bg="white"
                border="1px solid #ccc"
                borderRadius="md"
                p="2"
            >
                <Text>salut !</Text>
            </Box>
        </Flex>
    );
};

export default PenguinComponent;