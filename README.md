# T1A2 - Portfolio

This is the repository for a portfolio site that I have created as the first
assessment piece in my [Coder Academy](https://www.coderacademy.edu.au/)
studies.

The code for this repository can be found on GitHub at [RobertNeville_T1A2](https://github.com/robocoptertron/RobertNeville_T1A2), and the site has 
been deployed at [rncode.herokuapp.com](https://rncode.herokuapp.com).

## Scripts

To install the project, run the following command:

```
npm install
```

To build the project (compile SCSS into CSS):
```
npm run build
```

To start the project:
```
npm start
```

For development (server and client):
```
npm run dev
```

## Purpose

The purpose of this website is to demonstrate my abilities as a developer
to prospective employers. It has a minimal design, but the content and 
various additional features communicate my skills and experience effectively.

## Functionality / Features

This website contains 4 main pages, which can be navigated to using links
in the header and footer on medium to large devices, and in the menu and
footer on small devices:

- home
- about
- blog
- contact

The blog page contains links to each of the included blog posts.

## Sitemap

## Screenshots

## Target Audience

The target audience of this website is prospective employers and other 
developers. It has been designed to communicated my skills as a developer so 
that I may 

## Tech Stack

This project utilises the following primary technologies:

- HTML
- SCSS/CSS
- JavaScript (vanilla)
- Node.js

These are its dependencies:

- express
- express-handlebars
- joi
- nodemailer

These are it's devDependencies:

- concurrently
- cross-env
- dotenv
- nodemon
- sass

The client-side code is primarily HTML and CSS - with some vanilla
JavaScript used for menu on smaller devices and for contact form validation 
and submission. The CSS is compiled from SCSS using the `sass` compiler.

The backend is an Express.js application that uses `express-handlebars` for 
templating, `joi` for server-side form validation, and `nodemailer` for 
sending emails.

The other devDependencies are required to facilitate the development 
process; `concurrently` is used for running multiple npm scripts in 
parallel, `cross-env` and `dotenv` are both used for configuring environment 
variables, and `nodemon` is used for refreshing the server when files are 
edited.