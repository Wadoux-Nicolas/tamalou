import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {Messages} from "./Messages.tsx";
import {MessageProps} from "./Message.tsx";
import {FaHospitalUser} from "react-icons/fa";

const MessageContext = createContext([]);

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

    const fetchMessages = () => {
        const randomMessages: MessageProps[] = [
            {
                type: 'sent',
                content: 'Hello Maurice, how are you today?',
                avatarName: 'Maurice Dupont',
            },
            {
                type: 'received',
                content: 'Hello Maurice, how are you today?',
                avatarIcon: FaHospitalUser,
            },
        ];

        setMessages((prevMessages) => [...prevMessages, ...randomMessages]);

        return setTimeout(fetchMessages, 5000);
    };

    useEffect(() => {
        const timeOut = fetchMessages();

        return () => clearTimeout(timeOut);
    }, []);

    return (
        <MessageContext.Provider value={messages}>
            {children}
        </MessageContext.Provider>
    );
};