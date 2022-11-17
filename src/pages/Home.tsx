import { Fragment } from "react";
import Header from "../components/Header";
import Calendar from "../components/Calendar";
import EventModal from "../components/EventModal";

import { useRecoilState, useRecoilValue } from "recoil";
import { eventModalState, eventsState } from "../state/";

export function Home() {
  const [eventModal, setEventModal] = useRecoilState(eventModalState);
  const events = useRecoilValue(eventsState);

  return (
    <Fragment>
      {<Header />}
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
      <Calendar />
    </Fragment>
  );
}
