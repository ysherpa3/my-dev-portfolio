import { Box, Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { FaRegSadCry } from "react-icons/fa";
import Layout from "../components/common/layout";
import Link from "../components/common/link";

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
  // Styles applied to button
  button: {
    backgroundColor: "#00acc1",

    "&:hover": {
      backgroundColor: "#ffc400",
    },
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
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button variant="contained" className={classes.button}>
              back to homepage
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default PageNotFound;
