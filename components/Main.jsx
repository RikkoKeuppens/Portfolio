import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import { BsYoutube, BsMedium } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import landingPageImg from '/public/static/images/landing-page.svg'

const Main = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'full-stack developer',
        'junior, eager to learn',
        'team player'
      ],
      startDelay: 300,
      typeSpeed: 200,
      backSpeed: 50,
      backDelay: 100,
      smartBackspace: true,
      showCursor: true,
      cursorChar: '|',
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div id='landingText'>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            Always ready for a new project
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&apos;m{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
              Rikko Keuppens
            </span>
          </h1>
          <h1 className='py-2 text-gray-700'>
            A <span ref={el}></span>
          </h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            This portfolio represents my journey as an IT student at Thomas More Geel, showcasing my skills and accomplishments during my graduation.
          </p>
          <div className='social-container social-main'>
            <Link
              href={'https://www.linkedin.com/in/rikko-keuppens-544830222/'}
              target={'_blank'}>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </Link>
            <Link href={'https://github.com/RikkoKeuppens'} target={'_blank'}>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </Link>
          </div>
        </div>
        <div id='programming' className='w-1/3 '>
          <Image className='ml-auto mr-auto ' src={landingPageImg} width='400' height='150' alt='programming'/>
        </div>
      </div>
    </div>
  );
};

export default Main;
