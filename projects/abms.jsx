import Image from 'next/image';
import React from 'react';
import dotnetlabImg from '../public/static/images/Projects/CAD/dotnetlab.png';
import MyCarouselABMS from "../utils/MyCarouselABMS";

const ABMS = () => {
    function closeDiv(divId) {

        var div = document.getElementById(divId);
        if (div) {
            div.style.display = 'none';
            var newDiv = document.getElementById("projects");
            newDiv.scrollIntoView({ behavior: 'smooth' });
        }

    }

    return (
       <div>
           <p className="mb-2 uppercase text-sm tracking-widest text-gray-600" >Assignment</p>
           <p className='pb-8'>Project 4.0 stands as a significant undertaking. I collaborated with a team of five fellow students on this endeavor. Our collective goal was to develop an audio-based monitoring system for Mediaan, a renowned company. The primary objective of this project was to leverage AI technology to detect mood swings based on audio cues. Once a mood swing was detected, our application would promptly dispatch security personnel to the identified location.
               Within our team, I partnered closely with another student to concentrate on the development of the application itself. Simultaneously, two other team members specialized in the AI aspect, diligently crafting the necessary algorithms. Additionally, we had the expertise of two students who focused on ensuring efficient hosting and deployment of the application.
           </p>
           <div className='w-full sm:block md:flex'>
               <div className='w-1/2 pr-5'>
                   <p className="uppercase text-sm tracking-widest text-gray-600 mb-2 pt-8" >Implementation</p>
                   <p>For the development of our application, we utilized Vue.js for the frontend, .NET for the backend API, and SQL for our database management. The AI team employed Python for the detection algorithms. As for hosting, we opted for Azure to ensure seamless deployment and availability of our application.</p>
                   <p className="uppercase text-sm tracking-widest text-gray-600 mb-2 pt-8" >Documents (all dutch)</p>
                   <p>Promotional video: <a className="text-blue-900 font-bold" target='_blank' href="https://www.youtube.com/watch?v=RVwViZ1Nwfk&ab_channel=Joons" rel="noreferrer">Video</a></p>
                   <p>Installation manual: <a className="text-blue-900 font-bold" href="/static/images/Projects/ABMS/TeamC2_Installation_Manual.pdf" rel="noopener noreferrer" target="_blank">PDF</a></p>
                   <p>General report: <a className="text-blue-900 font-bold" href="/static/images/Projects/ABMS/algemeen%20rapport.pdf" rel="noopener noreferrer" target="_blank">PDF</a></p>

               </div>
               <div className='w-1/2 pt-8 '>
                   <MyCarouselABMS/>
               </div>
           </div>
           <p className="mt-8 mb-2 uppercase text-sm tracking-widest text-gray-600" >What did I Learn</p>
           <p>Throughout the project, I acquired a wealth of technical skills and knowledge. Vue.js was entirely new to me, but I immersed myself in learning it during the development process. My proficiency in dotnet also significantly improved as I worked on the project. Additionally, I had the opportunity to refresh my Python skills while providing assistance to the AI students.
               Moreover, I gained invaluable insights into the intricacies of planning and task management within a group setting. I discovered that having six team members does not necessarily equate to six times the productivity. This experience highlighted the importance of effective coordination and collaboration to ensure optimal outcomes.
           </p>
            <div className="mt-10">
                <button className='mx-1' onClick={() => closeDiv("CBMS")}>
                    <p className='text-center px-2 py-1 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
                        Close
                    </p>
                </button>
            </div>
       </div>
    );
};

export default ABMS;
