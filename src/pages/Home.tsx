import { Fragment, useContext, useEffect } from "react";
import CalendarHeader from "../components/Calendar/CalendarHeader";
import Calendar from "../components/Calendar/Calendar";
import EventModal from "../components/Calendar/EventModal";
import CalendarContextWrapper from "../context/Calendar/CalendarContextWrapper";
import CalendarContext from "../context/Calendar/CalendarContext";

import EventModalContextWrapper from "../context/EventModal/Wrapper";
import EventModalContext from "../context/EventModal/Context";

export function Home() {
  console.log("Home Component");
  const { showEventModal, setShowEventModal } = useContext(EventModalContext);

  useEffect(() => console.log("home", { showEventModal }), [showEventModal]);

  const renderCalendarHeader = () => {
    return (
      <EventModalContextWrapper>
        <CalendarHeader />
      </EventModalContextWrapper>
    );
  };

  return (
    // <CalendarContextWrapper>
    <Fragment>
      {renderCalendarHeader()}
      {showEventModal && (
        <EventModalContextWrapper>
          <EventModal
            open={showEventModal}
            onClose={() => setShowEventModal(false)}
          />
        </EventModalContextWrapper>
      )}
    </Fragment>
    //    <CalendarHeader />
    //   <Calendar />
    // </CalendarContextWrapper>
  );
}
