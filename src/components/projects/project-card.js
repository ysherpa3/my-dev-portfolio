import { Box, Card, useMediaQuery } from "@material-ui/core";
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
  box: {},
  card: {
    width: "100%",
    height: "100%",
    maxWidth: "18rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",

    [theme.breakpoints.up("md")]: {
      flex: "0 50%",
      margin: theme.spacing(1),
    },
  },
});

const ProjectCard = ({ demoUrl, description, language, name, topics }) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box height={isDesktop ? 450 : "100%"} my={1}>
      <Card className={classes.card}>
        <ProjectCardContent
          description={description}
          language={language}
          name={name}
          topics={topics}
        />
        <ProjectCardActions demoUrl={demoUrl} />
      </Card>
    </Box>
  );
};

export default ProjectCard;
