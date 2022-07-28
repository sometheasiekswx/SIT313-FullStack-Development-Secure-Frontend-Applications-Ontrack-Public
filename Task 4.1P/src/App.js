import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import HomePage from './pages/HomePage'
import Header from './components/Header'
import Footer from './components/Footer'


const theme = createTheme({
    palette: {
        type: 'light', primary: {
            main: '#353e99',
        }, secondary: {
            main: '#f33d68',
        }, warning: {
            main: '#6a2762',
        }, info: {
            main: '#82f2fd',
        },
    }, typography: {
        fontFamily: 'Montserrat',
    }
})


function App() {
    return (<ThemeProvider theme={theme}>
        <CssBaseline/>
        <Header/>
        <HomePage/>
        <Footer/>
    </ThemeProvider>)
}

export default App
