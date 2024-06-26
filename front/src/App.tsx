import Header from "./components/Header.tsx";
import PatientCard from "./components/PatientCard.tsx";
import {Box, Flex} from "@chakra-ui/react";
import {PatientMauriceDupont} from "./mocks/patient.ts";
import CustomButton from "./components/CustomButton.tsx";
import {FaBandAid} from "react-icons/fa";

function App() {
    return (
        <Flex
            align="center"
            justifyContent="space-between"
            h="100vh"
            flexDirection='column'
        >
            <Header/>
            <Box
                maxW='800px'
                p='8'
            >
                <PatientCard
                    patient={PatientMauriceDupont}
                />
            </Box>
            <Box>
                <CustomButton
                    icon={FaBandAid}
                    text="Pansements"
                    badgeContent={2}
                    borderColor={"blue.main"}
                />
                <CustomButton
                    icon={FaBandAid}
                    bgColor={"alert"}
                    iconColor={"white"}
                />
            </Box>
        </Flex>
    );
}

export default App;
