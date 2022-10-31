import { Fragment, useEffect } from "react";
import CalendarHeader from "../components/Old.Calendar/CalendarHeader";
import Calendar from "../components/Calendar";
import EventModal from "../components/EventModal";

import { useRecoilState, useRecoilValue } from "recoil";
import { eventModalState, eventsState } from "../state/";

export function Home() {
  const [eventModal, setEventModal] = useRecoilState(eventModalState);
  const events = useRecoilValue(eventsState);

  const renderCalendarHeader = () => {
    return <CalendarHeader />;
  };

  return (
    <Fragment>
      {renderCalendarHeader()}
      {eventModal && (
        <EventModal
          open={eventModal.open}
          onClose={() =>
            setEventModal({ open: false, type: null, eventId: null })
          }
        />
      )}
      {events.map((evt, key) => (
        <p key={key}>
          {evt.name} - {evt.label} -{" "}
          <span
            onClick={() =>
              setEventModal({ open: true, type: "update", eventId: evt.id })
            }
          >
            edit
          </span>
        </p>
      ))}
    </Fragment>
    //   <Calendar />
  );
}
