import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import './Experience.css';
const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon" />
              <div>
                <h4>Javascript</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon" />
              <div>
                <h4>Node JS</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon" />
              <div>
                <h4>REST</h4>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
