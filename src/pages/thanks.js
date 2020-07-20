import { Box, Paper, Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import React from "react";
import Layout from "../components/common/layout";
import SEO from "../components/common/seo";
import theme from "../components/common/mui-theme";

const useStyles = makeStyles({
  paper: {
    padding: theme.spacing(4),
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
});

const ThanksPage = () => {
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Layout>
      <SEO title="Thank You" />
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        my={6}
      >
        <Paper className={classes.paper} elevation={4} square>
          <CheckCircleOutlineIcon style={{ color: "#8bc34a", fontSize: 70 }} />
          <Typography
            variant={matches ? "h4" : "h5"}
            color="primary"
            gutterBottom
          >
            Thank you contacting me!
          </Typography>
          <Typography variant="body2" paragraph>
            I have received your message. I will get in touch with you within 24
            hours!
          </Typography>
          <Typography variant="subtitle1">Have a great day!</Typography>
        </Paper>
      </Box>
    </Layout>
  );
};

export default ThanksPage;
