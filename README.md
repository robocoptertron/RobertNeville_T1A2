# T1A2 - Portfolio

This is the repository for a portfolio site that I have created as the first
assessment piece in my [Coder Academy](https://www.coderacademy.edu.au/)
studies.

The code for this repository can be found on GitHub at [RobertNeville_T1A2](https://github.com/robocoptertron/RobertNeville_T1A2), and the site has 
been deployed at [rncode.herokuapp.com](https://rncode.herokuapp.com).

A mobile-first approach has been taken for this website.

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

The about page contains a link to a 'discography' page to showcase the cover 
artwork for my music, and the blog page contains links to each of the 
included blog posts. 

Instead of making my contact details publicly available, I have included a 
fully functional contact form with validation and noscript support. This form
is submitted to the Express backend and an email is generated and sent to
an email address of my own.

Each listing on the discography page has an expandable track list that is 
shown on mouse hover (on desktop and laptop computers) or on touch (on 
mobile and tablet devices).

The blog posts include code snippets from the projects discussed that have
been highlighted using [highlight.js](http://highlightjs.org) via CDN 
imports.

## Sitemap

The following is a simple computer generated (using [GlooMaps](https://www.gloomaps.com/)) sitemap of the project:

![rncode sitemap](/docs/sitemap.png)

## Screenshots

The following screenshots have been included to give the reader an idea of 
the website's appearance:

### Header On Small Devices

![Top of home page on smaller devices](/docs/home-page-header-sm.png)

### Header On Small Devices With Menu Expanded

![Top of home page with menu expanded](/docs/home-page-menu.png)

### Header On Larger Devices

![Top of home page on larger devices](/docs/home-page-header-lg.png)

### Footer On All Device Types

![Bottom of home page on all device types](/docs/home-page-footer.png)

### Blog Page On Small Devices

![Blog page on small device types](/docs/blog-page-sm.png)

### Blog Page On Large Devices

![Blog page on large device types](/docs/blog-page-lg.png)

### Contact Page On All Device Types

![Contact page on all device types](/docs/contact-page.png)

### Discography Item On Large Devices

![Discography item on large device types](/docs/discography-item-lg.png)

### Discography Item On Large Devices On Hover

![Discography item on large device types on hover](/docs/discography-item-lg-hover.png)

### Discography Item On Small Devices

![Discography item on small device types](/docs/discography-item-sm.png)

### Discography Item On Small Devices On Hover

![Discography item on small device types on hover](/docs/discography-item-sm-hover.png)

## Target Audience

The target audience of this website is prospective employers and other 
developers. It has been designed to communicated my skills as a developer so 
that I may secure employment in the industry.

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

The site has been deployed on [Heroku](https://rncode.herokuapp.com).