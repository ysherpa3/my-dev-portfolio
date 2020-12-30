import { Box, useMediaQuery } from "@material-ui/core";
import React from "react";
import theme from "../common/mui-theme";
import SectionContentWrapper from "../common/section/section-wrapper";
import MyIntro from "./intro";
import MyPhoto from "./photo";

/**
 * About section
 * Contents:
 *  - photo
 *  - introduction
 */

const AboutSection = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <SectionContentWrapper
      content={
        <Box
          display="flex"
          flexDirection={isMobile ? "column" : "row"}
          justifyContent="center"
          alignItems="center"
        >
          <MyPhoto />
          <MyIntro />
        </Box>
      }
      id="about"
      title="About"
    />
  );
};

export default AboutSection;
