import {Box, Center, Flex} from '@chakra-ui/react';
import PenguinSVG from "../assets/normal.svg";
import blobSVG from "../assets/blob.svg";
import {Message} from "./Message.tsx";

const Penguin = () => {
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