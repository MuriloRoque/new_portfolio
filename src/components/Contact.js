import React from 'react';
import contact from '../styles/Contact.module.css';
import github from '../assets/images/github2.png';
import twitter from '../assets/images/twitter2.png';
import linkedin from '../assets/images/linkedin2.png';
import angellist from '../assets/images/angellist2.png';
import medium from '../assets/images/medium2.png';
import stack from '../assets/images/stack2.png';
import facebook from '../assets/images/facebook2.png';
import instagram from '../assets/images/instagram2.png';

const Contact = () => (
  <>
    <section id="contact" className={contact.container}>
      <div className={contact.intro}>
        <h1>Interested in collaborating?</h1>
        <p>
          If you have an application you are interested in developing, a feature
          that you need built or a project that needs coding, I&apos;d love to help you with it.
        </p>
      </div>
      <div className={contact.background}>
        <form action="https://formspree.io/xzbkpkvd" method="POST">
          <label className={contact.input} htmlFor="name">
            <input name="name" type="text" placeholder="Full name*" required />
          </label>
          <label className={contact.input} htmlFor="email">
            <input name="email" type="email" placeholder="Email*" required />
          </label>
          <label className={contact.inputText} htmlFor="message">
            <input className={contact.text} name="message" type="textarea" placeholder="Message*" required />
          </label>
          <button type="submit">Get in touch</button>
        </form>
        <span className={contact.email}>muriloengqui@gmail.com</span>
        <div className={contact.socialContainer}>
          <a rel="noopener noreferrer" target="_blank" href="https://github.com/MuriloRoque">
            <img src={github} alt="github" />
          </a>
          <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/MuriloRoquePai1">
            <img src={twitter} alt="twitter" />
          </a>
          <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/murilo-roque/">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a rel="noopener noreferrer" target="_blank" href="https://angel.co/u/murilo-roque-paiva-da-silva">
            <img src={angellist} alt="angellist" />
          </a>
          <a rel="noopener noreferrer" target="_blank" href="https://medium.com/@muriloengqui">
            <img src={medium} alt="medium" />
          </a>
          <a rel="noopener noreferrer" target="_blank" href="https://stackexchange.com/users/17775586/murilo-roque-paiva-da-silva">
            <img src={stack} alt="stack" />
          </a>
          <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/murilo.roque.52">
            <img src={facebook} alt="facebook" />
          </a>
          <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/muriloroquep/?hl=en">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
    </section>
    <footer className={contact.footer}>© 2020 Murilo Roque</footer>
  </>
);

export default Contact;
