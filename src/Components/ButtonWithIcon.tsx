import { Button } from '@mui/material'
import React, { forwardRef } from 'react'
import Icons from './Icons'

const ButtonWithIcon = forwardRef((props: any, ref) => {
    const { icon, text,  ...rest} = props as any
    return (
        <Button {...rest} startIcon={<Icons icon={icon} />}>
            {text}
        </Button>
    )
})

export default ButtonWithIcon
