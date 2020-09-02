import { CardContent, Divider, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

/**
 * Projects section - Project card content
 * Contents:
 *  - project title
 *  - project description
 *  - proramming languages used in project
 *  - project topics
 */

const useStyles = makeStyles({
  // Styles applied to card content
  cardContent: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  // Styles applied to languages and topics tags
  tags: {
    padding: "1rem 0",
  },
});

const ProjectCardContent = ({ name, description, language, topics }) => {
  const classes = useStyles();

  return (
    <CardContent className={classes.cardContent}>
      <Typography variant="subtitle1" gutterBottom>
        <i>{name}</i>
      </Typography>
      <Typography variant="body2" gutterBottom>
        {description}
      </Typography>
      <Divider />
      <Grid container alignItems="center" className={classes.tags}>
        <Grid item xs={4}>
          <Typography variant="subtitle2">Languages: </Typography>
        </Grid>
        <Grid item xs={8}>
          {language}
        </Grid>
      </Grid>
      <Divider />
      <Grid container alignItems="center" className={classes.tags}>
        <Grid item xs={4}>
          <Typography variant="subtitle2">Topics: </Typography>
        </Grid>
        <Grid item xs={8}>
          {topics}
        </Grid>
      </Grid>
      <Divider />
    </CardContent>
  );
};

export default ProjectCardContent;
