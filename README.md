# T1A2 - Portfolio

This is the repository for a portfolio site that I have created as the first
assessment piece in my [Coder Academy](https://www.coderacademy.edu.au/)
studies.

A mobile-first approach has been taken for this website. A combination
of Flexbox and media queries has been used to achieve responsivity.

The source code for this repository can be found on GitHub at 
[RobertNeville_T1A2](https://github.com/robocoptertron/RobertNeville_T1A2), 
and **all code that is contained therein has been written by me - the author -
through the application of my current understanding of Web develoment
using the technologies outlined in the 'Tech Stack' section of this 
document**. That understanding has been developed through independent
and (ongoing) institutional studies over the past 3 years. Special thanks to 
the wealth of educational material and documentation that can be found
on the Web.

The site is currently deployed at 
[rncode.herokuapp.com](https://rncode.herokuapp.com). 

## Scripts

**The following scripts must be executed in the root directory of
the repository.**

To install the project:

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

**NOTE:** if you need to test the `/contact` POST endpoint, you will need to 
create your own `.env` file.

Tested environments:

- **Ubuntu 20.04.4 LTS** with **Chrome 98.0.4758.102 (64-bit)**
- **Android 11** with **Chrome 98.0.4758.101**  

### Project Directory Structure

The project has the following directory structure (excluding node_modules):

```
├── docs
└── src
    ├── config
    ├── middleware
    ├── public
    │   ├── assets
    │   │   ├── fonts
    │   │   └── images
    │   │       ├── blog
    │   │       ├── cover-art
    │   │       ├── icons
    │   │       └── logos
    │   ├── css
    │   └── js
    ├── routes
    ├── schemas
    ├── scss
    └── views
        ├── blog-posts
        ├── layouts
        └── partials
```

To assist in marking the submission, I would like to direct the reader's 
attention to the `views` and `scss` directories. `views` contains all HTML
used in the site with the primary layout (`main.bhs`) in the `layouts` 
subdirectory, and all partials in the `partials` directory. The main 
content for each view is in a separate file directly under `views` - the 
names of these files reflect the name of the corresponding application 
route.

## Purpose

The purpose of this website is to demonstrate my abilities as a developer
to prospective employers. It has a minimal, 'retro' design, but the content and 
various additional features communicate my skills and experience effectively.

Although the criteria for this assessment piece only requires the use
of HTML and CSS/Sass, I figured that I might as well incorporate as much of
my knowledge as practical within the time given to produce a fully functional
website. This approach reduces the need for elaboration down the track, and 
more accurately demonstrates my current ability as a developer.

## Functionality / Features

This website contains 4 main pages, which can be navigated to using links
in the header and footer on medium to large devices, and in the menu and
footer on small devices:

- home
- about
- blog
- contact

The about page contains a link to a 'discography' page to showcase the cover 
artwork for my music, and the blog page contains links to the **5**
included blog posts. These links have been designed responsively using 
both Flexbox and media queries, and perform a 'jiggle' animation on mouse 
hover and/or touch. Each blog post contains a link at its end that can be 
used to direct the user back to the blog post index (blog page).

The blog posts include code snippets from the projects discussed, which have
been highlighted using [highlight.js](http://highlightjs.org) via CDN 
imports.

Instead of making my contact details publicly available, I have included a 
fully functional contact form with client and server side validation, and
noscript support. Valid form data is incorporated in an email that is generated
and sent by the server to an email address with a domain name that I own.

A novel feature that can be discovered through interacting with the contact form
is a 'sending spinner'. This component simply displays the site logo in 
abbreviated form (see `src/public/assets/images/favicon.svg`) on a 
circular, coin-like background that is animated to rotate around the Y axis
until the form submission is complete or an error occurs.

Each listing on the discography page has an expandable track list that is 
shown on mouse hover (on desktop and laptop computers) or on touch (on 
mobile and tablet devices). These discography items are responsive - much
like the aforementioned blog post links.

On devices smaller than `500px`, a hamburger component can be used to
toggle the menu component, which displays site and socials 
navigation links. This hamburger is animated using JavaScript 
with an approach that I developed from scratch and have used in 
other personal projects.

## Sitemap

The following is a simple computer generated (using [GlooMaps](https://www.gloomaps.com/)) 
sitemap of the project:

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

### Example Blog Post Page On All Device Types

#### Top

![Blog post page top](/docs/blog-post-top.png)

#### Middle

![Blog post page middle](/docs/blog-post-mid.png)

#### Bottom

![Blog post page bottom](/docs/blog-post-bottom.png)

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
developers. It has been designed to communicated my skills as a developer to
assist in securing employment in the industry. 

## Tech Stack

This project utilises the following primary technologies:

- HTML
- SCSS/CSS
- JavaScript
- Node.js

These are its dependencies:

- express
- express-handlebars
- joi
- nodemailer

These are its devDependencies:

- concurrently
- cross-env
- dotenv
- nodemon
- sass

For a more detailed list of the versions of the packages used, please refer to 
`package.json`.

The client-side code is primarily HTML and CSS - with some vanilla
JavaScript used for the menu on smaller devices and for contact form validation 
and submission. The CSS is compiled from SCSS using the `sass` compiler.

The backend is an Express.js application that uses `express-handlebars` for 
templating, `joi` for server-side form validation, and `nodemailer` for 
sending emails.

**`express-handlebars` is a crucial dependency, as it enables the displaying
of contact form error messages in noscript scenarios, and significantly
improves the maintainability of this project's HTML code.**

The other devDependencies are required to facilitate the development 
process; `concurrently` is used for running multiple npm scripts in 
parallel, `cross-env` and `dotenv` are both used for configuring environment 
variables, and `nodemon` is used for refreshing the server when files are 
edited.

The site has been deployed on [Heroku](https://rncode.herokuapp.com).