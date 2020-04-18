import { Box, Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link as GatsbyLink } from "gatsby";
import React from "react";
import { FaRegSadCry } from "react-icons/fa";
import Layout from "../components/common/layout";

/**
 * 404 Page not found
 * Contents:
 *  - page not found message
 *  - link to homepage
 */

const useStyles = makeStyles({
  // Styles applied to link
  link: {
    textDecoration: "none",

    "&:hover": {
      textDecoration: "none",
    },
  },
  // Styles applied to grid
  grid: {
    textAlign: "center",
  },
});

const PageNotFound = () => {
  const classes = useStyles();

  return (
    <Layout>
      <Grid alignItems="center" container justify="center" spacing={2}>
        <Grid item>
          <Box
            color="#ff6f00"
            component="span"
            fontFamily="'Baloo Bhaina 2', cursive"
            fontSize="7rem"
          >
            4
          </Box>
          <FaRegSadCry style={{ color: "#0097a7", fontSize: "5rem" }} />
          <Box
            color="#ff6f00"
            component="span"
            fontFamily="'Baloo Bhaina 2', cursive"
            fontSize="7rem"
          >
            4
          </Box>
        </Grid>
        <Grid className={classes.grid} item xs={12}>
          <Typography paragraph variant="h4">
            Oops! The page you are looking for doesn't exist.
          </Typography>
          <GatsbyLink
            aria-label="go to homepage"
            className={classes.link}
            to="/"
          >
            <Button variant="contained">back to homepage</Button>
          </GatsbyLink>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default PageNotFound;
