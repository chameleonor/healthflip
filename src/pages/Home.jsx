import { Fragment } from "react";
import Header from "../components/Header";
import Calendar from "../components/Calendar";
import EventModal from "../components/EventModal";

import { useRecoilState } from "recoil";
import { eventModalState } from "../state";

export function Home() {
  const [eventModal, setEventModal] = useRecoilState(eventModalState);

  return (
    <Fragment>
      {<Header />}
      {eventModal && (
        <EventModal
          open={eventModal.open}
          onClose={() =>setEventModal({ open: false, type: null, eventId: null })}
        />
      )}
      <Calendar />
    </Fragment>
  );
}

export default Home;