import React from 'react';
import './Experience.css';
const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My experience</h2>
      <div className="container experience__container">
        <article className="experience__details">
          <div>
            <h3 className="experience__header">Languages</h3>
            <div className="experience__list">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Typescript</li>
            </div>
          </div>
        </article>
        <article className="experience__details">
          <div>
            <h3 className="experience__header">
              Frontend libraries & frameworks
            </h3>
            <div className="experience__list">
              <li>jQuery</li>
              <li>Bootstrap</li>
              <li>React</li>
              <li>React-Redux</li>
              <li>Angular</li>
              <li>Angular-Material</li>
            </div>
          </div>
        </article>
        <article className="experience__details">
          <div>
            <h3 className="experience__header">Backend and other libraries</h3>
            <div className="experience__list">
              <li>NodeJS</li>
              <li>Express</li>
              <li>Morgan</li>
              <li>CORS</li>
              <li>Axios</li>
              <li>Parcel</li>
              <li>PropTypes</li>
              <li>Serverless</li>
              <li>Recharts</li>
            </div>
          </div>
        </article>
        <article className="experience__details">
          <div>
            <h3 className="experience__header">Testing & QA</h3>
            <div className="experience__list">
              <li>Postman</li>
              <li>Jest</li>
              <li>Enzyme</li>
              <li>Cucumber</li>
              <li>Puppeteer</li>
            </div>
          </div>
        </article>
        <article className="experience__details">
          <div>
            <h3 className="experience__header">Documentation</h3>
            <div className="experience__list">
              <li>JSDoc</li>
              <li>TypeDoc</li>
            </div>
          </div>
        </article>
        <article className="experience__details">
          <div>
            <h3 className="experience__header">Web services & databases</h3>
            <div className="experience__list">
              <li>GitHub</li>
              <li>AWS</li>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>Google Firestore</li>
              <li>Heroku</li>
              <li>Netlify</li>
            </div>
          </div>
        </article>
        <article className="experience__details">
          <div>
            <h3 className="experience__header">Mobile Apps</h3>
            <div className="experience__list">
              <li>PWA</li>
              <li>React Native</li>
              <li>Android Studio</li>
              <li>Expo</li>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Experience;
