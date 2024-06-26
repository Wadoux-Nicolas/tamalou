import "./App.css";
import Header from "./components/Header.tsx";
import PatientCard from "./components/PatientCard.tsx";
import {Box} from "@chakra-ui/react";
import {PatientMauriceDupont} from "./mocks/patient.ts";
import {Messages} from "./components/Messages.tsx";

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

            <Messages
                messages={[
                    {type: 'sent', content: 'Hello Maurice, how are you today?'},
                    {type: 'received', content: 'Hello, I am fine, thank youHello, I am fine, thank youHello, I am fine, thank youHello, I am fine, thank youHello, I am fine, thank youHello, I am fine, thank youHello, I am fine, thank youHello, I am fine, thank youHello, I am fine, thank youHello, I am fine, thank youHello, I am fine, thank youHello, I am fine, thank youHello, I am fine, thank youHello, I am fine, thank youHello, I am fine, thank youHello, I am fine, thank youHello, I am fine, thank you'},
                    {type: 'errored', content: 'No messages to display'},
                ]}
            />
        </Box>
    </>
  );
}

export default App;
