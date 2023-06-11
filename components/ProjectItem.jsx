import Image from 'next/image';
import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { BiLinkExternal } from 'react-icons/bi';

const ProjectItem = ({ title, backgroundImage, stack, projectDetails, projectRepo }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group projectItem'>
      <Image
        className='rounded-xl group-hover:opacity-10'
        src={backgroundImage}
        alt={title}
      />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>
          {title}
        </h3>
        <p className='pb-4 pt-2 text-white text-center'>{stack}</p>
        <div className='flex items-center justify-center'>
          <button className='mx-1' onClick={() => showDivAndScrollTo({projectDetails})}>
            <p className='text-center px-2 py-1 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
              Details
            </p>
          </button>
          {projectDetails !== '#cad' && (
              <a href={projectRepo} target='_blank' rel="noreferrer">
                <p className='text-center px-2 py-2 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
                  <BsGithub />
                </p>
              </a>
          )}
        </div>
      </div>
    </div>
  );
};


function showDivAndScrollTo(divId) {
    var divKey = Object.keys(divId)[0]; // Get the key of the object
    var divValue = divId[divKey]; // Get the value of the object

    var div = document.getElementById(divValue);

    console.log(div);
    // Check if the div exists
    if (div) {
        // Make the div visible
        div.style.display = 'block';
        // Scroll to the div
        div.scrollIntoView({ behavior: 'smooth' });
    }
}

export default ProjectItem;
