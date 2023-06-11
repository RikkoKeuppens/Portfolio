import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import aboutProject from '../public/static/images/portfolio-about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center pb-0'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I am</h2>
          <p className='py-2 text-gray-600'>
            My name is Rikko Keuppens, a student Applied Computer Science at Thomas More University in Geel. I was born in 2001 and raised in Herenthout. As a future full stack developer, I am passionate about creating innovative and user-friendly software solutions that enhance people's lives. <br/><br/>
            One of my strengths is being a team player. I enjoy collaborating with others to find creative solutions to complex problems. I also consider myself a leader who can handle stressful situations with ease. In addition, I am a very flexible person who can adapt to changing circumstances and embrace new challenges. <br/><br/>
            Apart from my academic and professional pursuits, I am also a fitness enthusiast. I believe that a healthy body leads to a healthy mind, which is why I enjoy going to the gym regularly.
          </p>
          <div id="face-button-box">
            <a className="face-button" href="/assets/Rikko_Keuppens_CV.pdf" download>
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
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-3'>

        </div>
      </div>
    </div>
  );
};

export default About;
