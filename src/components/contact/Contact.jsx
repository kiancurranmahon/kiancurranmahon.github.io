import React /*,{ useRef }*/ from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from 'emailjs-com';


const contact = () => {
  /*useRef is causing issue, potentially needs to be replace with a different hook
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hoi64m8', 'template_5jrt13s', form.current, { publicKey: 'z0-bgxF9Inz8Z0T3y' });
    e.target.reset();
  }; */

  return (
     <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>kmahon26@outlook.com</h5>
            <a href="mailto:kmahon26@outlook.com" target="_blank">Send an Email</a>
          </article>

          <article className="contact__option">
            <FaLinkedin className="contact__option-icon"/>
            <h4>Linkedin</h4>
            <h5>Kian Curran Mahon</h5>
            <a href="https://www.linkedin.com/in/kian-curran-mahon/" target="_blank">Connect on Linkedin</a>
          </article>

          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon"/>
            <h4>Whatsapp</h4>
            <a href="https://api.whatsapp.com/send?phone=insertnumberinclcountrycode" target="_blank" >Send an message</a>
          </article>

        </div>
        <form /*ref={form} onSubmit={sendEmail}*/>
          <input type="text" name='name' placeholder="Enter your name:" required />
          <input type="text" name='email' placeholder="Enter your email address:" required />
          <textarea name="message" rows='7' placeholder="Enter your message:" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
      
    </section>
  )
};

export default contact;
