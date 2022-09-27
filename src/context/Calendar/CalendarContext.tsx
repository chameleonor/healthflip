import dayjs from 'dayjs';

import { createContext } from "react";
import { Context } from "../../types/Calendar";
import { Event } from "../../types/Events";

const eventInitialState: Event = {
    company: "",
    hospital: "",
    surgeon: "",
    insurance: "",
    patient: "",
    procedure: "",
    label: "indigo",
    labels: [],
    day: dayjs().valueOf(),
    id: Date.now()
}

const context: Context = {
    monthIndex: 0,
    setMonthIndex: () => { },
    smallCalendarMonth: 0,
    setSmallCalendarMonth: () => { },
    daySelected: dayjs(null),
    setDaySelected: () => { },
    showEventModal: false,
    setShowEventModal: () => { },
    dispatchCalendarEvent: () => { },
    savedEvents: [],
    selectedEvent: eventInitialState,
    setSelectedEvent: () => { },
    setLabels: () => { },
    labels: [],
    updateLabel: () => { },
    filteredEvents: [],
}

const CalendarContext = createContext(context);

export default CalendarContext;
