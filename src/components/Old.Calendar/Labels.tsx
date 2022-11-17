import { useContext, useMemo } from "react";

import Typography from "@mui/material/Typography";

import FormGroup from "@mui/material/FormGroup";

import FormControlLabel from "@mui/material/FormControlLabel";

import Checkbox from "@mui/material/Checkbox";

import CalendarContext from "../../context/Calendar/CalendarContext";

import { labelColors, getAriaLabel } from "../../utils/calendar";

export default function Labels() {
  const { labels, updateLabel } = useContext(CalendarContext);

  // console.log("Labels Component");

  const LabelsComponent = useMemo(() => {
    return labels.map(({ label, checked }, key) => (
      <FormControlLabel
        key={key}
        control={
          <Checkbox
            {...getAriaLabel(label)}
            checked={checked}
            onChange={() => updateLabel({ label, checked: !checked })}
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
    ));
  }, [labels, updateLabel]);

  return (
    <div>
      <Typography
        variant="h4"
        component="div"
        sx={{
          fontSize: "1.25rem",

          lineHeight: "1.75rem",
        }}
      >
        Label
      </Typography>

      <FormGroup>
        {labels.length ? (
          LabelsComponent
        ) : (
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontSize: "1rem",

              lineHeight: "1rem",
            }}
          >
            There is no events to show!
          </Typography>
        )}
      </FormGroup>
    </div>
  );
}
