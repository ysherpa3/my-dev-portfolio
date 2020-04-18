import { Chip, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import MuiTheme from "../common/mui-theme";
import SectionContentWrapper from "../common/section/section-wrapper";
import ProjectCard from "./project-card";

/**
 * Projects section
 * Contents:
 *  - project card component
 */

const useStyles = makeStyles({
  // Styles applied to chip
  chip: {
    margin: MuiTheme.spacing(0.25),
  },
});

const ProjectsSection = () => {
  const classes = useStyles();

  // Project information query github API
  const data = useStaticQuery(graphql`
    {
      github {
        viewer {
          repositories(first: 10) {
            nodes {
              description
              homepageUrl
              id
              languages(first: 10) {
                nodes {
                  color
                  id
                  name
                }
              }
              name
              repositoryTopics(first: 10) {
                nodes {
                  id
                  topic {
                    id
                    name
                  }
                }
              }
              url
            }
          }
        }
      }
    }
  `);

  const repos = data.github.viewer.repositories.nodes;

  return (
    <SectionContentWrapper
      alignItems="stretch"
      content={
        <>
          {repos.map((repo) => (
            <Grid item key={repo.id}>
              <ProjectCard
                demoUrl={repo.homepageUrl}
                description={repo.description}
                githubUrl={repo.url}
                language={repo.languages.nodes.map((language) => (
                  <Chip
                    className={classes.chip}
                    color="default"
                    icon={
                      <FiberManualRecordIcon
                        style={{ color: language.color }}
                      />
                    }
                    key={language.id}
                    label={language.name}
                    size="small"
                    variant="outlined"
                  />
                ))}
                name={repo.name}
                topics={repo.repositoryTopics.nodes.map((node) => (
                  <Chip
                    className={classes.chip}
                    color="default"
                    key={node.topic.id}
                    label={node.topic.name}
                    size="small"
                    variant="outlined"
                  />
                ))}
              />
            </Grid>
          ))}
        </>
      }
      id="projects"
      spacing={2}
      title="projects"
    />
  );
};

export default ProjectsSection;
