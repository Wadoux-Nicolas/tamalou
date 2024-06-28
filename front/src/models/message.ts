import {MessageProps} from "../components/Message.tsx";
import {FaHospitalUser} from "react-icons/fa";
import {getStateFromString} from "./penguin_state.tsx";

export interface MessageJson {
    content: string;
    role: string;
    should_be_analyzed: boolean;
    date: string;
    category?: {
        label: string;
        score: number;
    };
}

export const parseMessage = (message: MessageJson): MessageProps => {
    return {
        type: message.role === 'hopital' ? 'received' : 'sent',
        content: message.content,
        avatarIcon: message.role === 'hopital' ? FaHospitalUser : undefined,
        date: new Date(message.date + 'Z'),
        state: message.category ? getStateFromString(message.category.label) : undefined,
    };
}
export const parseMessages = (messages: MessageJson[]): MessageProps[] => {
    return messages.map((message) => {
        return parseMessage(message);
    });
}