import { useState } from "react";

import {
  Box,
  Button,
  Typography,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import { labelClasses, labelColors, getAriaLabel } from "../../utils/calendar";
import { eventState, eventInitialState } from "../../state";

const Form = ({ daySelected, handleSubmit, handleShowModal }) => {
  const [event, setEvent] = useState(eventInitialState);
  const [selectedLabel] = useState(
    event ? labelClasses.find((lbl) => lbl === event.label) : labelClasses[0]
  );
  const handleSetEvent = (field, value) => {
    console.log("handleSetEvent ---> ", { field, value });
    setEvent((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  // TODO: refactor the buttons to use the same one, and change only the names

  return (
    <Box component="form">
      <Typography variant="h6" gutterBottom component="div">
        Nova Cotação - {daySelected.format("dddd, MMMM DD")}
      </Typography>

      <TextField
        id="name"
        name="name"
        label="Nome"
        variant="standard"
        sx={{
          width: "100%",
        }}
        value={event.name}
        onChange={(e) => handleSetEvent("name", e.target.value)}
      />

      <TextField
        id="company"
        name="company"
        label="Empreasa"
        variant="standard"
        sx={{
          width: "100%",
        }}
        value={event.company}
        onChange={(e) => handleSetEvent("company", e.target.value)}
      />

      <TextField
        id="hospital"
        name="hospital"
        label="Hospital"
        variant="standard"
        sx={{
          width: "100%",
        }}
        value={event.hospital}
        onChange={(e) => handleSetEvent("hospital", e.target.value)}
      />

      <TextField
        id="surgeon"
        name="surgeon"
        label="Cirurgião"
        variant="standard"
        sx={{
          width: "100%",
        }}
        value={event.surgeon}
        onChange={(e) => handleSetEvent("surgeon", e.target.value)}
      />

      <TextField
        id="insurance"
        name="insurance"
        label="Convênio"
        variant="standard"
        sx={{
          width: "100%",
        }}
        value={event.insurance}
        onChange={(e) => handleSetEvent("insurance", e.target.value)}
      />

      <TextField
        id="patient"
        name="patient"
        label="Paciente"
        variant="standard"
        sx={{
          width: "100%",
        }}
        value={event.patient}
        onChange={(e) => handleSetEvent("patient", e.target.value)}
      />

      <TextField
        id="procedure"
        name="procedure"
        label="Procedimento"
        variant="standard"
        sx={{
          width: "100%",
        }}
        value={event.procedure}
        onChange={(e) => handleSetEvent("procedure", e.target.value)}
      />

      <FormGroup row={true} sx={{ py: 2 }}>
        {labelClasses.map((label, key) => (
          <FormControlLabel
            key={key}
            control={
              <Checkbox
                {...getAriaLabel(label)}
                checked={label === event.label}
                onClick={() => handleSetEvent("label", label)}
                sx={{
                  color: labelColors[label],
                  "&.Mui-checked": {
                    color: labelColors[label],
                  },
                }}
              />
            }
            label={label}
            sx={{
              "& .MuiFormControlLabel-label": {
                textTransform: "capitalize",
              },
            }}
          />
        ))}
      </FormGroup>

      <Box
        display="flex"
        sx={{
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Button
          id="save"
          name="save"
          variant="outlined"
          color="success"
          onClick={(ev) => handleSubmit(ev, event)}
          sx={{
            minWidth: "200px",
            maxWidth: "200px",
          }}
        >
          Save
        </Button>

        {event && (
          <Button
            id="delete"
            name="delete"
            variant="outlined"
            color="error"
            sx={{
              // marginRight: event && 2,
              minWidth: "200px",
              maxWidth: "200px",
            }}
            onClick={(ev) => handleSubmit(ev, event, "delete")}
          >
            Delete
          </Button>
        )}

        <Button
          id="close"
          name="close"
          variant="outlined"
          onClick={() => handleShowModal(false)}
          sx={{
            display: "flex",
            minWidth: "200px",
            maxWidth: "200px",
          }}
        >
          Close
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
