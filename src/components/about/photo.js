import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image/withIEPolyfill";
import React from "react";

/**
 * About section - Photo
 */

const useStyles = makeStyles({
  // Styles applied to the paper component
  paper: {
    margin: "auto",
    maxWidth: "18rem",
    padding: "0.25rem",
  },
});

const MyPhoto = () => {
  const classes = useStyles();

  // photo data query
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "photo.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
            srcSetWebp
          }
        }
      }
    }
  `);

  return (
    <Paper className={classes.paper} elevation={6} square>
      <Img
        alt="photo of yogesh sherpa"
        fluid={data.file.childImageSharp.fluid}
      />
    </Paper>
  );
};

export default MyPhoto;
