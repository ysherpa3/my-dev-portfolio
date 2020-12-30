import { Box, CardContent, Divider, Typography } from "@material-ui/core";
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
  tags: {
    padding: "1rem 0",
  },
});

const ProjectCardContent = ({ name, description, language, topics }) => {
  const classes = useStyles();

  return (
    <CardContent>
      <Typography variant="subtitle1" align="center" gutterBottom>
        <i>{name}</i>
      </Typography>
      <Typography variant="body2" gutterBottom>
        {description}
      </Typography>
      <Divider />
      <Box className={classes.tags}>
        <Typography>Languages:</Typography>
        <Box>{language}</Box>
      </Box>
      <Divider />
      <Box className={classes.tags}>
        <Typography>Topics:</Typography>
        <Box>{topics}</Box>
      </Box>
      <Divider />
    </CardContent>
  );
};

export default ProjectCardContent;
