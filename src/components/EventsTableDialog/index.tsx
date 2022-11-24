import React, { useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

import EventNoteIcon from "@mui/icons-material/EventNote";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import dayjs from "dayjs";

import { BootstrapDialog } from "./style";

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

const EventsTableDialog = ({ events }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const rows: GridRowsProp = [
    ...events.map((event) => ({
      ...event,
      day: dayjs(event.day).format("DD-MM-YY"),
    })),
  ];

  const columns: GridColDef[] = [
    { field: "label", headerName: "Label", width: 150 },
    { field: "day", headerName: "Day", width: 150 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "company", headerName: "Company", width: 150 },
    { field: "hospital", headerName: "Hospital", width: 150 },
    { field: "surgeon", headerName: "Surgeon", width: 150 },
    { field: "insurance", headerName: "Insurance", width: 150 },
    { field: "patient", headerName: "Patient", width: 150 },
    { field: "procedure", headerName: "Procedure", width: 150 },
  ];

  return (
    <>
      <EventNoteIcon onClick={handleClickOpen} sx={{ cursor: "pointer" }} />
      <BootstrapDialog onClose={handleClose} open={open}>
        <BootstrapDialogTitle
          id="events-table-dialog-title"
          onClose={handleClose}
        >
          <Typography variant="h5">Events</Typography>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <DataGrid
            rows={rows}
            columns={columns}
            autoHeight={true}
            sx={{ minWidth: "600px" }}
          />
        </DialogContent>
      </BootstrapDialog>
    </>
  );
};

export default EventsTableDialog;
