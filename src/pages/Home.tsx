import { useContext } from "react";
import CalendarHeader from "../components/Calendar/CalendarHeader";
import Calendar from "../components/Calendar/Calendar";
import EventModal from "../components/Calendar/EventModal";
import CalendarContextWrapper from "../context/Calendar/CalendarContextWrapper";
import CalendarContext from "../context/Calendar/CalendarContext";

export function Home() {
  console.log("Home Component");
  const { showEventModal, setShowEventModal } = useContext(CalendarContext);

  return (
    <CalendarContextWrapper>
      {showEventModal && (
        <EventModal
          open={showEventModal}
          onClose={() => setShowEventModal(false)}
        />
      )}
      <CalendarHeader />
      <Calendar />
    </CalendarContextWrapper>
  );
}
