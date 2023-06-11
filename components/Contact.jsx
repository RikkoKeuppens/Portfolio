import Image from 'next/image';
import React from 'react';
import { BsYoutube, BsMedium } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import contactImg from '../public/static/images/contact.jpg';
import Link from 'next/link';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left side */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full'>
              <div>
                <Image
                  className='rounded-xl'
                  src={contactImg}
                  alt='Contact Rikko'
                />
              </div>
              <div>
                <h2 className='py-2 text-center'>Full-Stack Developer</h2>
              </div>
              <div>
                <p className='uppercase pt-8 pb-4 text-center'>Connect with me</p>
                <div className='w-full'>
                  <div className='w-1/2 mx-auto flex justify-around'>
                    <Link href={'https://www.linkedin.com/in/rafalazar1005/'} target={'_blank'}>
                      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedinIn />
                      </div>
                    </Link>
                    <Link href={'https://github.com/rafalazar'} target={'_blank'}>
                      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right side */}

          <div className='col-span-3 w-full h-auto shadow-xl rounded-xl lg:p-4'>
            <div className='p-4'>
              <form name='formContact' action='https://formsubmit.co/rikko.keuppens@hotmail.com' method='POST'>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2' htmlFor=''>
                      Name
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name'
                      required
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2' htmlFor=''>
                      Phone Number
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='phoneNumber'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2' htmlFor=''>
                    Email
                  </label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                    required
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2' htmlFor=''>
                    Subject
                  </label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                    required
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2' htmlFor=''>
                    Message
                  </label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300 resize-none'
                    rows='10'
                    name='message'
                    required
                  ></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
