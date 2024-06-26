import "./App.css";
import Header from "./components/Header.tsx";
import PatientCard from "./components/PatientCard.tsx";
import {Box} from "@chakra-ui/react";
import {PatientMauriceDupont} from "./mocks/patient.ts";

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
    </>
  );
}

export default App;
