import * as React from 'react'
import {ChakraProvider, extendTheme} from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import App from "./App.tsx";
import "./index.css";

const colors = {
    blue: {
        lightest: "#bfe6ec",
        light: "#97CAD3",
        main: "#13869A",
    },
    white: "#FFFFFF",
    alert: "#F74C48",
    black: "#000000"
}


const theme = extendTheme({ colors })

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