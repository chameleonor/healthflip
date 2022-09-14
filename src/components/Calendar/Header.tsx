import dayjs from 'dayjs';
import React, { useContext } from 'react';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Stack from '@mui/material/Stack';

import CalendarContext from '../../context/Calendar/CalendarContext';

export default function Header() {
  const { monthIndex, setMonthIndex } = useContext(CalendarContext);
  const { setShowEventModal } = useContext(CalendarContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }
  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      justifyContent="flex-start"
      p={1}
    >
      <Typography
        variant="h3"
        component="div"
        sx={{
          fontSize: '1.25rem',
          lineHeight: '1.75rem',
        }}
      >
        Calendar
      </Typography>
      <Button
        variant="outlined"
        href="#"
        onClick={handleReset}
        sx={{
          marginRight: '1.25rem',
        }}
      >
        Today
      </Button>

      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={() => setShowEventModal(true)}
      >
        Cotação
      </Button>
      <IconButton size="small" onClick={handlePrevMonth}>
        {' '}
        <ArrowBackIosNewIcon fontSize="small" />{' '}
      </IconButton>
      <IconButton size="small" onClick={handleNextMonth}>
        {' '}
        <ArrowForwardIosIcon fontSize="small" />{' '}
      </IconButton>
      <Typography
        variant="h3"
        component="div"
        sx={{
          fontSize: '1.25rem',
          lineHeight: '1.75rem',
        }}
      >
        {dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}
      </Typography>
    </Stack>
  );
}
