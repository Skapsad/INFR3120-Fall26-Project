# CampusQuiet

INFR3120 Fall 2026 - Project Part 1

GitHub: https://github.com/Skapsad/INFR3120-Fall26-Project

## Project Idea

CampusQuiet is a website for students to find a place to study on campus. During busy times like midterms it's hard to find a quiet spot, as the library is usually full, the lounges are loud and a lot of tables don't have power outlets close by. Students end up spending their time going between buildings looking for a place to sit instead of studying.

The website uses information from students who are already at a study spot. A student at a spot can report it with the Report a Study Spot form by entering the location, noise level, crowd level and power outlets. Noise level and crowd level are Low, Medium or High and power outlets are None, Some or Lots. The reports are shown in a table on the home page so other students can check which spots are good to study at before going there. Each report is removed from the table after one hour, meaning the table only shows recent information.

For Part 1 we made the home page with the site name and our logo, the Report a Study Spot button and form for adding a spot and the table that shows all the reported spots. The website is made with Node.js, Express and EJS and is deployed to the cloud. For the next parts we want to save the reports in MongoDB, add edit and delete for the spots and add filtering by building.

## Group Contributions

We worked on our own branch and committed from our Github accounts to the shared project repository.

Iqra Noor - Frontend. Made the landing page with the site name, the CampusQuiet logo, the navbar and footer, the Report a Study Spot button, the study spot table and the CSS styling.

Abdullah Qaiser - Backend. Set up the Express backend and connected it to the frontend, made the Report a Study Spot page and its routes, the checking of the form and the Time Left countdown that removes reports from the table after one hour.

Krutarth Joshi - Documentation and deployment. Wrote the project description, contribution section, README.md file and deployment to the cloud.

## Features

- Home page with the site name and our logo (/home)
- Table of all reported study spots (/home)     
- Report a Study Spot form (/spots/add)
- Reports are removed from the table after one hour
- Time Left column on the table that counts down for each spot and the row is removed when it hits zero
- The form is checked when it is sent, if the location is empty or an option is not valid an error message is shown

For Part 1 the spots are kept in the app memory and they reset when the server restarts.

## How to Run

1. Clone the repo and open it in VS Code
2. Run npm install
3. Run npm start
4. Go to http://localhost:3000/home

## Code Sources

- Professor's INFR3120 CRUD Part-1 starter code from the lectures
- Bootstrap and Font Awesome (installed with npm in the starter code)
- The CampusQuiet logo is our own design
