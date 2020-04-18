import { Box, Typography } from "@material-ui/core";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import React from "react";

/**
 * About section - Introduction
 */

const Intro = () => {
  return (
    <>
      <Typography color="textPrimary" paragraph variant="body1">
        Welcome! My name is Yogesh Sherpa. I am freelance web developer, based
        in Vienna, VA.
      </Typography>
      <Typography color="textPrimary" paragraph variant="body1">
        My skills include creating fast, responsive websites using front-end
        frameworks (<b>Bootstrap</b>, <b>Gatsby/React</b>) and back-end
        framework (<b>Django</b>).
      </Typography>
      <Typography color="textPrimary" paragraph variant="body1">
        Check out some of my recent{" "}
        <AnchorLink stripHash to="/#projects">
          <Box
            borderBottom="1px solid #3d5afe"
            color="#3d5afe"
            component="span"
          >
            <b>projects</b>
          </Box>
        </AnchorLink>
        !
      </Typography>
    </>
  );
};

export default Intro;
