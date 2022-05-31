import { Box, Typography } from "@mui/material"
import ButtonWithIcon from "../../../Components/ButtonWithIcon"
import Icons from "../../../Components/Icons"

export const NoLists = ({newList}: any) => {
    return (
        <Box sx={{p: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%', flexDirection: 'column' }}>
            <Icons icon="noData" sx={{fontSize: 200, color: '#d7d7d7'}}/>
            <Typography variant="body2">No List(s) Created</Typography>
            <ButtonWithIcon onClick={newList} sx={{mt:1}} icon="plus" text="New List" variant="contained" color="success"/>
        </Box>
    )
}