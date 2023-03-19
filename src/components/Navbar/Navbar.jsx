import React from 'react';
import './Navbar.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { MdWebStories } from 'react-icons/md';
import { TbMessageCircle } from 'react-icons/tb';
import { useState } from 'react';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a
        href="#"
        onClick={() => {
          setActiveNav('#');
        }}
        className={activeNav === '#' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => {
          setActiveNav('#about');
        }}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#portfolio"
        onClick={() => {
          setActiveNav('#portfolio');
        }}
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <MdWebStories />
      </a>
      <a
        href="#contacts"
        onClick={() => {
          setActiveNav('#contacts');
        }}
        className={activeNav === '#contacts' ? 'active' : ''}
      >
        <TbMessageCircle />
      </a>
    </nav>
  );
};

export default Navbar;
