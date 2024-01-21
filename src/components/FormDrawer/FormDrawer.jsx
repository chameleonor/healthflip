import * as React from "react";

import { styled, useTheme } from "@mui/material/styles";

import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Divider from "@mui/material/Divider";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
  position: "relative",
}));

const drawerWidth = 500;

const FormDrawer = ({ form, open, onClose }) => {
  const theme = useTheme();
  return (
    <Drawer
      variant="persistent"
      anchor="right"
      open={open}
      hideBackdrop
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <DrawerHeader>
        <IconButton onClick={onClose}>
          {theme.direction === "ltr" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      {form}
    </Drawer>
  );
};

export default FormDrawer;
