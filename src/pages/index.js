import { Container, Divider } from "@material-ui/core";
import React from "react";
import AboutSection from "../components/about/about-section";
import Layout from "../components/common/layout";
import ContactSection from "../components/contact/contact-section";
import ProjectsSection from "../components/projects/projects-section";

/**
 * Home page
 * Contents:
 *  - about section component
 *  - projects section component
 *  - contact section component
 */

const Home = () => {
  return (
    <Layout>
      <div style={{ paddingTop: "8rem" }} />
      <AboutSection />
      <Container maxWidth="lg">
        <Divider variant="middle" />
      </Container>
      <ProjectsSection />
      <Container maxWidth="lg">
        <Divider variant="middle" />
      </Container>
      <ContactSection />
    </Layout>
  );
};

export default Home;
