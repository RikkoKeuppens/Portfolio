import cadImg from '../public/static/images/Projects/CAD/CAD.png';
import abmsImg from '../public/static/images/Projects/ABMS/inlogpagina.png';
import seleniumImg from '../public/static/images/Projects/Webscraper/Selenium.png';
import phpImg from '../public/static/images/Projects/PHP/Project-PHP.png';

export const projects = [
  {
    id: 1,
    title: 'Candidate Assessment Dashboard - Internship',
    backgroundImg: cadImg,
    stack: ['Angular, .NET Core, MySql, Tailwind'],
    projectDetails: 'cad',
    projectRepo: '',
  },
  {
    id: 2,
    title: 'Crowd based monitoring system - Project 4.0',
    backgroundImg: abmsImg,
    stack: ['Vue.JS, .NET Core, MySql, Python, Tailwind'],
    projectDetails: '',
    projectRepo: 'https://github.com/Project4-0C2/project4.0_C2_frontend',
  },
  {
    id: 3,
    title: 'Consultancy bureau - Project PHP',
    backgroundImg: phpImg,
    stack: ['React, Axios, TheMovie API'],
    projectDetails: 'https://netflix-clone-fc1ec.web.app/',
    projectRepo: 'https://github.com/rafalazar/netflix-clone',
  },
  {
    id: 4,
    title: 'Selenium webscraper',
    backgroundImg: seleniumImg,
    stack: ['React, Axios, TheMovie API'],
    projectDetails: 'https://netflix-clone-fc1ec.web.app/',
    projectRepo: 'https://github.com/rafalazar/netflix-clone',
  },
];
