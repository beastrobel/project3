import React from "react"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter} from "react-router-dom"
import '@fontsource-variable/figtree'
import { ChakraProvider } from '@chakra-ui/react'
  import theme from './components/Theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>  
  </React.StrictMode>
)