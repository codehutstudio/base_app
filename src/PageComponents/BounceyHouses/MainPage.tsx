import { Box, ThemeProvider } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import theme from './BounceyHouses.theme'
import Header from './MainPageElements/Header'

export default function MainPage() {
    return (
        <ThemeProvider theme={theme}>
            <Box>
                <Header />
            </Box>
            <Outlet />
        </ThemeProvider>
    )
}
