import { GitHub } from "@mui/icons-material";
import React from "react";
import { useSelector } from "react-redux";
import { selectResume } from "../service/resumeSlice";
import "../styles/footer.css";
function Footer() {
  const { resume } = useSelector(selectResume);

  if (resume) {
    var { name } = resume.main;
    var { social } = resume.main;
  }

  return (
    <div className="footer dashed-border" data-scroll-section>
      <div className="footer__container dashed-border">
        <h4 className="heading__tertiary dashed-border">
          find an issue on this page,{" "}
          <a href="" className="highlight-gra">
            fix it on <GitHub />{" "}
            <a
              href="https://github.com/sphade/portfolio-Project"
              target="_blank"
            >
              github
            </a>
          </a>
        </h4>
        <div className="contact__info dashed-border">
          {social.map((item) => (
            <a
              className="heading__tertiary highlight-gra border-gra ml-5"
              href={item.url}
              key={item.name}
            >
              {item.name}
            </a>
          ))}
        </div>
        <h4 className="heading__tertiary">
          created with <span className="highlight-blue">REACT</span> and{" "}
          <span className="highlight-yellow">LOVE</span> By <span>{name}</span>
        </h4>
      </div>
    </div>
  );
}

export default Footer;
