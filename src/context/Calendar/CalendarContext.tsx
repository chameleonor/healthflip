import dayjs from "dayjs";

import { createContext } from "react";
import { Context } from "../../types/Calendar";

const context: Context = {
  monthIndex: 0,
  setMonthIndex: () => {},
  smallCalendarMonth: 0,
  setSmallCalendarMonth: () => {},
  daySelected: dayjs(null),
  setDaySelected: () => {},
  dispatchCalendarEvent: () => {},
  savedEvents: [],
  selectedEvent: {},
  setSelectedEvent: () => {},
  setLabels: () => {},
  labels: [],
  updateLabel: () => {},
  filteredEvents: [],
};

const CalendarContext = createContext(context);

export default CalendarContext;
