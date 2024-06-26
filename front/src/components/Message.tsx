import {Alert, AlertIcon, Box} from "@chakra-ui/react";

export const Message = (
    {
        message,
        borderRadius = 16,
        border = '2px solid',
        m = 4,
        p = 4,
        otherBoxProps
    }: {
        message: MessageProps,
        borderRadius?: number
        border?: string,
        m?: number,
        p?: number,
        otherBoxProps?: Record<string, unknown>
    }
) => {
    const isSent = message.type === 'sent' || message.type === 'sent-outlined';
    const isReceived = message.type === 'received' || message.type === 'received-outlined';
    const isErrored = message.type === 'errored' || message.type === 'errored-outlined';
    const isOutlined = message.type === 'sent-outlined' || message.type === 'received-outlined' || message.type === 'errored-outlined';
    const stateColor = isErrored ? 'alert' : isSent ? 'blue.light' : 'blue.lightest';

    return (
        <Box
            m={m}
            p={p}
            border={border}
            borderColor={stateColor}
            borderRadius={borderRadius}
            borderBottomLeftRadius={isReceived ? 0 : borderRadius}
            borderBottomRightRadius={isSent ? 0 : borderRadius}
            bgColor={isOutlined ? 'white' : stateColor}
            color={isErrored ? 'alert' : undefined}
            {...otherBoxProps}
        >
            {isErrored &&
                <Alert
                    p="0"
                    status='error'
                    bgColor={isOutlined ? 'white' : 'alert'}
                    color={isOutlined ? 'alert' : 'white'}
                >
                    <AlertIcon
                        color={isOutlined ? 'alert' : 'white'}
                    />
                    {message.content}
                </Alert>
            }

            {!isErrored &&
                message.content
            }
        </Box>
    );
}

export type MessageProps = {
    type: MessageType;
    content: string;
}

export type MessageType = 'sent' | 'received' | 'errored' | 'sent-outlined' | 'received-outlined' | 'errored-outlined';