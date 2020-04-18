import { Grid } from "@material-ui/core";
import React from "react";
import SectionContentWrapper from "../common/section/section-wrapper";
import ContactForm from "./contact-form";

/**
 * Contact section
 * Contents:
 *  - contact form
 */

const ContactSection = () => {
  return (
    <SectionContentWrapper
      alignItems="center"
      content={
        <Grid item xs={12} sm={10}>
          <ContactForm />
        </Grid>
      }
      id="contact"
      spacing={2}
      title="contact"
    />
  );
};

export default ContactSection;
