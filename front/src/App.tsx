import PenguinComponent from "./components/avatar.tsx"
import Header from "./components/Header.tsx";
import PatientCard from "./components/PatientCard.tsx";
import {Box, Center, Flex} from "@chakra-ui/react";
import {PatientMauriceDupont} from "./mocks/patient.ts";
import {Messages} from "./components/Messages.tsx";
import CustomButton from "./components/CustomButton.tsx";
import {FaBandAid, FaPills, FaUtensils, FaDumbbell, FaMoon, FaPhone, FaHospitalUser} from "react-icons/fa";

function App() {
    return (
        <>
            <Flex
                align="center"
                justifyContent="space-between"
                h="100vh"
                flexDirection="column"
            >
                <Header/>
                <Box
                    maxW='800px'
                    p='8'
                    gap={8}
                    display="flex"
                    flexDirection={"column"}
                >
                    <PatientCard
                        patient={PatientMauriceDupont}
                    />

                    <Center>
                        <PenguinComponent/>
                    </Center>


                </Box>
                <Box>
                    <Flex justifyContent="center" mb={6}>
                        <Flex justify="space-evenly" gap={12} maxW="800px" width="100%">
                            <CustomButton
                                icon={FaBandAid}
                                text="Pansements"
                                badgeContent={1}
                                borderColor={"blue.main"}
                            />
                            <CustomButton
                                icon={FaPills}
                                text="Médicaments"
                                badgeContent={1}
                                borderColor={"blue.main"}
                            />
                            <CustomButton
                                icon={FaUtensils}
                                text="Repas"
                                borderColor={"blue.main"}
                            />
                        </Flex>
                    </Flex>
                    <Flex justifyContent="center">
                        <Flex justify="space-evenly" maxW="600px" width="100%">
                            <CustomButton
                                icon={FaDumbbell}
                                text="Exercice"
                                badgeContent={1}
                                borderColor={"blue.main"}
                            />
                            <CustomButton
                                icon={FaMoon}
                                text="Repos"
                                badgeContent={1}
                                borderColor={"blue.main"}
                            />
                        </Flex>
                    </Flex>
                </Box>
                <Flex alignSelf={"flex-end"} flexDirection="column" p={"4"} gap={"2"}>
                    <CustomButton
                        icon={FaPhone}
                        iconColor={"white"}
                        bgColor={"alert"}
                    />
                    <Messages
                        messages={[
                            {
                                type: 'sent',
                                content: 'Hello Maurice, how are you today?',
                                avatarName: 'Maurice Dupont',
                            },
                            {
                                avatarIcon: FaHospitalUser,
                                type: 'received',
                                content: 'Hello, I am fine, thank youHello, I am fine, thank youHello, I am fine, thank youHello, I am fine, thank youHello, I am fine, thank youHello, I am fine, thank youHello, I am fine, thank youHello, I am fine, thank youHello, I am fine, thank youHello, I am fine, thank youHello, I am fine, thank youHello, I am fine, thank youHello, I am fine, thank youHello, I am fine, thank youHello, I am fine, thank youHello, I am fine, thank youHello, I am fine, thank you'
                            },
                            {
                                type: 'errored',
                                content: 'No messages to display',
                            },
                            {
                                avatarName: 'Maurice Dupont',
                                type: 'sent',
                                outlined: true,
                                content: 'Hello Maurice, how are you today?',
                            },
                            {
                                avatarIcon: FaHospitalUser,
                                type: 'received',
                                outlined: true,
                                content: 'Hello, I am fine, thank you',
                            },
                            {
                                type: 'errored',
                                outlined: true,
                                content: 'No messages to display',
                            },
                        ]}
                    />
                </Flex>
            </Flex>
        </>
    );
}

export default App;