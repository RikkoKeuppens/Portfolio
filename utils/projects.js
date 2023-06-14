import cadImg from '../public/static/images/Projects/CAD/CAD.png';
import abmsImg from '../public/static/images/Projects/ABMS/inlogpagina.png';
import seleniumImg from '../public/static/images/Projects/Webscraper/Selenium.png';
import phpImg from '../public/static/images/Projects/PHP/Project-PHP.png';
import moviesImg from '../public/static/images/Projects/Angular/search.png';
import gogImg from '../public/static/images/Projects/GOG/GOG.jpg';
import beerImg from '../public/static/images/Projects/Beer/beer.jpg';



export const projects = [
  {
    id: 2,
    title: 'Crowd based monitoring system',
    backgroundImg: abmsImg,
    stack: ['Vue.JS, .NET Core, Python, Tailwind'],
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
    stack: ['PHP, Laravel, Bootstrap'],
    projectDetails: 'PHP',
    projectRepo: 'https://github.com/itfactory-tm/2022-ProjectPHP-302',
  },
  {
    id: 6,
    title: 'Game of Goose',
    backgroundImg: gogImg,
    stack: ['C#'],
    projectDetails: 'GOG',
    projectRepo: 'https://github.com/RikkoKeuppens/GAME_OF_GOOSE',
  },
  {
    id: 4,
    title: 'Selenium webscraper',
    backgroundImg: seleniumImg,
    stack: ['Selenium, C#, Github Workflows'],
    projectDetails: 'SW',
    projectRepo: 'https://github.com/RikkoKeuppens/SeleniumScraper',
  },
  {
    id: 7,
    title: 'Beer game',
    backgroundImg: beerImg,
    stack: ['PHP, Laravel, Bootstrap'],
    projectDetails: 'BEER',
    projectRepo: 'https://github.com/RikkoKeuppens/Friends_Beer_Competition',
  },
];
