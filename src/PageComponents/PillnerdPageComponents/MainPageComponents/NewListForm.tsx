import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import AutoInput from '../../../Components/AutoInput'
import { pn_appDataAtom, pn_formIdsAtom } from '../../../Store/Pillnerd.store'

export default function NewListForm(p: { saveNewList: () => Promise<void> }) {
  const { formSchemas: { newList } } = useRecoilValue(pn_appDataAtom)
  const [formIds, setFormIds] = useRecoilState(pn_formIdsAtom)
  useEffect(() => {
    setFormIds(newList.map(({ name }) => name))
  }, [newList])
  return (
    <form>
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        {newList.map((ic) => <AutoInput key={ic.name} {...ic} wrapper={<Box sx={{ width: '100%', py: 1}} />} />)}
      </Box>
    </form>
  )
}
