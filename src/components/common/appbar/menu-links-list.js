import React from "react";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import AccountTreeRoundedIcon from "@material-ui/icons/AccountTreeRounded";
import ContactMailRoundedIcon from "@material-ui/icons/ContactMailRounded";

/**
 * App Bar - Menu links array
 */

export const menuLinks = [
  {
    id: 1,
    ariaLabel: "go to homepage",
    icon: <HomeRoundedIcon color="primary" />,
    title: "Home",
    to: "/#home",
  },
  {
    id: 2,
    ariaLabel: "go to about section",
    icon: <PersonRoundedIcon color="primary" />,
    title: "About",
    to: "/#about",
  },
  {
    id: 3,
    ariaLabel: "go to projects section",
    icon: <AccountTreeRoundedIcon color="primary" />,
    title: "Projects",
    to: "/#projects",
  },
  {
    id: 4,
    ariaLabel: "go to contact section",
    icon: <ContactMailRoundedIcon color="primary" />,
    title: "Contact",
    to: "/#contact",
  },
];
