import Penguin, {PenguinStateByName} from "./Penguin.tsx";
import {useContext, useEffect, useState} from "react";
import {MessageContext} from "./MessagesProvider.tsx";

export const StatePenguin = () => {
    const messages = useContext(MessageContext);
    const [state, setState] = useState<PenguinStateByName>(PenguinStateByName.NORMAL);

    useEffect(() => {
        setState(getLastStateFromMessages())
    }, [messages]);

    const getLastStateFromMessages = () => {
        for (let i = messages.length - 1; i >= 0; i--) {
            const message = messages[i];

            if (message.state) {
                return message.state;
            }
        }

        // if we don't find a corresponding state, we return the default state
        return PenguinStateByName.NORMAL;
    }

    return (
        <Penguin
            state={state}
        />
    );
}