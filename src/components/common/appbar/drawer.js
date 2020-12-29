import {
  AppBar,
  Box,
  Divider,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image/withIEPolyfill";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import React from "react";
import theme from "../mui-theme";
import { menuLinks } from "./menu-links-list";

/** Navigation Drawer component */

const useStyles = makeStyles({
  menu: {
    width: 200,
  },
  link: {
    color: theme.palette.primary.dark,

    [theme.breakpoints.up("sm")]: {
      color: theme.palette.text.primary,
    },
  },
  list: {
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
            srcSet
          }
        }
      }
    }
  `);

  const list = (
    <div
      className={classes.menu}
      role="presentation"
      onClick={toggleDrawer(true)}
      onKeyDown={toggleDrawer(true)}
    >
      <List disablePadding className={classes.list}>
        {menuLinks.map((item) => (
          <AnchorLink
            key={item.id}
            aria-label={item.ariaLabel}
            className={classes.link}
            to={item.to}
            stripHash
          >
            <ListItem button key={item.id}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
            <Divider variant="middle" />
          </AnchorLink>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Box width="33.3%">
            <Box width={matches ? 48 : 64}>
              <AnchorLink
                ariaLabel="go to homepage"
                className={classes.link}
                to="/#home"
                stripHash
              >
                <Img
                  alt="yogesh sherpa ys logo"
                  className={classes.logo}
                  fluid={data.file.childImageSharp.fluid}
                />
              </AnchorLink>
            </Box>
          </Box>
          <Box width="33.4%">
            <Typography align="center">Yogesh Sherpa</Typography>
          </Box>
          <Box width="33.3%" display="flex" justifyContent="flex-end">
            <Hidden smDown>
              <List className={classes.list}>
                {menuLinks.map((item) => (
                  <AnchorLink
                    key={item.id}
                    aria-label={item.ariaLabel}
                    className={classes.link}
                    to={item.to}
                    stripHash
                  >
                    <ListItem button key={item.id}>
                      {theme.breakpoints.up("sm") ? (
                        ""
                      ) : (
                        <ListItemIcon>{item.icon}</ListItemIcon>
                      )}
                      <ListItemText primary={item.title} />
                    </ListItem>
                  </AnchorLink>
                ))}
              </List>
            </Hidden>
            <Hidden mdUp>
              <IconButton onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Box>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        onClick={toggleDrawer(false)}
      >
        {list}
      </SwipeableDrawer>
    </>
  );
}
