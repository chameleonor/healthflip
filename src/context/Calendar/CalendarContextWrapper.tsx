import { useState, useEffect, useReducer, useMemo, Dispatch } from 'react';
import dayjs from 'dayjs';
import CalendarContext from './CalendarContext';
import { savedEventsReducer } from "./Actions"
import { Label } from '../../types/Events';
import { CalendarContextWrapperProps } from '../../types/Calendar';

const initEvents = () => {
    const storageEvents = localStorage.getItem('savedEvents');
    const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
    return parsedEvents;
};

const savedEventsInitialState: any[] = [];
const labelsInitialState: Label[] | (() => Label[]) = [];
const dayInitialState = dayjs();

const CalendarContextWrapper = ({ children }: CalendarContextWrapperProps) => {
    const [monthIndex, setMonthIndex] = useState(dayjs().month());
    const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
    const [daySelected, setDaySelected] = useState(dayInitialState);
    const [showEventModal, setShowEventModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [labels, setLabels] = useState<Label[]>(labelsInitialState);
    const [savedEvents, dispatchCalendarEvent] = useReducer(savedEventsReducer, savedEventsInitialState, initEvents);

    const filteredEvents = useMemo(() => {
        return savedEvents.filter((event) => labels.filter((label) => label.checked).map((label) => label.label).includes(event.label)
        );
    }, [savedEvents, labels]);

    useEffect(() => {
        localStorage.setItem('savedEvents', JSON.stringify(savedEvents));
    }, [savedEvents]);

    useEffect(() => {
        setLabels((prevLabels) => {
            const eventLabels = [...new Set(savedEvents.map((evt) => evt.label))]
            return eventLabels.map((labelColor) => {
                const currentLabel = prevLabels.find((label) => label.label === labelColor);
                return {
                    label: labelColor,
                    checked: currentLabel ? currentLabel.checked : true,
                };
            });
        });
    }, [savedEvents]);

    useEffect(() => {
        if (smallCalendarMonth !== null) {
            setMonthIndex(smallCalendarMonth);
        }
    }, [smallCalendarMonth]);

    useEffect(() => {
        if (!showEventModal) {
            setSelectedEvent(null);
        }
    }, [showEventModal]);

    const updateLabel = (label: Label) => {
        setLabels(labels.map((lbl) => (lbl.label === label.label ? label : lbl)));
    };

    interface Provider {
        monthIndex: number,
        setMonthIndex: Dispatch<number>,
        setDaySelected: Dispatch<dayjs.Dayjs>,
        smallCalendarMonth: Dispatch<number>
    }

    const provider: Provider = {
        monthIndex,
        setMonthIndex,
        setDaySelected,
        smallCalendarMonth,
        setSmallCalendarMonth,
        daySelected,
        showEventModal,
        setShowEventModal,
        dispatchCalendarEvent,
        selectedEvent,
        setSelectedEvent,
        savedEvents,
        setLabels,
        labels,
        updateLabel,
        filteredEvents,
    }

    return (
        <CalendarContext.Provider value={provider} >
            {children}
        </CalendarContext.Provider>
    );
};

export default CalendarContextWrapper;
