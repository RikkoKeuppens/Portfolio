import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import aboutProject from '../public/static/images/portfolio-about.jpg';
import rikkoKeuppens from '../public/assets/Rikko.jpg';


const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center pb-0'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About me
          </p>
          <h2 className='pt-4'>Who I am</h2>
        </div>
        <div className='col-span-2'>
          <p className='pb-2 text-gray-600 text-justify pr-4'>
            My name is Rikko Keuppens, a student Applied Computer Science at Thomas More University in Geel. I was born in 2001 and raised in Herenthout. As a future full stack developer, I am passionate about creating innovative and user-friendly software solutions that enhance people&apos;s lives. <br/><br/>
            One of my strengths is being a team player. I enjoy collaborating with others to find creative solutions to complex problems. I also consider myself a leader who can handle stressful situations with ease. In addition, I am a very flexible person who can adapt to changing circumstances and embrace new challenges. <br/><br/>
            Apart from my academic and professional pursuits, I am also a fitness enthusiast. I believe that a healthy body leads to a healthy mind, which is why I enjoy going to the gym regularly.
          </p>
          <div className='flex w-full'>
            <div className='w-1/2'>
              <p className='mt-5 mb-2 font-bold'>Contact details</p>
              <p className='text-gray-600'>
                +32 476 58 53 57
              </p>
              <p className=' text-gray-600'>
                rikko.keuppens@hotmail.com
              </p>
              <p className=' text-gray-600'>
                Markt 26/101</p>
              <p className=' text-gray-600'>
                2270 Herenthout
              </p>
              <p className='mt-5 mb-2 font-bold'>Experience</p>
              <p className=' text-gray-600'>
                Bachelor - Thomas More - 2020/2023
              </p>
              <p className=' text-gray-600'>
                Student job - Pension Architects - 2022
              </p>

              <p className=' text-gray-600'>
                Internship - dotNET lab - 2023
              </p>
            </div>
            <div className='w-1/2 flex flex-col justify-end'>
              <div id="face-button-box">
                <a className="face-button" href="/assets/Rikko_Keuppens_CV.pdf" rel="noopener noreferrer" target="_blank">
                  <div className="face-primary">
                    <span className="icon fa fa-cloud"></span>
                    Download CV
                  </div>
                  <div className="face-secondary">
                    <span className="icon fa fa-hdd-o"></span>
                    Size: 74 kb
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-3'>
          <Image src={rikkoKeuppens} alt='Rikko Keuppens'/>
        </div>
      </div>
    </div>
  );
};

export default About;
