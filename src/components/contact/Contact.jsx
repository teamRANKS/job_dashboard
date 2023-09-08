import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option_icon" />
            <h4>Email</h4>
            <h5>teamranks1@gmail.com</h5>
            <a href="mailto:teamranks1@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option_icon" />
            <h4>Whatsapp</h4>
            <h5>Ranks Team</h5>
            <a
              href="http://api.whatsapp.com/send?phone=9570520810"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};
export default Contact;
