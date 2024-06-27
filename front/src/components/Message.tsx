import {Alert, AlertIcon, Avatar, Box, Icon} from "@chakra-ui/react";
import {IconType} from "react-icons";
import {PenguinStateByName} from "./Penguin.tsx";

export const Message = (
    {
        message,
        borderRadius = 16,
        border = '2px solid',
        m = 4,
        p = 4,
        outlined = false,
        otherBoxProps,
    }: {
        message: MessageProps,
        borderRadius?: number
        border?: string,
        m?: number,
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
            m={m}
        >
            {isReceived && hasAvatar &&
                <Avatar
                    size='md'
                    name={message.avatarName}
                    icon={<Icon as={message.avatarIcon}/>}
                    mr={4}
                    bgColor={stateColor}
                    color="black"
                />
            }

            <Box
                p={p}
                border={border}
                borderColor={stateColor}
                borderRadius={borderRadius}
                borderBottomLeftRadius={isReceived ? 0 : borderRadius}
                borderBottomRightRadius={isSent ? 0 : borderRadius}
                bgColor={outlined ? 'white' : stateColor}
                color={isErrored ? 'alert' : undefined}
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

            {isSent && hasAvatar &&
                <Avatar
                    size='md'
                    name={message.avatarName}
                    icon={<Icon as={message.avatarIcon}/>}
                    ml={4}
                    bgColor={stateColor}
                />
            }
        </Box>
    );
}

export type MessageProps = {
    type: MessageType;
    content: string;
    avatarName?: string;
    avatarIcon?: IconType;
    state?: PenguinStateByName;
}

export type MessageType = 'sent' | 'received' | 'errored';