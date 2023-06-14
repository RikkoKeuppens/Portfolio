import Image from 'next/image';
import React from 'react';
import dotnetlabImg from '../public/static/images/Projects/PHP/logo.png';

const SW = () => {
    function closeDiv(divId) {
        var div = document.getElementById(divId);
        if (div) {
            div.style.display = 'none';
            var newDiv = document.getElementById("projects");
            newDiv.scrollIntoView({ behavior: 'smooth' });
        }

    }

    return (
        <div className="w-1/2">
            <p className="mb-2 pt-16 uppercase text-sm tracking-widest text-gray-600" >Assignment</p>
            <p>
                This is a solo project for the course DevOps. I had the choice between several projects. I chose to create
                a webscraper using Selenium.
            </p>
            <div className="flex pt-8 w-full">
                <div className="w-1/2 pr-4">
                    <p className="mb-2 uppercase text-sm tracking-widest text-gray-600" >Implementation</p>
                    <p>
                        For the project i chose the NewYork Times, Indeed and Youtube to scrape. I used Selenium to scrape them.
                        I also used github workflow for automatically updating my repo.
                    </p>
                </div>
                <div className="w-1/2 pl-4">
                    <p className="mb-2 uppercase text-sm tracking-widest text-gray-600" >Documents (all dutch)</p>
                    <p>Demo: <a className='text-blue-900 font-bold' target='_blank' rel="noreferrer" href="https://www.youtube.com/watch?v=Q6OC1NrEdJQ&ab_channel=RikkoKeuppens">Video</a></p>
                    <p>Case documentation: <a className="text-blue-900 font-bold" href="/static/images/Projects/Webscraper/Rikko_Keuppens_r0790832_2APPAI01_Webscraper%20(1).pdf" rel="noopener noreferrer" target="_blank">PDF</a></p>
                </div>
            </div>
            <p className="mb-2 pt-8 uppercase text-sm tracking-widest text-gray-600" >What did I learn</p>
            <p>
                I had never used Github workflows or Selenium. It was a good start for me to learn something very new.
            </p>
            <div className="mt-10">
                <button className='mx-1' onClick={() => closeDiv("SW")}>
                    <p className='text-center px-2 py-1 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
                        Close
                    </p>
                </button>
            </div>
        </div>
    );
};

export default SW;
