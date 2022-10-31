import dayjs from "dayjs";
import { atom } from "recoil";
import { Event } from "../../types/Events";

export const eventInitialState: Event = {
  name: "",
  company: "",
  hospital: "",
  surgeon: "",
  insurance: "",
  patient: "",
  procedure: "",
  label: "indigo",
  day: dayjs().valueOf(),
  id: Date.now(),
};

export const eventModalState = atom({
  key: "eventModalState",
  default: {
    open: false,
    type: null,
    eventId: null,
  },
});

export const eventState = atom({
  key: "eventState",
  default: eventInitialState,
});

export const eventsState = atom({
  key: "eventsState",
  default: [],
});
