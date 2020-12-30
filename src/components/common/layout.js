import { Box, CssBaseline } from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import MenuDrawer from "./appbar/drawer";
import Footer from "./footer/footer";
import theme from "./mui-theme";
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
    },
    a: {
      textDecoration: "none",
    },
    ".error": {
      color: theme.palette.error.main,
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
  nav: {
    flexShrink: 0,
  },
  // Styles applied to the main element
  main: {
    flexGrow: 1,
  },
  // Styles applied to the footer
  footer: {
    backgroundColor: theme.palette.primary.main,
    flexShrink: 0,
    padding: theme.spacing(4, 0),
    width: "100%",
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="home">
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <SEO />
        <Box component="nav" className={classes.nav}>
          <MenuDrawer />
        </Box>
        <Box className={classes.main} component="main">
          {children}
        </Box>
        <Box component="footer" className={classes.footer}>
          <Footer />
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
