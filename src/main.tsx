import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/routes'
import '@/assets/css/index.css'
import { ChakraProvider } from '@chakra-ui/react'
import appTheme from './theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={appTheme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
)
