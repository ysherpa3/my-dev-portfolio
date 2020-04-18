import { Button, Grid, Hidden, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuOpenIcon from "@material-ui/icons/MenuOpenSharp";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import React from "react";
import { menuLinks } from "./menu-links-list";

/**
 * App Bar - Navigation links
 */

const useStyles = makeStyles({
  // Styles applied to the grid component
  grid: {
    textAlign: "right",
  },
});

const NavLinks = ({ handleMobileMenuOpen, isMobileMenuOpen, mobileMenuId }) => {
  const classes = useStyles();

  return (
    <Grid item xs={4} className={classes.grid}>
      {/* Hidden for screens smaller than 960px */}
      <Hidden smDown>
        {menuLinks.map((item) => (
          <AnchorLink
            aria-label={item.ariaLabel}
            key={item.id}
            to={item.to}
            stripHash
          >
            <Button>{item.title}</Button>
          </AnchorLink>
        ))}
      </Hidden>
      {/* Hidden for screens greater than 960px and larger */}
      <Hidden mdUp>
        <IconButton
          aria-controls={mobileMenuId}
          aria-expanded={isMobileMenuOpen ? "true" : "false"}
          aria-haspopup="true"
          aria-label="click to open mobile menu"
          onClick={handleMobileMenuOpen}
        >
          <MenuOpenIcon />
        </IconButton>
      </Hidden>
    </Grid>
  );
};

export default NavLinks;
