import dayjs from 'dayjs';

import { createContext, Dispatch } from "react";
import { Event } from "../../types/Events";

interface Context {
    monthIndex: number;
    setMonthIndex: Dispatch<number>;
    smallCalendarMonth: number;
    setSmallCalendarMonth: Dispatch<number>;
    daySelected: dayjs.Dayjs;
    setDaySelected: Dispatch<null>;
    showEventModal: boolean;
    setShowEventModal: Dispatch<boolean>;
    dispatchCalendarEvent: Dispatch<any>;
    savedEvents: Event[];
    selectedEvent: Event;
}

const eventInitialState: Event = {
    company: "",
    hospital: "",
    surgeon: "",
    insurance: "",
    patient: "",
    procedure: "",
    label: "indigo",
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
