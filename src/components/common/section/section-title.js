import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import theme from "../mui-theme";

/**
 * Section title component
 */

const useStyles = makeStyles({
  // Styles applied to the title
  title: {
    color: theme.palette.primary.dark,
    paddingBottom: theme.spacing(2),
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
