import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { styled, useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const StyledForm = styled(Form)(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  padding: theme.spacing(1),
}));

const CustomForm = ({
  inputs,
  buttons,
  initialValues,
  validationSchema,
  onSubmit,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object().shape(validationSchema)}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <StyledForm>
          <StyledBox className="form-body">
            {inputs.map((input) => (
              <Field
                key={input.id}
                name={input.name}
                as={TextField}
                label={input.label}
                error={touched[input.name] && Boolean(errors[input.name])}
                helperText={touched[input.name] && errors[input.name]}
                sx={{
                  width: "100%",
                }}
              />
            ))}
          </StyledBox>
          <StyledBox className="form-actions">
            {buttons.map((button) => (
              <Button
                key={button.id}
                type={button.type}
                variant="contained"
                color="primary"
                sx={{
                  width: "100%",
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
