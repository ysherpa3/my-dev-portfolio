import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import ProjectCardActions from "./project-card-actions";
import ProjectCardContent from "./project-card-content";

/**
 * Projects section - Project card component
 * Contents:
 *  - project card content section
 *  - project card actions section
 */

const useStyles = makeStyles({
  // Styles applied to card
  card: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    maxWidth: 345,
  },
});

const ProjectCard = ({ demoUrl, description, language, name, topics }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card} square>
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
