import "./App.css";
import PenguinComponent from "./components/avatar.tsx"


import Header from "./components/Header.tsx";
import PatientCard from "./components/PatientCard.tsx";
import {Box, Center} from "@chakra-ui/react";
import {PatientMauriceDupont} from "./mocks/patient.ts";
function App() {
  return (
    <>
        <Header/>
        <Box
            maxW='800px'
            p='8'
        >
            <Center>
                <PenguinComponent/>

            </Center>

            <PatientCard
                patient={PatientMauriceDupont}
            />
        </Box>
    </>
  );
}

export default App;
