import { Button, CardActions } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import WebIcon from "@material-ui/icons/Web";
import React from "react";
import Link from "../common/link";

/**
 * Projects section - Project card actions
 * Contents:
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

const ProjectCardActions = ({ demoUrl }) => {
  const classes = useStyles();

  return (
    <CardActions className={classes.cardActions}>
      {demoUrl && demoUrl !== "https://ys-dev-portfolio.netlify.app" ? (
        <Link to={demoUrl} underline="none">
          <Button
            size="small"
            startIcon={<WebIcon style={{ color: "#069" }} />}
            variant="contained"
          >
            Go to site
          </Button>
        </Link>
      ) : (
        ""
      )}
    </CardActions>
  );
};

export default ProjectCardActions;
