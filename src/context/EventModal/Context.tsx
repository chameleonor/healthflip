import { Dispatch, createContext } from "react";

export interface Context {
  showEventModal: boolean;
  setShowEventModal: Dispatch<boolean>;
}

const context: Context = {
  showEventModal: false,
  setShowEventModal: () => {},
};

const EventModalContext = createContext(context);

export default EventModalContext;
