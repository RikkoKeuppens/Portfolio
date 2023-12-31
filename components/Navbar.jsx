import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BsYoutube, BsMedium } from 'react-icons/bs';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import rikkoLogo from '../public/assets/rk-logo.png';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');

  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === '/disney' ||
      router.asPath === '/netflix' ||
      router.asPath === '/amazon'
    ) {
      setNavBg('#ecf0f3');
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleScroll = () => {
    if (window.scrollY >= 90) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = targetElement.offsetTop - 50;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const linkData = [
    ['Home', '/'],
    ['About', '/#about'],
    ['Skills', '/#skills'],
    ['Internship', '/#internship'],
    ['Projects', '/#projects'],
    ['Contact', '/#contact'],
  ];

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100]'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          <Image
            src={rikkoLogo}
            alt='Rikko Keuppens'
            width='100'
            height='50'
          />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            {linkData.map((i) => (
                <Link href={i[1]} key={i[0]}>
                  <li
                      className='mx-5 text-sm uppercase'
                      onClick={(e) => handleLinkClick(e, i[0].toLowerCase())}>
                    {i[0]}
                  </li>
                </Link>
            ))}
          </ul>
          <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <Image
                  src={rikkoLogo}
                  alt='Rikko Keuppens'
                  width='100'
                  height='50'
                />
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                Always ready for a new project
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              {linkData.map((i) => (
                <Link href={i[1]} key={i[0]}>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    {i[0]}
                  </li>
                </Link>
              ))}
            </ul>
            <div className='pt-24'>
              <p className='uppercase tracking-widest text-[#5651e5]'>
                Let&apos;s connect
              </p>
              <div className='social-container social-navbar w-1/2 ml-auto mr-auto'>
                <Link
                  href={'https://www.linkedin.com/in/rikko-keuppens-544830222/'}
                  target={'_blank'}>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </Link>
                <Link href={'https://github.com/RikkoKeuppens'} target={'_blank'}>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
