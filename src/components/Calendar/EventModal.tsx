import { useContext, useState } from "react";

import { Backdrop, Box, Modal, Fade } from "@mui/material";
import { Theme } from "@mui/material/styles";

import Form from "./Form";

import CalendarContext from "../../context/Calendar/CalendarContext";
import { labelClasses } from "../../utils/calendar";

import { Event } from "../../types/Events";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: `#fff`,
  border: (theme: Theme) => `2px solid ${theme.palette.grey["300"]}`,
  boxShadow: 24,
  p: 4,
};

const EventModal = ({ open, onClose }) => {
  console.log("EventModal Component");

  const {
    setShowEventModal,
    daySelected,
    dispatchCalendarEvent,
    selectedEvent,
  } = useContext(CalendarContext);

  const [company, setCompany] = useState(
    selectedEvent ? selectedEvent.company : ""
  );
  const [hospital, setHospital] = useState(
    selectedEvent ? selectedEvent.hospital : ""
  );
  const [surgeon, setSurgeon] = useState(
    selectedEvent ? selectedEvent.surgeon : ""
  );
  const [insurance, setInsurance] = useState(
    selectedEvent ? selectedEvent.insurance : ""
  );
  const [patient, setPatient] = useState(
    selectedEvent ? selectedEvent.patient : ""
  );
  const [procedure, setProcedure] = useState(
    selectedEvent ? selectedEvent.procedure : ""
  );

  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelClasses.find((lbl) => lbl === selectedEvent.label)
      : labelClasses[0]
  );

  const submit = (event) => {
    event.preventDefault();
    const calendarEvent = {
      company,
      hospital,
      surgeon,
      insurance,
      patient,
      procedure,
      label: selectedLabel,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };

    if (selectedEvent) {
      dispatchCalendarEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalendarEvent({ type: "push", payload: calendarEvent });
    }

    console.log(calendarEvent);

    setShowEventModal(false);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Form
            company={company}
            hospital={hospital}
            surgeon={surgeon}
            insurance={insurance}
            patient={patient}
            procedure={procedure}
            selectedLabel={selectedLabel}
            daySelected={daySelected}
            selectedEvent={selectedEvent}
            handleSubmit={submit}
            handleSetCompany={setCompany}
            handleSetHospital={setHospital}
            handleSetSurgeon={setSurgeon}
            handleSetInsurance={setInsurance}
            handleSetPatient={setPatient}
            handleSetProcedure={setProcedure}
            handleSetSelectedLabel={setSelectedLabel}
            handleSetShowEventModal={setShowEventModal}
            handleDispatchCalendarEvent={dispatchCalendarEvent}
          />
        </Box>
      </Fade>
    </Modal>
  );
};

export default EventModal;
