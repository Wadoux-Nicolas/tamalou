import { Box, Heading, Icon, Text, IconButton } from '@chakra-ui/react';
import { RxCross2 } from "react-icons/rx";
import { IconType } from "react-icons";

type Props = {
  content: {icon: IconType, title: string, description: string} | null
  closeSlide: () => void
}

const SlideContent = ({ content, closeSlide }: Props) => {
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
            {content?.icon && <Icon as={content.icon} color="green.main" boxSize="20px" mb="2" />}
            {content?.title && <Heading as="h2" fontSize="1rem" mb="4" color="green.main">{content.title}</Heading>}
            {content?.description && <Text fontSize="0.8rem">{content.description}</Text>}
        </Box>
    );
};

export default SlideContent;