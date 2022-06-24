
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { Box, Button, ButtonGroup, Menu, useTheme } from "@mui/material"
import { Link } from "react-router-dom"
import ShoppingCartPopupButton from '../ShoppingCartPopupButton'


export const MainHeader = () => {
    const theme = useTheme()
    const styles = {
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(2),
    }
    return (
        <Box sx={styles}>
            <Button sx={{ color: "#fff" }} to="inventory" component={Link} size="small">Inventory</Button>
            <ButtonGroup variant='text' size="small">
                <Button sx={{ color: "#fff",marginLeft: theme.spacing(2)  }}>About</Button>
                <Button sx={{ color: "#fff", }} size="small"><ArrowDropDownIcon /></Button>
            </ButtonGroup>
            <ShoppingCartPopupButton />
        </Box>
    )
}

export const MainSubHeader = () => {
    const theme = useTheme()
    const styles = {
        backgroundColor: theme.palette.secondary.main,
    }
    return (
        <Box sx={styles}>
            Main SubHeader
        </Box>
    )
}
