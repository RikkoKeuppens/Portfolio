import React from 'react';
import ProjectItem from './ProjectItem';
import { projects } from '../utils';
import Cad from "../projects/abms";
import MyCarouselABMS from "../utils/MyCarouselABMS";
import ABMS from "../projects/abms";
import PHP from "../projects/php";
import SW from "../projects/SW";
import ANG from "../projects/ang";

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve built</h2>
        <div className='grid md:grid-cols-3 gap-8 mb-8'>
          {projects.map((i) => (
                <ProjectItem
                    key={i['id']}
                    title={i['title']}
                    backgroundImage={i['backgroundImg']}
                    stack={i['stack']}
                    projectDetails={i['projectDetails']}
                    projectRepo={i['projectRepo']}
                />
          ))}
        </div>
        <div id="CBMS" className='hidden pt-10'>
          <ABMS/>
        </div>
        <div id="ANG" className='hidden pt-10'>
          <ANG/>
        </div>
        <div id="PHP" className='hidden pt-10'>
          <PHP/>
        </div>
        <div id="SW" className='hidden pt-10'>
          <SW/>
        </div>
      </div>
    </div>
  );
};

export default Projects;
