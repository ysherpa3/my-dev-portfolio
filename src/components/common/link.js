import { Link as MUILink } from "@material-ui/core";
import { Link as GatsbyLink } from "gatsby";
import React from "react";

/** Link component */

const Link = ({
  children,
  to,
  activeClassName,
  className,
  partiallyActive,
  underline,
  style,
  ...other
}) => {
  const internal = to.startsWith("/") ? true : false;

  if (internal) {
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        className={className}
        partiallyActive={partiallyActive}
        style={style}
        {...other}
      >
        {children}
      </GatsbyLink>
    );
  }

  return to.startsWith("#") ? (
    <MUILink href={to} target="_self" underline={underline} {...other}>
      {children}
    </MUILink>
  ) : (
    <MUILink
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      underline={underline}
      {...other}
    >
      {children}
    </MUILink>
  );
};

export default Link;
