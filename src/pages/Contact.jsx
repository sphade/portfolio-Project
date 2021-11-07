import React, { useState } from "react";
import "../styles/contact.css";
import CheckSharp from "@mui/icons-material/CheckSharp";
import { useSelector } from "react-redux";

import { selectResume } from "../service/resumeSlice";
function Contact() {
  const { resume } = useSelector(selectResume);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  if (resume) {
    var contactName = resume.main?.name;
    var street = resume.main?.address?.street;
    var city = resume.main?.address?.city;
    var state = resume.main?.address?.state;
    var zip = resume.main.address?.zip;
    var phone = resume.main?.phone;
    var contactEmail = resume.main?.email;
    var contactMessage = resume.main?.contactmessage;
  }
  const submitForm = () => {
    window.open(
      `mailto:${contactEmail}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
        email
      )}): ${encodeURIComponent(message)}`
    );
  };
  return (
    <section className="contact dashed-border" data-scroll-section>
      <h2 className="heading__secondary highlight-blue center">get in touch</h2>

      <div className="form-container">
        <form onSubmit={submitForm} className="border-gra">
          <div>
            <label htmlFor="contactName">
              Name <span className="required">*</span>
            </label>
            <input
              type="text"
              defaultValue=""
              value={name}
              size="35"
              id="contactName"
              name="contactName"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="contactEmail">
              Email <span className="required">*</span>
            </label>
            <input
              type="text"
              defaultValue=""
              value={email}
              size="35"
              id="contactEmail"
              name="contactEmail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="contactSubject">Subject</label>
            <input
              type="text"
              defaultValue=""
              value={subject}
              size="35"
              id="contactSubject"
              name="contactSubject"
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <div>
            <textarea
              cols="50"
              rows="15"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              id="contactMessage"
              name="contactMessage"
              placeholder="Message"
            ></textarea>
          </div>

          <div>
            <button onClick={submitForm} type="submit" className="submit">
              Submit
            </button>
          </div>
        </form>

        <div id="message-warning" className="heading__tertiary border-gra">
          {" "}
          Error boy
        </div>
        <div id="message-success" className="heading__tertiary border-gra">
          <i>\/</i>
          Your message was sent, thank you!
          <br />
        </div>

        <aside className="four columns footer-widgets">
          <div className="heading__tertiary highlight-yellow">
            <h4>Address and Phone</h4>
            <p className="address">
              {contactName}
              <br />
              {contactEmail}
              <br />
              <br />
              {street} <br />
              {city}, {state} {zip}
              <br />
              <span>{phone}</span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Contact;
