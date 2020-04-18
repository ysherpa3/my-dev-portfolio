import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image/withIEPolyfill";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import React from "react";
import MuiTheme from "../../common/mui-theme";

/**
 * App Bar - Logo anchor link
 */

const useStyles = makeStyles({
  // Styles applied to the logo
  logo: {
    width: "48px",

    [MuiTheme.breakpoints.up("sm")]: {
      width: "80px",
    },
  },
});

const LogoAnchorLink = () => {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
            srcSet
          }
        }
      }
    }
  `);

  return (
    <Grid item xs={4}>
      <AnchorLink ariaLabel="go to homepage" to="/#home" stripHash>
        <Img
          alt="yogesh sherpa ys logo"
          className={classes.logo}
          fluid={data.file.childImageSharp.fluid}
        />
      </AnchorLink>
    </Grid>
  );
};

export default LogoAnchorLink;
