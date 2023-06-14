import cadImg from '../public/static/images/Projects/CAD/CAD.png';
import abmsImg from '../public/static/images/Projects/ABMS/inlogpagina.png';
import seleniumImg from '../public/static/images/Projects/Webscraper/Selenium.png';
import phpImg from '../public/static/images/Projects/PHP/Project-PHP.png';
import moviesImg from '../public/static/images/Projects/Angular/search.png';

export const projects = [
  {
    id: 2,
    title: 'Crowd based monitoring system - Project 4.0',
    backgroundImg: abmsImg,
    stack: ['Vue.JS, .NET Core, MySql, Python, Tailwind'],
    projectDetails: 'CBMS',
    projectRepo: 'https://github.com/Project4-0C2/project4.0_C2_frontend',
  },
  {
    id: 5,
    title: 'Movie DB',
    backgroundImg: moviesImg,
    stack: ['Angular'],
    projectDetails: 'ANG',
    projectRepo: 'https://github.com/RikkoKeuppens/Angular_Movie_DB',
  },
  {
    id: 3,
    title: 'Consultancy bureau - Project PHP',
    backgroundImg: phpImg,
    stack: ['React, Axios, TheMovie API'],
    projectDetails: 'PHP',
    projectRepo: 'https://github.com/itfactory-tm/2022-ProjectPHP-302',
  },
  {
    id: 4,
    title: 'Selenium webscraper',
    backgroundImg: seleniumImg,
    stack: ['React, Axios, TheMovie API'],
    projectDetails: 'SW',
    projectRepo: 'https://github.com/RikkoKeuppens/SeleniumScraper',
  },
];
