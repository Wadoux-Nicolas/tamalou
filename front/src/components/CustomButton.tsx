import React, { forwardRef } from 'react';
import { Box, Text, Badge, Icon } from '@chakra-ui/react';

const CustomButton = forwardRef(({ icon, text, iconColor, bgColor, borderColor = "transparent", badgeContent, onClick }, ref) => {
    return (
        <Box display="flex" flexDirection="column" cursor={"pointer"} alignItems="center" onClick={onClick} ref={ref}>
            <Box
                position="relative"
                display="flex"
                alignItems="center"
                justifyContent="center"
                border="1px"
                borderColor={borderColor}
                borderRadius="full"
                bgColor={bgColor}
                p={4}
                width="60px"
                height="60px"
            >
                {badgeContent && (
                    <Badge
                        position="absolute"
                        top="-5px"
                        right="0"
                        bg="alert"
                        color="white"
                        borderRadius="full"
                        fontSize="0.8rem"
                        width="20px"
                        height="20px"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        {badgeContent}
                    </Badge>
                )}
                <Icon as={icon} color={iconColor} boxSize="30px" />
            </Box>
            {text && <Text fontSize="0.8rem" textAlign="center">{text}</Text>}
        </Box>
    );
});

export default CustomButton;