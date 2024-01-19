import { Form } from "formik";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const StyledForm = styled(Form)(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
}));
