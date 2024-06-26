import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import PenguinSVG from "../assets/normal.svg";


const PenguinComponent = () => {
    return (
        <Flex direction="column" align="center" position="relative">
            <Box
                w="300px"
                h="300px"
                bg="#a8dadc"
                borderRadius="full"
                display="flex"
                justifyContent="center"
                alignItems="center"
                overflow="hidden"
                position="relative"
            >
                <Box
                    w="100%"
                    h="100%"
                    position="relative"
                    left="9%"
                >
                    <img src={PenguinSVG}/>

                </Box>
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
