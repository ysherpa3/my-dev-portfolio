import { Link as MUILink } from "@material-ui/core";
import { Link as GatsbyLink } from "gatsby";
import React from "react";

/** Link */

const Link = ({
  activeClassName,
  children,
  className,
  partiallyActive,
  style,
  to,
  underline,
  ...other
}) => {
  const internal = to.startsWith("/") ? true : false;

  if (internal) {
    return (
      <GatsbyLink
        activeClassName={activeClassName}
        className={className}
        partiallyActive={partiallyActive}
        style={style}
        to={to}
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
      rel="noopener noreferrer"
      target="_blank"
      underline={underline}
      {...other}
    >
      {children}
    </MUILink>
  );
};

export default Link;
