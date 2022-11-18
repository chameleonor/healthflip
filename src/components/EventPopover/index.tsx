import * as React from "react";
import Popover from "@mui/material/Popover";
// import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { useSetRecoilState } from "recoil";
import { eventModalState } from "../../state";

export default function EventPopover({ events }) {
  const setEventModal = useSetRecoilState(eventModalState);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(ev.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return events.length ? (
    <React.Fragment>
      <Button aria-describedby={id} variant="outlined" onClick={handleClick}>
        Show Events
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
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
      </Popover>
    </React.Fragment>
  ) : (
    <></>
  );
}