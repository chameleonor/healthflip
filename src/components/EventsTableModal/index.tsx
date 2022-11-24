import { useState } from "react";
import { Backdrop, Modal, Fade } from "@mui/material";
import EventNoteIcon from "@mui/icons-material/EventNote";

const EventsTableModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <EventNoteIcon onClick={() => setOpen(true)} sx={{ cursor: "pointer" }} />

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <span>test</span>
        </Fade>
      </Modal>
    </>
  );
};

export default EventsTableModal;
