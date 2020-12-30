import { Box, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import theme from "../mui-theme";
import SectionTitle from "./section-title";

/**
 * Section content wrapper component
 */

const useStyles = makeStyles({
  // Styles applied to the section
  section: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "80vh",
  },
});

const SectionWrapper = ({ content, id, title }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box component="section" className={classes.section} id={id}>
      <SectionTitle title={title} />
      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "row"}
        justifyContent="center"
        alignItems="center"
      >
        {content}
      </Box>
    </Box>
  );
};

export default SectionWrapper;
