import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import ProjectCardActions from "./project-card-actions";
import ProjectCardContent from "./project-card-content";
import theme from "../common/mui-theme";

/**
 * Projects section - Project card component
 * Contents:
 *  - project card content section
 *  - project card actions section
 */

const useStyles = makeStyles({
  // Styles applied to card
  card: {
    width: "100%",
    height: "100%",
    maxWidth: "18rem",
    margin: theme.spacing(1, 0),

    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(1),
    },
  },
});

const ProjectCard = ({ demoUrl, description, language, name, topics }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <ProjectCardContent
        description={description}
        language={language}
        name={name}
        topics={topics}
      />
      <ProjectCardActions demoUrl={demoUrl} />
    </Card>
  );
};

export default ProjectCard;
