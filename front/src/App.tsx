import {useState} from 'react';
import {Box, Flex, Slide, useDisclosure} from '@chakra-ui/react';
import {FaPhone} from 'react-icons/fa';
import Header from './components/Header';
import PatientCard from './components/PatientCard';
import {PatientMauriceDupont} from './mocks/patient';
import CustomButton from './components/CustomButton';
import GroupInformationButtons from './components/GroupInformationsButtons';
import SlideContent from './components/SlideContent';
import {IconType} from "react-icons";
import {MessagesContextContainer, MessagesProvider} from "./components/MessagesProvider.tsx";
import {StatePenguin} from "./components/StatePenguin.tsx";

function App() {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [content, setContent] = useState<{ icon: IconType, title: string, description: string } | null>(null);

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
            <Flex backgroundColor={"background"} align="center" justifyContent="flex-start" gap="4" h="100%"
                  minH="100vh"
                  flexDirection="column" onClick={isOpen ? closeSlide : undefined}>
                <Header/>
                <MessagesProvider>
                    <Box w="100vw" maxW="800px" p={4}>
                        <PatientCard patient={PatientMauriceDupont}/>
                    </Box>
                    <StatePenguin/>

                    <Flex flexDirection="column" pb="16">
                        <GroupInformationButtons handleButtonClick={handleButtonClick}/>
                    </Flex>

                    <Flex alignSelf="flex-end" flexDirection="column" p="4" gap="2" position="fixed" bottom="0"
                          right="0">
                        <CustomButton icon={FaPhone} iconColor="white" bgColor="alert"/>
                        <MessagesContextContainer/>
                    </Flex>
                </MessagesProvider>
            </Flex>

            <Slide direction="bottom" in={isOpen} style={{zIndex: 10}}>
                <SlideContent content={content} closeSlide={closeSlide}/>
            </Slide>
        </>
    );
}

export default App;