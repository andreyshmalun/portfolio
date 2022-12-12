import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/andrii-shmalun-a1407738/"
        target="blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/andreyshmalun" target="blank">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
