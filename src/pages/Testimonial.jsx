import React from "react";
import { useSelector } from "react-redux";
import { selectResume } from "../service/resumeSlice";

import "../styles/testimonial.css";
function Testimonial() {
  const { resume } = useSelector(selectResume);
  if (resume) {
    var { testimonials } = resume.testimonials;
  }
  const renderTestimonial = () =>
    testimonials.map(({ text, user }) => (
      <blockquote className="testimonial__item" key={user}>
        <h1 className='highlight-yellow'>{`"${text}"`}</h1>
        <cite className='highlight-blue '>{user}</cite>
        
      </blockquote>
    ));
  return (
    <div className="testimonial dashed-border" data-scroll-section>
      <h2 className="heading__secondary highlight-blue ">testimonials</h2>
      <div className="testimonial__container ">{renderTestimonial()}</div>
    </div>
  );
}

export default Testimonial;
