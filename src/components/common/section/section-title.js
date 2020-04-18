import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import MuiTheme from "../mui-theme";

/**
 * Section title component
 */

const useStyles = makeStyles({
  // Styles applied to the title
  title: {
    color: MuiTheme.palette.primary.dark,
    paddingBottom: "3rem",
  },
});

const SectionTitle = ({ title }) => {
  const classes = useStyles();

  return (
    <Typography variant="h1" className={classes.title}>
      {title}
    </Typography>
  );
};

export default SectionTitle;
