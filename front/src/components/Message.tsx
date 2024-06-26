import {Alert, AlertIcon, Box} from "@chakra-ui/react";

export const Message = (
    {
        message,
        borderRadius = 16,
        border = '1px solid',
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
    return (
        <Box
            m={m}
            p={p}
            border={border}
            borderColor={message.type === 'errored' ? 'alert' : "transparent"}
            borderRadius={borderRadius}
            borderBottomLeftRadius={message.type === 'received' ? 0 : borderRadius}
            borderBottomRightRadius={message.type === 'sent' ? 0 : borderRadius}
            bgColor={message.type === 'errored' ? 'transparent' : message.type === 'sent' ? 'blue.light' : 'blue.lightest'}
            color={message.type === 'errored' ? 'alert' : undefined}
            {...otherBoxProps}
        >
            {message.type === 'errored' &&
                <Alert status='error' bgColor="transparent" p="0">
                    <AlertIcon/>
                    {message.content}
                </Alert>
            }

            {message.type !== 'errored' &&
                message.content
            }
        </Box>
    );
}

export type MessageProps = {
    type: MessageType;
    content: string;
}

export type MessageType = 'sent' | 'received' | 'errored';