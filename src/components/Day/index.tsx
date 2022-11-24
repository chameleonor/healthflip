import dayjs from "dayjs";
import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";

import { useRecoilValue, useSetRecoilState } from "recoil";

import { eventModalState, eventsState } from "../../state";

import EventsTableDialog from "../EventsTableDialog";

export default function Day({ day, rowIdx }) {
  const [dayEvents, setDayEvents] = useState([]);
  const setEventModal = useSetRecoilState(eventModalState);
  const events = useRecoilValue(eventsState);

  useEffect(() => {
    const filteredEvents = events.filter((evt) => {
      return dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY");
    });
    setDayEvents(filteredEvents);
  }, [events]);

  const getCurrentDayClass = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? {
          backgroundColor: (theme) => theme.palette.primary.main,
          padding: "6px",
          borderRadius: "50%",
          color: (theme) => theme.palette.primary.contrastText,
          lineHeight: 1,
        }
      : {};
  };

  return (
    <Stack
      className="day-grid"
      direction="column"
      sx={{
        minHeight: "120px",
        minWidth: "13.9%",
        maxWidth: "13.9%",
        border: "1px solid",
        borderColor: "rgba(229, 231, 235, 1)",
        background: (theme) =>
          day.month() != dayjs().month()
            ? theme.palette.disabled.main
            : "white",
      }}
    >
      <Stack
        className="day-grid-title"
        direction="column"
        alignItems="center"
        flexGrow={1}
        justifyContent="space-around"
      >
        <Typography variant="body1">
          {day.format("ddd").toUpperCase()}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            ...getCurrentDayClass(),
          }}
        >
          {day.format("DD")}
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="flex-end">
        {dayEvents.length ? <EventsTableDialog events={events} /> : null}

        {(day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ||
          day.unix() >= dayjs().unix()) && (
          <AddIcon
            sx={{
              cursor: "pointer",
            }}
            onClick={() =>
              setEventModal({ open: true, type: "new", eventId: null, day })
            }
          />
        )}
      </Stack>
    </Stack>
  );
}
