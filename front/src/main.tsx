import * as React from 'react'
import {ChakraProvider, extendTheme} from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import App from "./App.tsx";
import '@fontsource/almarai';
import "./index.css";

const colors = {
    green: {
        lightest: "#C8E4B2",
        light: "#9ED2BE",
        main: "#7EAA92",
    },
    white: "#FFFFFF",
    alert: "#F74C48",
    black: "#000000"
}

const fonts = {
    body: `'Almarai', sans-serif`,
}

const theme = extendTheme({ colors, fonts })

const rootElement = document.getElementById('root')

if (!rootElement) {
    throw new Error('No element with id root found')
}

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    </React.StrictMode>,
)