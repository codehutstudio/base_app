import React from 'react'
import { Box, IconButton } from '@mui/material'
import Icons from '../../../Components/Icons'

interface Props {
    [key: string]: any
}
const Header = React.forwardRef<HTMLAllCollection, Props>((props, ref) => {
    return (
        <Box {...props}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton>
                    <Icons icon="userCircle" />
                </IconButton>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton>
                    <Icons icon="plus" />
                </IconButton>
            </Box>
        </Box>
    )
})

export default Header
