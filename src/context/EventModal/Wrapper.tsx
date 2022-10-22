import React, { useState, Dispatch, useEffect } from "react";

import EventModalContext from "./Context";

export interface EventModalContextWrapperType {
  children: React.ReactNode;
}

export interface Provider {
  showEventModal: boolean;
  setShowEventModal: Dispatch<boolean>;
}

const EventModalContextWrapper = ({
  children,
}: EventModalContextWrapperType) => {
  const [showEventModal, setShowEventModal] = useState(false);

  useEffect(() => console.log(showEventModal), [showEventModal]);

  const provider: Provider = {
    showEventModal,
    setShowEventModal,
  };

  return (
    <EventModalContext.Provider value={provider}>
      {children}
    </EventModalContext.Provider>
  );
};

export default EventModalContextWrapper;
