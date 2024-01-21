import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";

import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

import { StyledForm, StyledBox } from "./styles";

const CustomForm = ({
  inputs,
  buttons,
  initialValues,
  validationSchema,
  onSubmit,
  fieldsData,
}) => {
  const theme = useTheme();

  const renderField = (field, touched, errors) => {
    const fieldsMap = {
      TextField: () => (
        <Field
          key={field.id}
          id={field.id}
          name={field.name}
          as={field.as}
          label={field.label}
          error={touched[field.name] && Boolean(errors[field.name])}
          helperText={touched[field.name] && errors[field.name]}
          sx={{
            width: "100%",
            marginTop: theme.spacing(1.5),
          }}
        />
      ),
      Select: () => {
        const options = fieldsData[field.id].data.map((item) => (
          <MenuItem key={item.name} value={item.id}>
            {item.label}
          </MenuItem>
        ));

        return (
          <FormControl fullWidth>
            <InputLabel>{field.label}</InputLabel>
            <Field
              key={field.id}
              id={field.id}
              name={field.name}
              as={field.as}
              label={field.label}
              error={touched[field.name] && Boolean(errors[field.name])}
              helperText={touched[field.name] && errors[field.name]}
              sx={{
                width: "100%",
                marginTop: theme.spacing(1.5),
              }}
            >
              {options}
            </Field>
          </FormControl>
        );
      },
    };

    return fieldsMap[field.type]();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object().shape(validationSchema)}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <StyledForm>
          <StyledBox className="form-body">
            {inputs.map((input) => renderField(input, touched, errors))}
          </StyledBox>
          <StyledBox className="form-actions">
            {buttons.map((button) => (
              <Button
                key={button.id}
                type={button.action}
                variant="contained"
                color={button.color}
                sx={{
                  width: "100%",
                  marginTop: theme.spacing(1.5),
                }}
              >
                {button.label}
              </Button>
            ))}
          </StyledBox>
        </StyledForm>
      )}
    </Formik>
  );
};

export default CustomForm;
