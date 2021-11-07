import React from "react";
import { useSelector } from "react-redux";
import { selectResume } from "../service/resumeSlice";
import "../styles/Projects.css";
import { ArrowBtn } from "../components";

function Projects() {
  const { resume } = useSelector(selectResume);
  if (resume) {
    var { projects } = resume.portfolio;
  }
  const renderPortfolio = () => (
    <div className="portfolio">
      {projects.map(({ title, image, url }) => {
        var projectImg = "images/portfolio/" + image;
        return (
          <div className="project" key={title}>
            <img src={projectImg} alt={image} />
            <h3>{title}</h3>
            <ArrowBtn text="visit site" link={url} />
          </div>
        );
      })}
    </div>
  );
  return (
    <section
      className="marketplace-section dashed-border "
      data-scroll
      data-scroll-section
    >
      <h2 className="heading__secondary highlight-blue ">few of my projects</h2>
      {renderPortfolio()}
    </section>
  );
}

export default Projects;
