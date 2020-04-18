import { Container, Grid, IconButton, Typography } from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

/**
 * Footer
 * Contents:
 *  - github profile link
 *  - linkedin profile link
 *  - copyright year
 */

const Footer = () => {
  // Github and linkedin url query
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          githubUrl
          linkedinUrl
        }
      }
    }
  `);

  return (
    <Container maxWidth="sm">
      <Grid alignItems="center" container item justify="center">
        <Grid item>
          <IconButton
            aria-label="go to my github profile webpage"
            href={data.site.siteMetadata.githubUrl}
            rel="noreferrer noopener"
            target="_blank"
          >
            <FaGithub color="#ffc107" size="1.25em" />
          </IconButton>
          <IconButton
            aria-label="go to my instagram profile webpage"
            href={data.site.siteMetadata.linkedinUrl}
            rel="noreferrer noopener"
            target="_blank"
          >
            <FaLinkedin color="#ffc107" size="1.25em" />
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          <Typography align="center" variant="body2">
            &copy; {new Date().getFullYear()} Yogesh Sherpa
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
