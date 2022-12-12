import React, { useRef } from 'react';
import './Contacts.css';
import { MdOutlineEmail } from 'react-icons/md';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import emailjs from 'emailjs-com';

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_qqbfmwl',
        'template_nluf7pb',
        form.current,
        'B6WD52I77Yw83O2Ol'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset(); //reset the form after submit button
  };
  return (
    <section id="contacts">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>shmalunandrey@gmail.com</h5>
            <a href="mailto:shmalunandrey@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+16476871406</h5>
            <a
              href="https://api.WhatsApp.com/send?phone=16476871406"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
          />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send a message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
