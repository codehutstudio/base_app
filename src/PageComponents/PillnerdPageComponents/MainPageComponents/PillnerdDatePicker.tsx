import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react'
import DatePicker from "react-horizontal-datepicker";
import { useRecoilState, useSetRecoilState } from 'recoil';
import { pn_selectedDateAtom } from '../../../Store/Pillnerd.store';
import { border } from '../PillnerdStyles';
import { format } from 'date-fns'
import ButtonWithIcon from '../../../Components/ButtonWithIcon';

export default function PillnerdDatePicker() {
  const [today, setToday] = useState(setTodaysDate())
  const [showTodayButon, setShowTodayButton] = useState(false)
  const [selectedDay, setSelectedDay] = useRecoilState(pn_selectedDateAtom)
  const selectDay = (val: Date) => {
    setSelectedDay(val)
    if (val === today) {
      setShowTodayButton(false)
    }
  }
  useEffect(() => {
    setSelectedDay(today)
  }, [])
  useEffect(() => {
    const todayTime = today.getTime()
    const selectedDayTime = selectedDay?.getTime()
    if (todayTime !== selectedDayTime) {
      setShowTodayButton(true)
    } else {
      setShowTodayButton(false)
    }
  }, [selectedDay])
  const selectToday = () => setSelectedDay(today)
  return (<Box sx={{ px: 1, border: border, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
    <DatePicker
      getSelectedDay={selectDay}
      selectDate={selectedDay}
      endDate={365}
      labelFormat={"MMMM"}
    />
    <Box sx={{display: 'flex', alignItems: 'center', width: '100%' }}>
    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, justifyContent: 'center', py: '8px' }}>
        {selectedDay !== null ? (
          <Typography variant="subtitle2">{format(selectedDay, 'E, MMM d')}</Typography>
        ) : ''}
    </Box>
    <Box>{showTodayButon && (<ButtonWithIcon icon="doubleLeftArrow" text="Today" onClick={selectToday} />)}</Box>
    </Box> 
  </Box>)
}

function setTodaysDate(): Date {
  const date = new Date()
  date.setSeconds(0, 0)
  date.setHours(0, 0)
  date.setMinutes(0, 0)
  return date
}
