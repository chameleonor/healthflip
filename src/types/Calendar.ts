import React, { Dispatch } from "react";
import dayjs from 'dayjs';
import { Event, Label } from "./Events";

export interface Context {
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
    setSelectedEvent: Dispatch<Event>;
    setLabels: Dispatch<Label[]>;
    labels: Label[];
    updateLabel: Dispatch<Label>;
    filteredEvents: Event[];
}

export interface CalendarContextWrapperProps {
    children: React.ReactNode;
}