import { useState, useContext, useEffect } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

import CalendarContext from '../../context/Calendar/CalendarContext';

export default function SmallCalendar() {
  const [value, setValue] = useState<Dayjs | null>(dayjs());

  const { setSmallCalendarMonth, setDaySelected, daySelected } =
    useContext(CalendarContext);

  useEffect(() => {
    setSmallCalendarMonth(value.month());
    setDaySelected(value);
  }, [value])

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        value={value}
        onChange={setValue}
        renderInput={(params) => <TextField {...params} />}
      />


    </LocalizationProvider>
  );
}
