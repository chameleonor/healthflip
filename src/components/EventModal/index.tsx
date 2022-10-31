import { useRecoilState, useRecoilValue } from "recoil";

import { Backdrop, Box, Modal, Fade } from "@mui/material";
import { Theme } from "@mui/material/styles";

import Form from "../Form";

import { eventModalState, dayState, eventsState } from "../../state";

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
  const [eventModal, setEventModal] = useRecoilState(eventModalState);
  const day = useRecoilValue(dayState);
  const [events, setEvents] = useRecoilState(eventsState);

  const submit = (buttonEvent, newEvent, method = undefined) => {
    buttonEvent.preventDefault();

    console.log("submit", { newEvent, method, eventModal });

    if (method) setEvents(events.filter((evt) => evt.id !== newEvent.id));

    if (eventModal.type == "update") {
      const newEvents = events.map((evt: Event) =>
        evt.id === newEvent.id ? newEvent : evt
      );
      console.log("update", { day, newEvents, events });
      setEvents(newEvents);
    } else if (eventModal.type == "new") {
      console.log("push", { day, events, newEvent });
      setEvents([...events, newEvent]);
    }

    setEventModal({ open: false, type: null, eventId: null });
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
            handleSubmit={submit}
            handleShowModal={setEventModal}
            daySelected={day}
          />
        </Box>
      </Fade>
    </Modal>
  );
};

export default EventModal;
