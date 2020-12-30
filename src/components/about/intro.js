import { Box, Link, Typography } from "@material-ui/core";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import React from "react";
import theme from "../common/mui-theme";

/**
 * About section - Introduction
 */

const Intro = () => {
  return (
    <Box display="flex" flexDirection="column" p={theme.spacing(0.25)}>
      <Typography color="textPrimary" paragraph>
        Welcome to my portfolio! My name is Yogesh Sherpa. I am a freelance web
        developer based in Vienna, VA.
      </Typography>
      <Typography color="textPrimary" paragraph>
        My skills include creating fast, responsive websites using front-end
        frameworks such as{" "}
        <Link
          color="textSecondary"
          href="https://getbootstrap.com/"
          style={{ borderBottom: `1px solid #007c91`, textDecoration: "none" }}
        >
          Bootstrap
        </Link>{" "}
        &{" "}
        <Link
          color="textSecondary"
          href="https://www.gatsbyjs.org/"
          style={{ borderBottom: `1px solid #007c91`, textDecoration: "none" }}
        >
          GatsbyJS
        </Link>{" "}
        and back-end framework such as{" "}
        <Link
          color="textSecondary"
          href="https://www.djangoproject.com/"
          style={{ borderBottom: `1px solid #007c91`, textDecoration: "none" }}
        >
          Django
        </Link>
        .
      </Typography>
      <Typography color="textPrimary" paragraph>
        Check out some of my{" "}
        <AnchorLink stripHash to="/#projects">
          <Typography
            color="textSecondary"
            component="span"
            style={{ borderBottom: "1px solid #007c91" }}
          >
            projects
          </Typography>
        </AnchorLink>{" "}
        below!
      </Typography>
    </Box>
  );
};

export default Intro;
