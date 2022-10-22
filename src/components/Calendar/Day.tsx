import dayjs from "dayjs";
import { useContext, useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import CalendarContext from "@/context/Calendar/CalendarContext";
import EventModalContext from "../../context/EventModal/Context";

import { labelColors } from "@/utils";

export default function Day({ day, rowIdx }) {
  const [dayEvents, setDayEvents] = useState([]);

  const { setDaySelected, filteredEvents, setSelectedEvent } =
    useContext(CalendarContext);

  const { setShowEventModal } = useContext(EventModalContext);

  useEffect(() => {
    const events = filteredEvents.filter(
      (evt) => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events);
  }, [filteredEvents, day]);

  const getCurrentDayClass = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? {
          backgroundColor: (theme) => theme.palette.blue.secondary,
          transition: "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          padding: "5px",
          borderRadius: "5rem",
          color: (theme) => theme.palette.white.primary,
        }
      : {};
  };

  return (
    <Stack
      direction="column"
      sx={{
        minHeight: 0,
        minWidth: 0,
        border: "1px solid",
        borderColor: "rgba(229, 231, 235, 1)",
      }}
    >
      <Stack direction="column" alignItems="center">
        {rowIdx === 0 && (
          <Typography variant="h7">
            {day.format("ddd").toUpperCase()}
          </Typography>
        )}
        <Typography
          variant="h5"
          sx={{
            ...getCurrentDayClass(),
          }}
        >
          {day.format("DD")}
        </Typography>
      </Stack>
      <Stack
        direction="column"
        flexGrow={1}
        flexShrink={1}
        flexBasis="0%"
        sx={{
          cursor: "pointer",
        }}
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
        alignItems="center"
        justifyContent="space-between"
      >
        {dayEvents.map((evt, idx) => (
          <Paper
            key={idx}
            onClick={() => setSelectedEvent(evt)}
            sx={{
              width: "100%",
              height: "auto",
              backgroundColor: labelColors[evt.label],
              borderRadius: "0.25rem",
              padding: (theme) => theme.spacing(0.3),
              textAlign: "center",
              // color: (theme) =>
              //   theme.palette.getContrastText(labelColors[evt.label]),
              "&:hover": {
                opacity: [0.9, 0.8, 0.7],
              },
            }}
            className="truncate"
          >
            {`${evt.company} - ${evt.procedure}`}
          </Paper>
        ))}
      </Stack>
    </Stack>
  );
}
