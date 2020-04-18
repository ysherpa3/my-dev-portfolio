import { amber, cyan, grey, pink, teal } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const CustomTheme = createMuiTheme({
  palette: {
    primary: {
      main: cyan[600],
      light: "#5ddef4",
      dark: "#007c91",
    },
    secondary: {
      main: amber.A400,
      light: "#fff64f",
      dark: "#c79400",
    },
    common: {
      black: grey[900],
      white: grey[50],
    },
    success: {
      main: teal[700],
    },
    error: {
      main: pink[700],
    },
  },
  overrides: {
    MuiButton: {
      contained: {
        backgroundColor: amber[500],
        borderRadius: 0,

        "&:hover": {
          backgroundColor: amber.A200,
        },
      },
      text: {
        borderRadius: 0,

        "&:hover": {
          backgroundColor: amber[200],
        },
      },
    },
    MuiCard: {
      root: {
        backgroundColor: cyan[50],
      },
    },
    MuiFormLabel: {
      asterisk: {
        color: amber[900],
      },
    },
    MuiInputLabel: {
      root: {
        fontFamily: "'Roboto Condensed', sans-serif",
      },
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1: {
      fontFamily: "'Roboto Condensed', sans-serif",
      textTransform: "capitalize",
    },
    h6: {
      fontFamily: "'Roboto Condensed', sans-serif",
      textTransform: "capitalize",
    },
    subtitle2: {
      fontFamily: "'Roboto Condensed', sans-serif",
      textTransform: "capitalize",
    },
  },
});

export default CustomTheme;
