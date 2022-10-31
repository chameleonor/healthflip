import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { Backdrop, Box, Modal, Fade } from "@mui/material";
import { Theme } from "@mui/material/styles";

import Form from "../Form";

import {
  eventModalState,
  dayState,
  eventsState,
  eventState,
  eventInitialState,
} from "../../state";

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
  // eslint-disable-next-line no-unused-vars
  const [event, setEvent] = useRecoilState(eventState);
  const [eventModal, setEventModal] = useRecoilState(eventModalState);
  const day = useRecoilValue(dayState);
  const [events, setEvents] = useRecoilState(eventsState);

  const submit = (buttonEvent, newEvent, method = undefined) => {
    buttonEvent.preventDefault();

    if (method) {
      setEvents(events.filter((evt) => evt.id !== newEvent.id));
    } else if (eventModal.type === "update") {
      const newEvents = events.map((evt: Event) =>
        evt.id === newEvent.id ? newEvent : evt
      );
      setEvents(newEvents);
    } else if (eventModal.type == "new") {
      setEvents([...events, { ...newEvent, id: Date.now() }]);
    }

    setEventModal({ open: false, type: null, eventId: null });
  };

  useEffect(() => {
    if (eventModal.type === "update" && eventModal.eventId) {
      setEvent(events.find((evt) => evt.id === eventModal.eventId));
    } else if (eventModal.type === "new") {
      setEvent(eventInitialState);
    }
  }, [eventModal, events]);

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
            handleSubmit={submit}
            handleShowModal={setEventModal}
            daySelected={day}
            event={event}
            setEvent={setEvent}
          />
        </Box>
      </Fade>
    </Modal>
  );
};

export default EventModal;
