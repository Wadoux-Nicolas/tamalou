import {useState} from 'react';
import {Box, Flex, Slide, useDisclosure} from '@chakra-ui/react';
import {FaPhone} from 'react-icons/fa';
import Header from './components/Header';
import PatientCard from './components/PatientCard';
import {PatientMauriceDupont} from './mocks/patient';
import CustomButton from './components/CustomButton';
import GroupInformationButtons from './components/GroupInformationsButtons';
import SlideContent from './components/SlideContent';
import PenguinComponent from "./components/Penguin.tsx"
import {IconType} from "react-icons";
import {MessagesContextContainer, MessagesProvider} from "./components/MessagesProvider.tsx";

function App() {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [content, setContent] = useState({});

    const handleButtonClick = (icon: IconType, title: string, description: string) => {
        setContent({icon, title, description});
        if (!isOpen) {
            onOpen();
        }
    };

    const closeSlide = () => {
        onClose();
    };

    return (
        <>
            <Flex backgroundColor={"background"} align="center" justifyContent="space-between" h="100vh" flexDirection="column">
                <Header/>
                <Box alignSelf="flex-start" w="100vw" p={4}>
                    <PatientCard patient={PatientMauriceDupont}/>
                </Box>
                <PenguinComponent/>

                <Flex flexDirection="column">
                    <GroupInformationButtons handleButtonClick={handleButtonClick}/>
                    <Slide direction="bottom" in={isOpen} style={{zIndex: 10}}>
                        <SlideContent content={content} closeSlide={closeSlide}/>
                    </Slide>
                </Flex>
                <Flex alignSelf="flex-end" flexDirection="column" p="4" gap="2">
                    <CustomButton icon={FaPhone} iconColor="white" bgColor="alert"/>
                    <MessagesProvider>
                        <MessagesContextContainer/>
                    </MessagesProvider>
                </Flex>
            </Flex>
        </>
    );
}

export default App;