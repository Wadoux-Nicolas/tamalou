import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {Messages} from "./Messages.tsx";
import {MessageProps} from "./Message.tsx";
import {parseMessages} from "../models/message.ts";

export const MessageContext = createContext<MessageProps[]>([]);

export const MessagesContextContainer = () => {
    const messages = useContext(MessageContext);

    return (
        <Messages messages={messages}/>
    );
}

export const MessagesProvider = (
    {
        children
    }: {
        children: ReactNode
    }
) => {
    const [messages, setMessages] = useState<MessageProps[]>([]);
    let lastFetch: Date | null = null;

    const fetchMessages = () => {
        let url = 'http://localhost:8000/messages';
        if (lastFetch !== null) {
            url += '?date=' + lastFetch.toISOString().split('.')[0];
        }

        fetch(
            url,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
            .then(r => r.json())
            .then((data) => {
                setMessages((prevMessages) => [...prevMessages, ...parseMessages(data)]);
                lastFetch = new Date();
            })
            .finally(() => {
                setTimeout(fetchMessages, 3000);
            });
    };

    useEffect(() => {
        // 2 calls are made to fetchMessages() in the first render in development mode
        const timeout = setTimeout(fetchMessages, 0);

        return () => {
            clearTimeout(timeout)
        };
    }, []);

    return (
        <MessageContext.Provider value={messages}>
            {children}
        </MessageContext.Provider>
    );
};