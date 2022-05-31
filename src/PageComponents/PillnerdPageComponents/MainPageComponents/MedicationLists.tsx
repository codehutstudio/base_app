import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Paper } from '@mui/material'
import React from 'react'
import { useRecoilValue } from 'recoil'
import Icons from '../../../Components/Icons'
import { useOpenClose } from '../../../Hooks/openClose.hook'
import { pn_appDataAtom } from '../../../Store/Pillnerd.store'
import { NoLists } from './MedicationListsElements'
import NewListForm from './NewListForm'

export default function MedicationLists() {
  const {lists} = useRecoilValue(pn_appDataAtom)
  const newListDialogProps = useOpenClose()
  const newList = () => {
    newListDialogProps.onOpen()
  }
  const saveNewList = async () => {

  }
  return (
    <Box sx={{display: 'flex', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <Paper sx={{width: '80%', height: '80%'}}>
            {!lists && <NoLists {...{newList}}/>}
            {lists && "list"}
        </Paper>
        <Dialog open={newListDialogProps.open} onClose={newListDialogProps.onClose}>
          <DialogTitle>New Medication List</DialogTitle>
          <Divider />
          <DialogContent>
            <NewListForm {...{saveNewList}}/>
          </DialogContent>
          <Divider />
          <DialogActions>
            <Button variant="outlined" color="error" size="small" onClick={newListDialogProps.onClose}>Cancel</Button>
            <Button startIcon={<Icons icon="save"/>} variant="contained" color='success' size="small" onClick={saveNewList}>Create</Button>
          </DialogActions>
        </Dialog>
    </Box>
  )
}
