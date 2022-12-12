import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CaseStudy.css';

export default function CaseStudy() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container caseStudy__header">
        <h3>Case study for</h3>
        <h1>Chat App</h1>
      </div>
      <div className="container caseStudy__container">
        <div>
          <h3>Overview</h3>
          <p>
            This is a chat app for mobile devices built using React Native. The
            app provides users with a chat interface and options to share images
            and their location.
          </p>
          <h3>Purpose & Context</h3>
          <p>
            This chat app was a personal project I completed as part of my
            full-stack web development course with CareerFoundry to learn React
            Native development. This is the first native app I built and also
            introduced me to the Expo CLI.
          </p>
        </div>
        <div>
          <img src="./assets/1.png" alt="main screen" />
        </div>
      </div>
      <div className="container caseStudy__container">
        <div className="separate__container">
          <h3>Objective</h3>
          <p>
            This project aimed to create a mobile app for Android and iOS that
            would allow users to message each other easily. The problem I was
            trying to solve was to create a native application from scratch
            using an entirely new-to-me JavaScript framework, React Native.
          </p>
          <h3>Approach</h3>
          <p>
            I began this project by setting up a new project using Expo CLI and
            creating the necessary components. Once this new project was
            established, I began implementing the Ul as given in the project
            brief supplied by CareerFoundry. I enjoyed having a target design I
            needed to replicate with my UI.
          </p>
        </div>
        <div>
          <img src="./assets/2.png" alt="design screen" />
          <p className="description">
            Screen design is given in the project brief{' '}
          </p>
        </div>
        <div>
          <p>
            Then I set up an iOS simulator with Xcode and an Android emulator
            with Android Studio. Once these simulators and emulators were set
            up, I was able to view my app on these virtual devices as well as my
            mobile phone.
          </p>
        </div>
        <div>
          <img src="./assets/3.png" alt="visual studio terminal" />
          <p className="description">
            Screenshot of Visual Studio’s terminal, which allows me to run my
            app on Android, iOS or web
          </p>
        </div>
        <div>
          <p>
            The next part of the project involved implementing the actual chat
            functionality of my app. This involved setting up a database with
            Firestore and implementing Gifted Chat, a popular chat Ul library.
            Firestore allows for messages to be viewed by users even while
            offline, while Gifted Chat helped me greatly improve my app's Ul.
          </p>
        </div>
        <div>
          <img src="./assets/4.png" alt="firestore database" />
          <p className="description">
            Screenshot of Firestore "messages" database used for the app
          </p>
        </div>
        <div>
          <p>
            To finish up my app, I implemented the necessary communication
            features. This meant creating an Action Sheet that contains the code
            allowing users to take and send images as well as their location.
          </p>
        </div>
        <div>
          <img src="./assets/5.png" alt="snippet" />
          <p className="description">
            A snippet of my code that allows users to pick images from the
            gallery
          </p>
        </div>
      </div>

      <div className="container">
        <h3>Challenges</h3>
        <p>
          There were two main challenges I faced during this project. The first
          challenge was to make sure the layout of the app was smooth and slick,
          especially when you switch pages and it did not want to apply the
          correct background colour. It was for the most part easy to solve
          after some troubleshooting. The issue was I used the wrong constant to
          render the background colours. The second challenge was actually with
          the configuration of Firebase. Somewhere during the configuration of
          the Firebase, the messages were saved and loaded as intended. However,
          the configuration of the function to take photos, upload images and
          share your location was not working properly. In the end, the code was
          correct and the fault lay with the Firebase. Thus to solve this issue
          was to reconfigure Firebase again from scratch.
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
