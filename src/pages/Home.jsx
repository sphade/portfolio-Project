import React, { useEffect, useRef, useLayoutEffect } from "react";
import { Contact, Testimonial, Projects, Skills, About, Footer } from ".";
import "../styles/home.css";
import { SnakeBorder } from "../components";
import { selectResume } from "../service/resumeSlice";
import { useSelector } from "react-redux";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import gsap from "gsap/all";

gsap.registerPlugin(CSSRulePlugin);
function Home() {
  useEffect(() => {
    document.title = "Lawal Adebola";
  }, []);
  const el = useRef();
  const q = gsap.utils.selector(el);
  const tl = useRef();
  let rule = CSSRulePlugin.getRule(".gsap-ref::after");

  useLayoutEffect(() => {
    tl.current = gsap
      .timeline({
        defaults: { ease: "sine" },
      })
      .to(rule, { cssRule: { scaleY: 0 }, duration: 1 })
      .from(q(".gsap-ref"), { y: 50, duration: 0.9, stagger: 0.1 }, "<");
  }, [q, rule]);

  const { resume } = useSelector(selectResume);
  const onEnter = ({ currentTarget }) => {};

  if (resume) {
    var name = resume.main?.name;
    var occupation = resume.main?.occupation;
    var description = resume.main?.description;
    var pic = resume.main?.image;
    var linkedInUrl = resume.main?.social[0].url;
  }

  return (
    <div className="home section" ref={el}>
      <div className="dashed-border ">
        <header className="home__header ">
          <div className="title mt-15">
            <h1 className="heading__primary  gsap-ref">
              <span className="hvr-wobble-top">H</span>
              <span className="hvr-wobble-top">e</span>
              <span className="hvr-wobble-top">l</span>
              <span className="hvr-wobble-top">l</span>
              <span className="hvr-wobble-top">o</span>
            </h1>

            <h2 className="heading__primary gsap-ref">
              <span className="hvr-wobble-top">m</span>
              <span className="hvr-wobble-top">y</span>{" "}
              <span className="hvr-wobble-top">n</span>
              <span className="hvr-wobble-top">a</span>
              <span className="hvr-wobble-top">m</span>
              <span className="hvr-wobble-top">e</span>{" "}
              <span className="hvr-wobble-top">i</span>
              <span className="hvr-wobble-top">s</span>
              <a href={linkedInUrl} className="highlight-blue p-2 gsap-ref">
                {name}
              </a>
            </h2>
            <h2 className="heading__secondary  gsap-ref">{occupation}</h2>
            <p className="heading__tertiary">{">>> " + description + " <<<"}</p>
          </div>
          <div className="home__face">
            <div className="plate border-gra">
              <img
                src={`images/assets/${pic}`}
                alt=""
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </header>

        <SnakeBorder text="Get in touch" link={linkedInUrl} classP=" ml-5" />
      </div>

      <About />
      <Skills />
      <Projects />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
