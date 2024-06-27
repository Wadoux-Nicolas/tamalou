import { Flex } from '@chakra-ui/react';
import { FaBandAid, FaPills, FaUtensils, FaDumbbell, FaMoon } from 'react-icons/fa';
import SlideButton from './SlideButton';
import { useEffect, useState } from "react";
import { IconType } from "react-icons";

type NotificationCategory = "bandage" | "medication" | "meals" | "exercise" | "rest";

const useNotification = () => {
    const [notifications, setNotifications] = useState<Record<string, {amount: number, content: string}>>({})

    useEffect(() => {
        fetch('http://localhost:8000/notifications', {
            method: 'GET',


        })
          .then(response => response.json())
          .then(setNotifications)

    }, [])

    return {
        getCount: (category: NotificationCategory): number => notifications[category]?.amount ?? 0,
        getDescription: (category: NotificationCategory): string => notifications[category]?.content ?? ""
    };
}

type Props = {
    handleButtonClick: (icon: IconType, title: string, description: string) => void
}

const GroupInformationButtons = ({ handleButtonClick }: Props) => {
    const notifs = useNotification()

    return (
        <>
            <Flex justifyContent="center" mb={6}>
                <Flex justify="space-evenly" gap={12} maxW="800px" width="100%">
                    <SlideButton
                        bgColor={"white"}
                        icon={FaBandAid}
                        text="Pansements"
                        badgeContent={notifs.getCount("bandage")}
                        borderColor={"green.main"}
                        onToggle={() => handleButtonClick(FaBandAid, 'Pansements', notifs.getDescription("bandage"))}
                    />
                    <SlideButton
                        bgColor={"white"}
                        icon={FaPills}
                        text="Médicaments"
                        badgeContent={notifs.getCount("medication")}
                        borderColor={"green.main"}
                        onToggle={() => handleButtonClick(FaPills, 'Médicaments', notifs.getDescription("medication"))}
                    />
                    <SlideButton
                        bgColor={"white"}
                        icon={FaUtensils}
                        text="Repas"
                        badgeContent={notifs.getCount("meals")}
                        borderColor={"green.main"}
                        onToggle={() => handleButtonClick(FaUtensils, 'Repas', notifs.getDescription("meals"))}
                    />
                </Flex>
            </Flex>
            <Flex justifyContent="center">
                <Flex justify="space-evenly" maxW="600px" width="100%">
                    <SlideButton
                        bgColor={"white"}
                        icon={FaDumbbell}
                        text="Exercice"
                        badgeContent={notifs.getCount("exercise")}
                        borderColor={"green.main"}
                        onToggle={() => handleButtonClick(FaDumbbell, 'Exercice', notifs.getDescription("exercise"))}
                    />
                    <SlideButton
                        bgColor={"white"}
                        icon={FaMoon}
                        text="Repos"
                        badgeContent={notifs.getCount("rest")}
                        borderColor={"green.main"}
                        onToggle={() => handleButtonClick(FaMoon, 'Repos', notifs.getDescription("rest"))}
                    />
                </Flex>
            </Flex>
        </>
    );
};

export default GroupInformationButtons;