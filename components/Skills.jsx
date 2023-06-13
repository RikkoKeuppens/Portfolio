import Image from 'next/image';
import React from 'react';
import { skills } from '../utils';
import {softskills} from "../utils/softskills";

const Skills = () => {
  return (
    <div id='skills' className='w-full py-16 p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        <p className='mt-5 mb-3 font-bold'>Technical skills</p>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
          {skills.map((i) => (
            <div className='p-6 shadow-xl rounded-xl hover:scale-105' key={i[0]}>
              <div className='grid grid-cols-2 sm:gap-0 md:gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={i[1]} width='40' height='40' alt={`${i[0]}`} />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <p className='uppercase text-xs font-bold'>{i[0]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className='mt-5 mb-3 font-bold'>Soft skills</p>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
          {softskills.map((i) => (
              <div className='p-6 shadow-xl rounded-xl hover:scale-105' key={i[0]}>
                <div className='grid grid-cols-2 sm:gap-0 md:gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image src={i[1]} width='40' height='40' alt={`${i[0]}`} />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <p className='uppercase text-xs font-bold'>{i[0]}</p>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
