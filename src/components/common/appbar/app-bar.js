import {
  AppBar,
  Fade,
  Grid,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import React, { useState } from "react";
import LogoAnchorLink from "./logo-anchor-link";
import { menuLinks } from "./menu-links-list";
import NavLinks from "./nav-links";

/**
 * Top App Bar component
 * Contents:
 *  - logo
 *  - name
 *  - navigation links
 */

const TopAppBar = () => {
  const [mobileAnchorEl, setMobileAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "mobile-menu";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      onClose={handleMobileMenuClose}
      open={isMobileMenuOpen}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      TransitionComponent={Fade}
    >
      {menuLinks.map((item) => (
        <MenuItem key={item.id} onClick={handleMobileMenuClose}>
          <AnchorLink
            aria-label={item.ariaLabel}
            key={item.id}
            stripHash
            to={item.to}
          >
            {item.title}
          </AnchorLink>
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Grid alignItems="center" container justify="space-between">
            <LogoAnchorLink />
            <Grid item xs={4}>
              <Typography align="center" variant="h6">
                yogesh sherpa
              </Typography>
            </Grid>
            <NavLinks
              handleMobileMenuOpen={handleMobileMenuOpen}
              isMobileMenuOpen={isMobileMenuOpen}
              mobileMenuId={mobileMenuId}
            />
          </Grid>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </>
  );
};

export default TopAppBar;
