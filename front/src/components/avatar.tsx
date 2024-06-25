import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { ReactComponent as PenguinSVG } from './normal.svg';

const PenguinComponent = ({ text }) => {
    return (
        <Flex direction="column" align="center" position="relative">
            <Box
                position="absolute"
                top="-60px"
                left="20px"
                bg="white"
                border="1px solid #ccc"
                borderRadius="md"
                boxShadow="md"
                p="2"
                _after={{
                    content: '""',
                    position: 'absolute',
                    bottom: '-10px',
                    left: '10px',
                    borderWidth: '10px',
                    borderStyle: 'solid',
                    borderColor: 'white transparent transparent transparent',
                }}
            >
                <Text>{text}</Text>
            </Box>
            <Box
                w="300px"
                h="300px"
                bg="#a8dadc"
                borderRadius="full"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <PenguinSVG style={{ width: '150px', height: 'auto' }} />
            </Box>
        </Flex>
    );
};

export default PenguinComponent;
