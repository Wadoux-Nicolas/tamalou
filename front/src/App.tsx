import "./App.css";
import PenguinComponent from "./components/avatar.tsx"


import Header from "./components/Header.tsx";
import PatientCard from "./components/PatientCard.tsx";
import {Box} from "@chakra-ui/react";
import {PatientMauriceDupont} from "./mocks/patient.ts";
function App() {
  return (
    <>
        <Header/>
        <PenguinComponent/>
        <Box
            maxW='800px'
            p='8'
        >
            <PatientCard
                patient={PatientMauriceDupont}
            />
        </Box>
    </>
  );
}

export default App;
