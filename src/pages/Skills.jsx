import React from 'react'
import { useSelector } from 'react-redux';
import { selectResume } from '../service/resumeSlice';
import '../styles/skills.css';
import { Bar } from "react-chartjs-2";

function Skills() {
    const { resume } = useSelector(selectResume);
    if (resume) {
  
        var { skillsMessage } = resume.resume;
        var { skills } = resume.resume;
        var linkedInUrl = resume.main?.social[0].url;
    }
    const state = {
        labels: skills.map((skill) => skill.name),
        datasets: [
          {
            label: "MY Skills Set",
            backgroundColor: [
              "#aa45ac",
              "#61dafb",
              "#ffcb2c",
              "pink",
              "yellow",
              "tomato",
            ],
    
            borderWidth: 2,
            borderRadius: 5,
           
            data: skills.map((skill) => skill.level),
          },
        ],
      };
    return (
        <section className="skills-section dashed-border slide" data-scroll-section>
        <div className="my-skills">
          <h2 className="heading__secondary highlight-blue ">
            My Skills
          </h2>
          <p className="heading__tertiary">
            {skillsMessage} <br /> check me out on{" "}
            <a href={linkedInUrl} className="highlight-yellow">
              linkedIn
            </a>{" "}
            to get to know more..
          </p>
        </div>
        <div className="my-skills-details">
          <Bar
            data={state}
            options={{
              Plugin: {
                title: {
                  display: true,
                 
                },
              },
             
            }}
            
          />
        </div>
      </section>
    )
}

export default Skills
