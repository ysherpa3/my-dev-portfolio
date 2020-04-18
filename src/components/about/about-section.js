import { Grid } from "@material-ui/core";
import React from "react";
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
  return (
    <SectionContentWrapper
      alignItems="center"
      content={
        <>
          <Grid item md={4} xs={8}>
            <MyPhoto />
          </Grid>
          <Grid item md={8} xs={12}>
            <MyIntro />
          </Grid>
        </>
      }
      id="about"
      justify="center"
      spacing={4}
      title="about"
    />
  );
};

export default AboutSection;
