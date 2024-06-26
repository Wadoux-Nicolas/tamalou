import "./App.css";
import Header from "./components/Header.tsx";
import PatientCard from "./components/PatientCard.tsx";
import {Box} from "@chakra-ui/react";
import {PatientMauriceDupont} from "./mocks/patient.ts";
import CustomButton from "./assets/CustomButton.tsx";
import {FaBandAid} from "react-icons/fa";

function App() {
  return (
    <>
        <Header/>
        <Box
            maxW='800px'
            p='8'
        >
            <PatientCard
                patient={PatientMauriceDupont}
            />
        </Box>
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
    </>
  );
}

export default App;
