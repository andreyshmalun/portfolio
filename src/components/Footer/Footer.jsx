import React from 'react';
import './Footer.css';
import {
  AiOutlineInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contacts">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/andriishmalun/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://github.com/andreyshmalun"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://twitter.com/shmalunandrey"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillTwitterCircle />
        </a>
        <a
          href="https://www.instagram.com/andriishhh/"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineInstagram />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Andrii Shmalun. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
