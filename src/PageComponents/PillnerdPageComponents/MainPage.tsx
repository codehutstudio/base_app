import { Box } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import React from 'react'
import PillnerdDatePicker from './MainPageComponents/PillnerdDatePicker'
import Header from './MainPageComponents/Header'
import MedicationList from './MainPageComponents/MedicationList'
import theme from './PillnerdTheme'
import MedicationLists from './MainPageComponents/MedicationLists'

export default function MainPage() {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{height: '100%', width: '100%', display: 'flex', flexDirection: 'column'}}>
        <Header sx={{color: '#fff', backgroundColor: 'secondary.main', px: 1, display: 'flex', justifyContent: 'space-between'}}/>
        <MedicationLists />
        {/* <PillnerdDatePicker /> */}
        {/* <MedicationList sx={{flexGrow: 1}}/> */}
    </Box>
    </ThemeProvider>
  )
}
