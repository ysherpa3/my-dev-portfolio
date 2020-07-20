import { Container, Typography } from "@material-ui/core";
import React from "react";

/**
 * Footer
 * Contents:
 *  - copyright year
 */

const Footer = () => {
  return (
    <Container maxWidth="sm">
      <Typography align="center" variant="body2">
        &copy; {new Date().getFullYear()} Yogesh Sherpa
      </Typography>
    </Container>
  );
};

export default Footer;
