import { createTheme } from "@mui/material";
import type {} from '@mui/x-data-grid/themeAugmentation';

export const theme = createTheme({
  components: {
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "32px",
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          color: "inherit",
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          ".MuiTabs-indicator": {
            backgroundColor: "#0D1769",
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: "inherit",
          "&.Mui-selected": {
            color: "#0D1769",
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          padding: 0,
          margin: 0,
          boxSizing: "border-box",
        },
      },
    },
    // Data Grid
    MuiDataGrid: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFF",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#8c9eff",
      light: "#c0cfff",
      dark: "#5870cb",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ffff8d",
      light: "#ffffbf",
      dark: "#cacc5d",
      contrastText: "#000",
    },
    disabled: {
      main: "#eceff1",
      light: "#ffffff",
      dark: "#babdbe",
      contrastText: "#000",
    },
    grey: {
      "300": "#CFCFCF",
      "500": "#757575",
    },
    gold: {
      "700": "#C4A123",
    },
    blue: {
      "300": "#1976d2",
      "500": "#0D1769",
    },
    white: "#FFF",
  },
  typography: {
    fontFamily: ["Roboto Mono", "Roboto", "sans-serif"].join(","),
    fontWeightRegular: 400,
  }
});
