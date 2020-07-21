import { Container, CssBaseline } from "@material-ui/core";
import {
  makeStyles,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import React from "react";
import MenuDrawer from "./appbar/drawer";
import Footer from "./footer/footer";
import MuiTheme from "./mui-theme";
import SEO from "./seo";

/**
 * Basic page layout
 * Contents:
 *  - drawer
 *  - about section
 *  - projects section
 *  - contact section
 *  - footer
 */

const useStyles = makeStyles({
  // Styles applied globally
  "@global": {
    body: {
      backgroundColor: "#fafafa",
      color: "#212121",
      height: "100%",
      width: "100%",
    },
    a: {
      textDecoration: "none",
    },
    ".error": {
      color: MuiTheme.palette.error.main,
    },
  },
  // Styles applied to root
  root: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  // Styles applied to the header
  header: {
    flexShrink: 0,
  },
  // Styles applied to the main element
  main: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "center",
  },
  // Styles applied to the footer
  footer: {
    backgroundColor: MuiTheme.palette.primary.main,
    flexShrink: 0,
    padding: MuiTheme.spacing(4, 0),
    width: "100%",
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="home">
      <ThemeProvider theme={responsiveFontSizes(MuiTheme)}>
        <SEO />
        <CssBaseline />
        <nav>
          <MenuDrawer />
        </nav>
        <Container className={classes.main} component="main" maxWidth="lg">
          {children}
        </Container>
        <footer className={classes.footer}>
          <Footer />
        </footer>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
