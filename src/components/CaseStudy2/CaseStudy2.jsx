import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CaseStudy2.css';

export default function CaseStudy2() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container caseStudy__header">
        <h3>Case study for</h3>
        <h1>Movio</h1>
      </div>
      <div className="container caseStudy__container">
        <div>
          <h3>Overview</h3>
          <p>
            Movio is a web application designed with the MERN stack. It provides
            users with access to information about superhero movies, including
            information about the film's directors as well as which comic
            universe they belong to. Users can create an account, update their
            personal information, and save a list of favorite movies.
          </p>
          <h3>Purpose & Context</h3>
          <p>
            This project was created as part of my web development course at
            CareerFoundry Full-Stack Web Development curriculum.
          </p>
        </div>
        <div>
          <img src="/assets/cs2_1.png" alt="main screen" />
          <p className="description">Movio's main screen </p>
        </div>
      </div>
      <div className="container caseStudy__container">
        <div>
          <h3>Objective</h3>
          <p>
            The objective of the project was to gain a deeper understanding of
            both front and backend development with JavaScript-based
            technologies, as well as bringing the front- and backend together to
            create a working web application.
          </p>
          <h3>Tools, Skills, Methodologies</h3>
          <p>
            For the server-side: Node.js, Express, MongoDB/Shell, Mongoose for
            database models, Postman for API testing, Passport for HTTP
            authentication and JWT token, Bcrypt for password hashing,
            Express-Validator for input validation. For the client-side: React,
            React Bootstrap, React-Redux, Parcel.
          </p>
          <h3>Approach and Process</h3>
          <h5>Server-Side Implementation</h5>
          <p>
            For the server-side, I created a RESTful API based on Node.js and
            Express that accesses a noSQL database (MongoDB) via common HTTP
            methods. The database uses CRUD operations for manipulation and
            provides data in JSON format.
          </p>
          <a href="https://movio.onrender.com/documentation">
            View documentation
          </a>
        </div>

        <div>
          <div>
            <img src="/assets/cs2_2.png" alt="mongo db screen" />
            <p className="description">MongoDB collections screen </p>
          </div>
          <div>
            <img src="/assets/cs2_3.png" alt="postman screen" />
            <p className="description">Postman screen </p>
          </div>
        </div>

        <div>
          <h5>Client-Side Implementation</h5>
          <p>
            After the server-side was up-and-running, I created a
            single-page-application with React and React-Redux based on a
            project brief that needed to include the following views:
          </p>
          <ul>
            <li className="case-study-list">
              Main view: Returns a list of ALL movies to the user (each listed
              item with an image, title, and description), allows for sorting
              and filtering, includes the ability to select a movie for more
              details.
            </li>
            <li className="case-study-list">
              Single movie view: Returns data (description, genre, director,
              image) about a single movie to the user and allows users to add a
              movie to their list of favorites.
            </li>

            <li className="case-study-list">
              Login view: Allows users to log in with a username and password.
            </li>
            <li className="case-study-list">
              Registration view: Allows new users to register (username,
              password, email, birthday).
            </li>
            <li className="case-study-list">
              Genre view: Returns data about a genre, with a name and
              description and displays example movies.
            </li>
            <li className="case-study-list">
              Director view: Returns data about a director (name, bio, birth
              year, death year) and displays example movies.
            </li>
          </ul>
        </div>
        <div>
          <img src="/assets/cs2_4.png" alt="single movie screen" />
          <p className="description">Single movie view </p>
        </div>
      </div>

      <div className="container">
        <h3>Challenges</h3>
        <p>
          Given that this was my first larger project based on React, it took me
          a bit of time to get accustomed to React's structure and in particular
          the use of state across components. Setting up the backend first
          definitely helped me tackle this project, as trying to implement both
          front and backend simultaneously would have led to increased
          complexity while trying to learn a new JavaScript framework on the
          way. Going forward, I want to change some of the more complex state
          management of the app (regarding movie favorites) towards a simple API
          fetch in order to minimize the risk of page malfunctioning in certain
          cases (e.g. page reloads, restricted internet connection). In
          addition, I'm planning to include a toggle button to add/remove
          favorites in the movie view, which I learned to implement while
          recreating this project in Angular.
        </p>
      </div>

      <div className="container container__footer">
        <button className="btn btn-primary" onClick={() => navigate('/')}>
          GO BACK
        </button>
      </div>
    </>
  );
}
