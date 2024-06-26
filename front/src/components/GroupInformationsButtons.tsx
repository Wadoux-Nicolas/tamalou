import React from 'react';
import { Flex } from '@chakra-ui/react';
import { FaBandAid, FaPills, FaUtensils, FaDumbbell, FaMoon } from 'react-icons/fa';
import SlideButton from './SlideButton';

const GroupInformationButtons = ({ handleButtonClick }) => {
    return (
        <>
            <Flex justifyContent="center" mb={6}>
                <Flex justify="space-evenly" gap={12} maxW="800px" width="100%">
                    <SlideButton
                        icon={FaBandAid}
                        text="Pansements"
                        badgeContent={1}
                        borderColor={"green.main"}
                        onToggle={() => handleButtonClick(FaBandAid, 'Pansements', 'Informations sur les pansements')}
                    />
                    <SlideButton
                        icon={FaPills}
                        text="Médicaments"
                        badgeContent={1}
                        borderColor={"green.main"}
                        onToggle={() => handleButtonClick(FaPills, 'Médicaments', 'Informations sur les médicaments')}
                    />
                    <SlideButton
                        icon={FaUtensils}
                        text="Repas"
                        borderColor={"green.main"}
                        onToggle={() => handleButtonClick(FaUtensils, 'Repas', 'Informations sur les repas')}
                    />
                </Flex>
            </Flex>
            <Flex justifyContent="center">
                <Flex justify="space-evenly" maxW="600px" width="100%">
                    <SlideButton
                        icon={FaDumbbell}
                        text="Exercice"
                        badgeContent={1}
                        borderColor={"green.main"}
                        onToggle={() => handleButtonClick(FaDumbbell, 'Exercice', 'Informations sur les exercices')}
                    />
                    <SlideButton
                        icon={FaMoon}
                        text="Repos"
                        badgeContent={1}
                        borderColor={"green.main"}
                        onToggle={() => handleButtonClick(FaMoon, 'Repos', 'Informations sur le repos')}
                    />
                </Flex>
            </Flex>
        </>
    );
};

export default GroupInformationButtons;