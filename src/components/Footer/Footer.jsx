import React from 'react';
import './Footer.css';
import { AiOutlineInstagram, AiFillTwitterCircle } from 'react-icons/ai';

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
          href="https://www.instagram.com/andrey_shmalun/"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineInstagram />
        </a>
        <a
          href="https://twitter.com/shmalunandrey"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillTwitterCircle />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Andrii Shmalun. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
