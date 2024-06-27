import {Alert, AlertIcon, Avatar, Box, Icon} from "@chakra-ui/react";
import {IconType} from "react-icons";

export const Message = (
    {
        message,
        borderRadius = 10,
        border = '2px solid',
        my = 4,
        p = 2,
        outlined = false,
        otherBoxProps,
    }: {
        message: MessageProps,
        borderRadius?: number
        border?: string,
        my?: number,
        p?: number,
        outlined?: boolean,
        otherBoxProps?: Record<string, unknown>
    }
) => {
    const isSent = message.type === 'sent';
    const isReceived = message.type === 'received';
    const isErrored = message.type === 'errored';
    const stateColor = isErrored ? 'alert' : isSent ? 'green.light' : 'green.lightest';
    const hasAvatar = message.avatarName || message.avatarIcon;

    return (
        <Box
            display="flex"
            my={my}
        >
            {isReceived && hasAvatar &&
                <Avatar
                    size='sm'
                    name={message.avatarName}
                    icon={<Icon as={message.avatarIcon}/>}
                    mr={2}
                    bgColor={stateColor}
                    color="black"
                />
            }

            <Box
                p={p}
                border={border}
                borderColor={stateColor}
                borderRadius={borderRadius}
                bgColor={outlined ? 'white' : stateColor}
                {...otherBoxProps}
            >
                {isErrored &&
                    <Alert
                        p="0"
                        status='error'
                        bgColor={outlined ? 'white' : 'alert'}
                        color={outlined ? 'alert' : 'white'}
                    >
                        <AlertIcon
                            color={outlined ? 'alert' : 'white'}
                        />
                        {message.content}
                    </Alert>
                }

                {!isErrored &&
                    message.content
                }
            </Box>
        </Box>
    );
}

export type MessageProps = {
    type: MessageType;
    content: string;
    avatarName?: string;
    avatarIcon?: IconType;
}

export type MessageType = 'sent' | 'received' | 'errored';