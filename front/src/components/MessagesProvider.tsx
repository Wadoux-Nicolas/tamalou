import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {Messages} from "./Messages.tsx";
import {MessageProps} from "./Message.tsx";
import {parseMessages} from "../models/message.ts";

export interface MessagesAndSummary{
    messages: MessageProps[];
    summary: string;
}
export const MessageContext = createContext<MessagesAndSummary>({messages:[], summary:""});

export const MessagesContextContainer = () => {
    const messagesAndSummary = useContext(MessageContext);

    return (
        <Messages messages={messagesAndSummary.messages}/>
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
    const loadingMessage = "Chargement en cours..."
    const [summary, setSummary] = useState<string>(loadingMessage);
    let lastFetch: Date | null = null;

    const fetchSummary = () => {
        let url = 'http://localhost:8000/summary';
        setSummary(loadingMessage);

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
                setSummary(data);
            })
    };

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
                if (!data || data.length <= 0) {
                    return;
                }

                setMessages((prevMessages) => [...prevMessages, ...parseMessages(data)]);
                lastFetch = new Date();
                fetchSummary()
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
        <MessageContext.Provider value={{messages, summary}}>
            {children}
        </MessageContext.Provider>
    );
};