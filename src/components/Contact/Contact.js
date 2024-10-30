import React, { useRef, useState } from "react";
import { FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import "./Contact.css";
import nerveLogo from "../../Assets/nervelogo.svg";
import dlt from "../../Assets/dlt-removebg-preview (1).png";
import lisk from "../../Assets/lisk-removebg-preview.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [notification, setNotification] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.from_name.value;
    const email = form.current.from_email.value;
    const message = form.current.message.value;

    if (!name || !email || !message) {
      setNotification("Please complete all fields before submitting.");
      setIsSuccess(false);
      setTimeout(() => setNotification(""), 2000); // Clear notification after 2 seconds
      return;
    }

    emailjs
      .sendForm("service_u64v4rb", "template_k1zjo8g", form.current, {
        publicKey: "GN-JrD-UUj5GHn1J4",
      })
      .then(
        () => {
          setNotification("Your message has been sent successfully!");
          setIsSuccess(true);
          form.current.reset();
          setTimeout(() => setNotification(""), 2000); // Clear notification after 2 seconds
        },
        (error) => {
          setNotification("Failed to send message. Please try again.");
          setIsSuccess(false);
          console.error("FAILED...", error.text);
          setTimeout(() => setNotification(""), 2000); // Clear notification after 2 seconds
        }
      );
  };

  return (
    <section className="contactPage">
      <div id="clients" className="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDescription">
          I have had the opportunity to work with a diverse group of companies.
          Some of the notable companies I have worked with are listed below,
          along with the communities I belong to.
        </p>

        <div className="clientImages">
          <a href="https://nervee.netlify.app/login">
            <img src={nerveLogo} alt="nerve" />
          </a>
          <a href="https://lisk.com/">
            <img src={lisk} alt="lisk" />
          </a>
          <a href="https://dltafrica.io/">
            <img src={dlt} alt="dlt" />
          </a>
        </div>
      </div>

      <div id="contact" className="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <p className="clientDescription">
          Please fill out the form below to discuss any work opportunities
        </p>

        {notification && (
          <div className={`notification ${isSuccess ? "success" : "error"}`}>
            {notification}
          </div>
        )}

        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your name" name="from_name"/>
          <input type="email" className="email" placeholder="Your email" name="from_email"/>
          <textarea
            name="message"
            rows="5"
            placeholder="Your message"
            className="msg"
          ></textarea>
          <button type="submit">Submit</button>
        </form>

        {/* Social Media Links */}
        <div className="links">
          <a
            href="http://www.instagram.com/dimeji_911"
            target="_blank"
            rel="noopener noreferrer"
            className="socialIcon instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/abubakr-lukman-uthman-51156a263"
            target="_blank"
            rel="noopener noreferrer"
            className="socialIcon linkedin"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.x.com/dimeji_911"
            target="_blank"
            rel="noopener noreferrer"
            className="socialIcon twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://wa.me/+2349032024600"
            target="_blank"
            rel="noopener noreferrer"
            className="socialIcon whatsapp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
