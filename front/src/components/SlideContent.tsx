import React from 'react';
import { Box, Heading, Icon, Text, IconButton } from '@chakra-ui/react';
import { RxCross2 } from "react-icons/rx";

const SlideContent = ({ content, closeSlide }) => {
    return (
        <Box p={4} mx="auto" borderTopRightRadius="2xl" borderTopLeftRadius="2xl" bg="white" position="relative">
            <IconButton
                aria-label="Close"
                icon={<RxCross2/>}
                position="absolute"
                top="10px"
                right="10px"
                onClick={closeSlide}
            />
            {content.icon && <Icon as={content.icon} color="green.main" boxSize="20px" mb="2" />}
            {content.title && <Heading as="h2" fontSize="1rem" mb="4" color="green.main">{content.title}</Heading>}
            {content.description && <Text fontSize="0.8rem">{content.description}</Text>}
        </Box>
    );
};

export default SlideContent;