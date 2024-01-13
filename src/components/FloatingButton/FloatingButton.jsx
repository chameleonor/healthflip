import React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const floatingButtonStyle = {
  position: "absolute",
  bottom: "20px",
  right: "20px",
};

const FloatingButton = ({ onClick, ...props }) => {
  return (
    <Button sx={floatingButtonStyle} onClick={onClick} {...props}>
      <AddIcon />
    </Button>
  );
};

export default FloatingButton;
