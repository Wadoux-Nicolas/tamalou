import {ForwardedRef, forwardRef} from 'react';
import { Box, Text, Badge, Icon } from '@chakra-ui/react';
import {IconType} from "react-icons";

const CustomButton = forwardRef((
    {
        icon,
        text,
        iconColor,
        bgColor,
        borderColor = "transparent",
        badgeContent,
        onClick,
        height = "50px",
        width = "50px",
    }: {
        icon: IconType,
        text?: string,
        iconColor?: string,
        bgColor?: string,
        borderColor?: string,
        badgeContent?: string|number,
        onClick?: () => void,
        height?: string,
        width?: string
    },
    ref: ForwardedRef<HTMLDivElement>
) => {
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
                width={width}
                height={height}
            >
                {!!badgeContent && (
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
                <Icon as={icon} color={iconColor} />
            </Box>
            {text && <Text fontSize="0.8rem" mt={"2"} textAlign="center">{text}</Text>}
        </Box>
    );
});

export default CustomButton;