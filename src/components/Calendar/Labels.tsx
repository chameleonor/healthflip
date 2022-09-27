import { useContext } from 'react';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import CalendarContext from '../../context/Calendar/CalendarContext';
import { labelColors, getAriaLabel } from '../../utils/calendar';

// TODO: a lista de labels nao esta aparecendo
// corrigir label colors

export default function Labels() {
  const { labels, updateLabel } = useContext(CalendarContext);
  console.log(labels)
  return (
    <div>
      <Typography
        variant="h4"
        component="div"
        sx={{
          fontSize: '1.25rem',
          lineHeight: '1.75rem',
        }}
      >
        Label
      </Typography>
      <FormGroup>
        {labels.map(({ label: lbl, checked }, idx) => (
          <FormControlLabel
            key={idx}
            control={
              <Checkbox
                {...getAriaLabel(lbl)}
                checked={checked}
                onChange={() => updateLabel({ label: lbl, checked: !checked })}
                sx={{
                  color: labelColors[lbl],
                  '&.Mui-checked': {
                    color: labelColors[lbl],
                  },
                }}
              />
            }
            label={lbl}
            sx={{
              '& .MuiFormControlLabel-label': {
                textTransform: 'capitalize',
              },
            }}
          />
        ))}
      </FormGroup>
    </div>
  );
}
