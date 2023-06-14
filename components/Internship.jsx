import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import cadImg from '../public/static/images/Projects/CAD/dotnetlab.png';
import MyCarousel from "../utils/MyCarousel";


const Internship = () => {
    return (
        <div id='internship' className='w-full p-2 pb-0'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 text-justify'>
                <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5] mt-10'>
                    Internship
                </p>
                <h2 className='pt-4 '>Candidate Assessment Dashboard</h2>
                </div>
                <div className='col-span-3 mb-5'>
                    <p className="uppercase text-sm tracking-widest text-gray-600 pt-4" >My internship company</p>
                    <div className='w-full sm:block md:flex pt-2'>
                        <p className='sm:w-ful md:w-1/2 pr-4 pt-2'>
                            In March 2023, I began a 13-week internship at dotNET lab, a software consultancy company located in Heultje Westerlo.
                            dotNET lab specializes in educating junior software engineers, making it an ideal environment for me to enhance my skills
                            and knowledge in this field.
                        </p>
                        <div className='ml-auto mr-auto'>
                            <Image src={cadImg} alt='dotnetlab'/>
                        </div>
                    </div>
                </div>
                <div className='col-span-3'>
                    <p className="uppercase text-sm tracking-widest text-gray-600" >The application</p>
                    <div className='sm:block md:flex'>
                        <div className='sm:w-ful md:w-1/2 mt-2 mr-5 pl-0 p-2'><MyCarousel /></div>
                        <div className='sm:w-ful md:w-1/2 mt-2 md:ml-5 pr-0 md:p-2 pb-5'>
                            <p>During my internship, I developed an application specifically designed for the recruitment department. The objective was to
                                create a platform that assists recruiters in efficiently managing and evaluating job applicants. The application enables
                                recruiters to send customized emails to candidates, including a link to access a comprehensive technical and personality test.
                                It also provides an interface to review candidate results, facilitating informed decision-making. Additionally, the
                                application offers report generation capabilities for analyzing and comparing candidate performance.In the project, I utilized Angular and .NET Core 6 to develop the application. Angular was used for creating a dynamic and responsive frontend interface, while .NET Core 6 served as the backend framework for building the API. The application was hosted on the Azure platform, ensuring reliable deployment and availability. To guarantee security, various Azure services and features were employed, such as Azure Active Directory for authentication and authorization.</p>
                        </div>
                    </div>
                </div>
                <div className='col-span-3 mb-5 sm:pt-4 md:pt-0'>
                    <p className="uppercase text-sm tracking-widest text-gray-600" >Documents (all dutch)</p>
                    <div className='w-full pt-2'>
                        <p>Plan van aanpak: <a className='text-blue-900 font-bold' target='_blank' rel="noreferrer" href="https://www.youtube.com/watch?v=hHl5VUFVeuE&ab_channel=RikkoKeuppens">Video</a></p>
                        <p>Realisatie verslag: <a className="text-blue-900 font-bold" href="/assets/Realisatieverslag.pdf" rel="noopener noreferrer" target="_blank">PDF</a></p>
                        <p>Functionele analyse: <a className="text-blue-900 font-bold" href="/assets/Functionele%20Analyse.pdf" rel="noopener noreferrer" target="_blank">PDF</a></p>
                        <p>Reflectie verslag: <a className="text-blue-900 font-bold" href="/assets/Reflectie.pdf" rel="noopener noreferrer" target="_blank">PDF</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Internship;
