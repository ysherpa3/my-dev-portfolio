import { Button, CardActions } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import WebIcon from "@material-ui/icons/Web";
import React from "react";

/**
 * Projects section - Project card actions
 * Contents:
 *  - link to source code in github
 *  - link to demo page in netlify (if available)
 */

const useStyles = makeStyles({
  // Styles applied to card actions
  cardActions: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    padding: "1rem",
  },
});

const ProjectCardActions = ({ demoUrl, githubUrl }) => {
  const classes = useStyles();

  return (
    <CardActions className={classes.cardActions}>
      <Button
        href={githubUrl}
        rel="noopener noreferrer"
        size="small"
        startIcon={<GitHubIcon style={{ color: "#333" }} />}
        target="_blank"
        variant="contained"
      >
        code
      </Button>

      {demoUrl ? (
        <Button
          href={demoUrl}
          rel="noopener noreferrer"
          size="small"
          startIcon={<WebIcon style={{ color: "#069" }} />}
          target="_blank"
          variant="contained"
        >
          demo
        </Button>
      ) : (
        ""
      )}
    </CardActions>
  );
};

export default ProjectCardActions;
