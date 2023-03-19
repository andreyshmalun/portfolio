import React from 'react';
import './Experience.css';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGit,
  FaBootstrap,
  FaCode,
} from 'react-icons/fa';
import {
  SiJquery,
  SiJest,
  SiNetlify,
  SiAmazonaws,
  SiFirebase,
} from 'react-icons/si';

const Experience = () => {
  const skills = [
    { name: 'HTML', icon: FaHtml5 },
    { name: 'CSS', icon: FaCss3Alt },
    { name: 'JavaScript', icon: FaJsSquare },
    { name: 'React/Native', icon: FaReact },
    { name: 'Bootstrap', icon: FaBootstrap },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'jQuery', icon: SiJquery },
    { name: 'MongoDB', icon: FaDatabase },
    { name: 'REST APIs', icon: FaCode },
    { name: 'Jest', icon: SiJest },
    { name: 'Git', icon: FaGit },
    { name: 'Netlify', icon: SiNetlify },
    { name: 'AWS', icon: SiAmazonaws },
    { name: 'Firebase', icon: SiFirebase },
  ];

  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My experience</h2>
      <div className="container">
        <ul className="listStyles">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <li key={index} className="listItemStyles">
                <Icon className="iconStyles" />
                <span>{skill.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
