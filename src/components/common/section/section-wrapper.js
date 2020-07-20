import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
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
    padding: "3rem 0",
  },
});

const SectionWrapper = ({ alignItems, content, id, spacing, title }) => {
  const classes = useStyles();

  return (
    <section className={classes.section} id={id}>
      <SectionTitle title={title} />
      <Container>
        <Grid
          alignItems={alignItems}
          container
          justify="center"
          spacing={spacing}
        >
          {content}
        </Grid>
      </Container>
    </section>
  );
};

export default SectionWrapper;
