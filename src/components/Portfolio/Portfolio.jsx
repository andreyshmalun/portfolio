import React from 'react';
import './Portfolio.css';
import { data } from '../../mock-data/data';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, about, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btm-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  {id === 4 ? 'Case Study' : 'Live demo'}
                </a>
              </div>
              <p className="about">{about}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
