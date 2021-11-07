import React from "react";
import { useSelector } from "react-redux";
import { ArrowBtn, WordCloud } from "../components";
import { selectResume } from "../service/resumeSlice";
import "../styles/about.css";
function About() {
  const { resume } = useSelector(selectResume);
  if (resume) {
    var { bio, cv } = resume.main;
  }
  return (
    <section
      className="about-section dashed-border slide"
      data-scroll-section
      data-scroll-about
    >
      <div className="about-me" data-scroll data-scroll-speed="1">
        <h2 className="heading__secondary highlight-blue ">
          About My humble self
        </h2>
        <p className="heading__tertiary" data-scroll>
          {bio}
        </p>
        <ArrowBtn text="My Resume" link={cv} />
      </div>
      <div className="sphere">{<WordCloud />}</div>
    </section>
  );
}

export default About;
