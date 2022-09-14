import React, { useContext } from 'react';

import CalendarPicker from '@mui/lab/CalendarPicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDayjs from '@mui/lab/AdapterDayjs';
import CalendarContext from '@/context/Calendar/CalendarContext';

export default function SmallCalendar() {
  const { setSmallCalendarMonth, setDaySelected, daySelected } =
    useContext(CalendarContext);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <CalendarPicker
        date={daySelected}
        onChange={(newDate) => {
          setSmallCalendarMonth(newDate.month());
          setDaySelected(newDate);
        }}
      />
    </LocalizationProvider>
  );
}
