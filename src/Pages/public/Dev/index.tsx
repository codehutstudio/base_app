import { Box, TextField } from '@mui/material'
import React, { useState } from 'react'
import { border } from '../../../AppStyles'
import { Col, ColWrapper, Row } from '../../../Components/LayoutElements'
import ButtonWithIcon from '../../../Components/ButtonWIthIcon'

export default function Dev() {
    const [value, setValue] = useState("")
    const onChange = (e: any) => {
        setValue(e.target.value)
    }
    const load = () => {
        console.log("load")
    }
    return (
        <ColWrapper>
            <Row sx={{ borderBottom: border, px: 1 }}>
                <TextField size='small' label="Enter Collection Name" variant='filled' margin="dense" value={value} onChange={onChange} />
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <ButtonWithIcon icon="load" text="load" onClick={load} variant="contained" size="small" />
                </Box>
            </Row>
        </ColWrapper>
    )
}
