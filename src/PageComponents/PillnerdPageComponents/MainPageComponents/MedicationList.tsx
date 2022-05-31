import React from 'react'
import { Box } from '@mui/material'

interface Props {
    [key: string]: any
}
const MedicationList = React.forwardRef<HTMLAllCollection, Props>((props, ref) => {
    return (
        <Box {...props}>
            Medication list
        </Box>
    )
})

export default MedicationList
