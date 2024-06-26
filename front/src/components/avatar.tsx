import {Box, Center, Flex} from '@chakra-ui/react';
import PenguinSVG from "../assets/normal.svg";
import {Message} from "./Message.tsx";

const PenguinComponent = () => {
    return (
        <Flex align="center" position="relative">
            <Box
                w="400px"
                h="400px"
                bg="#a8dadc"
                borderRadius="full"
                display="flex"
                justifyContent="center"
                alignItems="center"
                overflow="hidden"
                position="relative"
            >
                <Center>
                    <Box
                        w="100%"
                        h="100%"
                        position="relative"
                    >
                        <img src={PenguinSVG}/>

                    </Box>
                </Center>
            </Box>
            <Box
                position="absolute"
                top="0px"
                left="0px"
            >
                <Message message={{
                    content: "Salut !",
                    type: "sent-outlined",
                }}/>
            </Box>
        </Flex>
    );
};

export default PenguinComponent;
