import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { styled, useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const StyledForm = styled(Form)(({ theme }) => ({
  padding: theme.spacing(2),
  heigth: "100%",
  display: "flex",
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
          <div className="form-body">
            {inputs.map((input) => (
              <Field
                key={input.id}
                name={input.name}
                as={TextField}
                label={input.label}
                error={touched[input.name] && Boolean(errors[input.name])}
                helperText={touched[input.name] && errors[input.name]}
              />
            ))}
          </div>
          <div className="form-actions">
            {buttons.map((button) => (
              <Button
                key={button.id}
                type={button.type}
                variant="contained"
                color="primary"
              >
                {button.label}
              </Button>
            ))}
          </div>
        </StyledForm>
      )}
    </Formik>
  );
};

export default CustomForm;
