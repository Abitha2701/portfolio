
import React, { useState } from "react";
import { contact } from "../../data/content";
import { VscGithub } from "react-icons/vsc";
import { SiLinkedin } from "react-icons/si";

const Contact = () => {
  const [status, setStatus] = useState("Send");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;

    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    try {
      // The backend server must be running for this to work
      const response = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });

      setStatus("Send"); // Reset button text regardless of outcome

      if (response.ok) {
        alert("Message Sent Successfully!");
        e.target.reset(); // Clear form only on success
      } else {
        const errorData = await response.json();
        console.error("Server error:", errorData);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setStatus("Send");
      alert("Failed to send message. Is the server running?");
    }
  };

  return (
    <section className="contact" id="contact">
      <h2 className="section__title">Contact Me</h2>

      <div className="contact__container">
        <div className="contact__content">
          <h3 className="contact__title">Let's get in touch</h3>
          <p className="contact__description">{contact.description}</p>

          <div className="contact__social">
            <a
              href="https://github.com/Abinayass21"
              target="_blank"
              rel="noreferrer"
              className="contact__social-link"
            >
              <VscGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/abinaya-s-s-9b7999237/"
              target="_blank"
              rel="noreferrer"
              className="contact__social-link"
            >
              <SiLinkedin />
            </a>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__form-div">
            <label htmlFor="name" className="contact__form-tag">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="contact__form-input"
              placeholder="Insert your name"
              required
            />
          </div>

          <div className="contact__form-div">
            <label htmlFor="email" className="contact__form-tag">
              Mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="contact__form-input"
              placeholder="Insert your email"
              required
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <label htmlFor="message" className="contact__form-tag">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Write your message"
              required
            ></textarea>
          </div>

          <button type="submit" className="button button--flex" disabled={status === "Sending..."}>
            {status}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
