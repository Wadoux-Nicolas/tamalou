import React, { useState } from 'react';
import { Box, Flex, Slide, useDisclosure } from '@chakra-ui/react';
import { FaPhone } from 'react-icons/fa';
import Header from './components/Header';
import PatientCard from './components/PatientCard';
import { PatientMauriceDupont } from './mocks/patient';
import CustomButton from './components/CustomButton';
import GroupInformationButtons from './components/GroupInformationsButtons';
import SlideContent from './components/SlideContent';
import {FaMessage} from "react-icons/fa6";
import PenguinComponent from "./components/avatar.tsx"

function App() {
    const { isOpen, onToggle } = useDisclosure();
    const [content, setContent] = useState({});

    const handleButtonClick = (icon, title, description) => {
        setContent({ icon, title, description });
        onToggle();
    };

    const closeSlide = () => {
        onToggle();
    };

    return (
        <>
            <Flex align="center" justifyContent="space-between" h="100vh" flexDirection="column">
                <Header />
                <Box alignSelf="flex-start" p="8" w="100vw">
                    <PatientCard patient={PatientMauriceDupont} />
                </Box>
                <PenguinComponent/>
                <Flex flexDirection="column">
                    <GroupInformationButtons handleButtonClick={handleButtonClick} />
                    <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
                        <SlideContent content={content} closeSlide={closeSlide} />
                    </Slide>
                </Flex>
                <Flex alignSelf="flex-end" flexDirection="column" p="4" gap="2">
                    <CustomButton icon={FaPhone} iconColor="white" bgColor="alert" />
                    <CustomButton icon={FaMessage} iconColor="white" bgColor="blue.main" />
                </Flex>
            </Flex>
        </>
    );
}

export default App;