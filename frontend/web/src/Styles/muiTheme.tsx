import { createTheme } from "@mui/material/styles";

export const muiTheme = createTheme({
  spacing: [0, 4, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80],
  palette: {
    primary: {
      main: "#2196F3",
      dark: "#377DFF",
    },
    error: {
      main: "#FF0000",
    },
    success: {
      main: "#0E9C63",
      light: "#3DD598",
    },
    warning: {
      main: "#FF9F29",
    },
    text: {
      primary: "#323B4B",
      secondary: "#B5B5BE",
    },
    background: {
      default: "#FAFAFB",
    },
  },
  typography: {
    fontFamily: "Poppins ,Roboto, Helvetica, sans-serif",
  },
  mixins: {
    toolbar: {
      minHeight: 76,
    },
  },
});
