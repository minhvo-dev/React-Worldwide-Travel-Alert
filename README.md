# WORLDWIDE TRAVEL ALERT

_Even after the worst storms, ~~the sun will shine again~~ **there are many more to come**. So keep calm and stay home._ 😉   
https://worldwide-travel-alert.herokuapp.com

## Table of Content
- [Overview](#Overview)
- [Installation](#Installation)
- [Notes](#Notes)
- [Acknowledgement](#Acknowledgement)

## Overview
- [Worldwide Travel Alert][application-link] is a simple _mobile-friendly_ web application for travellers to check if there are any alerts for their trips. 

- The alerts are retrieved from the [Government of Canada database][government-database-link]. 

- The features include:  
  - Updating the existing database.
  - Searching for alerts of a specific country in a region, subregion, or by a traveller.
  - Adding new alerts by traveller.

## Installation
- Clone the repo
- Install packages in both frontend and backend 

  ```bash
  cd backend/
  npm install
  cd ../frontend/
  npm install
  ```
- Build the frontend and copy it to the backend

  ```bash
  cd ../backend/
  npm run build:ui
  ```

- Start up the application

  ```bash
  npm start
  ```

- By default, the application is started at http://localhost:5000

## Notes
- Frontend is a React application created with [create-react-app][create-react-app-repo] package.
- UI is built with [Material UI framework][material-ui-website].
- Backend runs on [Node.js][nodejs-website] and is built with [Express.js][express-website].   
- Communication between frontend and backend uses [GraphQL][graphql-website] queries.
- A simple data validation is implemented in the input form to validate users' input data when they add new advisories.

## Acknowledgement
- [Worldwide Travel Alert][application-link] is a case study of INFO-3139 course at Fanshawe College.
- Special thanks to [Professor Evan Lauersen][evan-lauersen-github] for his detailed instruction.
- Special thanks to a weird person for motivating me to finish this project before the deadline.

[application-link]: https://worldwide-travel-alert.herokuapp.com
[government-database-link]: http://data.international.gc.ca/travel-voyage/index-alpha-eng.json   
[create-react-app-repo]: https://github.com/facebook/create-react-app
[material-ui-website]: https://material-ui.com/  
[nodejs-website]: https://nodejs.org/en/   
[express-website]: https://expressjs.com/   
[graphql-website]: https://graphql.org/
[evan-lauersen-github]: https://github.com/elauersen