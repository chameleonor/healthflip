import React from 'react';
// import PropTypes from 'prop-types';
import { labelClasses, labelColors, getAriaLabel } from '@/utils';

import {
  Box,
  Button,
  Typography,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

const Form = ({
  company,
  hospital,
  surgeon,
  insurance,
  patient,
  procedure,
  selectedLabel,
  daySelected,
  selectedEvent,
  handleSubmit,
  handleSetCompany,
  handleSetHospital,
  handleSetSurgeon,
  handleSetInsurance,
  handleSetPatient,
  handleSetProcedure,
  handleSetSelectedLabel,
  handleSetShowEventModal,
  handleDispatchCalendarEvent,
}) => {
  console.log('selectedLabel ===> ', selectedLabel);

  return (
    <Box component="form">
      <Typography variant="h6" gutterBottom component="div">
        Nova Cotação - {daySelected.format('dddd, MMMM DD')}
      </Typography>

      <TextField
        id="company"
        name="company"
        label="Empreasa"
        variant="standard"
        sx={{
          width: '100%',
        }}
        value={company}
        onChange={(e) => handleSetCompany(e.target.value)}
      />

      <TextField
        id="hospital"
        name="hospital"
        label="Hospital"
        variant="standard"
        sx={{
          width: '100%',
        }}
        value={hospital}
        onChange={(e) => handleSetHospital(e.target.value)}
      />

      <TextField
        id="surgeon"
        name="surgeon"
        label="Cirurgião"
        variant="standard"
        sx={{
          width: '100%',
        }}
        value={surgeon}
        onChange={(e) => handleSetSurgeon(e.target.value)}
      />

      <TextField
        id="insurance"
        name="insurance"
        label="Convênio"
        variant="standard"
        sx={{
          width: '100%',
        }}
        value={insurance}
        onChange={(e) => handleSetInsurance(e.target.value)}
      />

      <TextField
        id="patient"
        name="patient"
        label="Paciente"
        variant="standard"
        sx={{
          width: '100%',
        }}
        value={patient}
        onChange={(e) => handleSetPatient(e.target.value)}
      />

      <TextField
        id="procedure"
        name="procedure"
        label="Procedimento"
        variant="standard"
        sx={{
          width: '100%',
        }}
        value={procedure}
        onChange={(e) => handleSetProcedure(e.target.value)}
      />

      <FormGroup row={true} sx={{ py: 2 }}>
        {labelClasses.map((label, key) => (
          <FormControlLabel
            key={key}
            control={
              <Checkbox
                {...getAriaLabel(label)}
                checked={label === selectedLabel}
                onClick={() => handleSetSelectedLabel(label)}
                sx={{
                  color: labelColors[label],
                  '&.Mui-checked': {
                    color: labelColors[label],
                  },
                }}
              />
            }
            label={label}
            sx={{
              '& .MuiFormControlLabel-label': {
                textTransform: 'capitalize',
              },
            }}
          />
        ))}
      </FormGroup>

      <Box
        display="flex"
        alignItems="left"
        sx={{
          width: 'auto',
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="left">
          <Button
            variant="outlined"
            color="success"
            onClick={handleSubmit}
            sx={{
              marginRight: 2,
            }}
          >
            Save
          </Button>

          <Button
            variant="outlined"
            onClick={() => handleSetShowEventModal(false)}
            sx={{
              marginRight: selectedEvent && 2,
            }}
          >
            Close
          </Button>

          {selectedEvent && (
            <Button
              variant="outlined"
              color="error"
              onClick={() => {
                handleDispatchCalendarEvent({
                  type: 'delete',
                  payload: selectedEvent,
                });
                handleSetShowEventModal(false);
              }}
            >
              Delete
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

// Form.propTypes = {
//     company: PropTypes.string,
//   hospital: PropTypes.string,
//   surgeon: PropTypes.string,
//   insurance: PropTypes.string,
//   patient: PropTypes.string,
//   procedure: PropTypes.string,
//   selectedLabel,
//   daySelected,
//   selectedEvent,
//   handleSubmit,
//   handleSetCompany,
//   handleSetHospital,
//   handleSetSurgeon,
//   handleSetInsurance,
//   handleSetPatient,
//   handleSetProcedure,
//   handleSetSelectedLabel,
//   handleSetShowEventModal,
//   handleDispatchCalendarEvent,
// }

export default Form;
