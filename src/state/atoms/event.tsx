import { atom } from "recoil";
import { Event } from "../../types/Events";

const initEvents = () => {
  const storageEvents = localStorage.getItem("savedEvents");
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
  return parsedEvents;
};

export const eventInitialState: Event = {
  name: "",
  company: "",
  hospital: "",
  surgeon: "",
  insurance: "",
  patient: "",
  procedure: "",
  label: "gold",
  day: null,
  id: null,
};

export const eventModalState = atom({
  key: "eventModalState",
  default: {
    open: false,
    type: null,
    eventId: null,
    day: null,
  },
});

export const eventState = atom({
  key: "eventState",
  default: eventInitialState,
});

export const eventsState = atom({
  key: "eventsState",
  default: initEvents(),
});
