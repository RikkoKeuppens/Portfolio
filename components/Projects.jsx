import React from 'react';
import ProjectItem from './ProjectItem';
import { projects } from '../utils';
import Cad from "../projects/cad";

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve built</h2>
        <div className='grid md:grid-cols-2 gap-8 mb-8'>
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
        <div id="cad" className='hidden'>
          <Cad />
        </div>
      </div>
    </div>
  );
};

export default Projects;
