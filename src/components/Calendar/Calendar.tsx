import React, { useState, useContext, useEffect } from 'react';

// import Box from '@mui/material/Box';

import Header from './Header';
import EventModal from './EventModal';
// import Sidebar from './Sidebar';
// import Month from './Month';

import CalendarContext from '../../context/Calendar/CalendarContext';
import { getMonth } from '../../utils/calendar';

export const Calendar = () => {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal, setShowEventModal } = useContext(CalendarContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return <div>
    {showEventModal && (
      <EventModal
        open={showEventModal}
        onClose={() => setShowEventModal(false)}
      />
    )}
    <Header />
  </div>

  // <Box
  //   sx={{
  //     height: '100%',
  //     width: '100%',
  //     display: 'grid',
  //     gridTemplateColumns: 'repeat(1, 1fr)',
  //     gridTemplateRows: '5% 95%',
  //   }}
  // >
  //   <Header />
  //   <Box
  //     sx={{
  //       display: 'flex',
  //       justifyContent: 'flex-start',
  //       height: '100%',
  //     }}
  //   >
  //     <Box
  //       sx={{
  //         display: 'flex',
  //         width: '350px',
  //       }}
  //     >
  //       <Sidebar />
  //     </Box>
  //     <Box
  //       sx={{
  //         width: '100%',
  //         height: '100%',
  //         display: 'block',
  //       }}
  //     >
  //       <Month month={currenMonth} />
  //     </Box>
  //   </Box>
  // </Box>
};

export default Calendar;
