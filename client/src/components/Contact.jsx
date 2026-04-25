import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jsawva4",   // 🔁 service key
        "template_99rd9no",  // 🔁 template key
        form.current,
        "Gy7R85ieB63oe4lGh"    // 🔁 public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-page">

      {/* LEFT */}
      <div className="contact-info">
        <h2>Get in Touch</h2>
        <p>We’re here to help you with jobs and hiring.</p>

        <div className="info-box">
          <h4>Email</h4>
          <p>mkall6702006@gmail.com</p>
        </div>

        <div className="info-box">
          <h4>Phone</h4>
          <p>+91 9955305063</p>
        </div>

        <div className="info-box">
          <h4>Location</h4>
          <p>Chennai, India</p>
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="contact-form">
        <h3>Send Message</h3>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <input type="text" name="subject" placeholder="Subject" />

          <textarea name="message" placeholder="Your Message..." rows="5" required />

          <button type="submit">Send Message</button>
        </form>
      </div>

    </div>
  );
};

export default Contact;