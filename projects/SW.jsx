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
        <div className="w-2/3 text-justify">
            <p className="mb-2 pt-16 uppercase text-sm tracking-widest text-gray-600" >Assignment</p>
            <p>
                As part of my DevOps course, I embarked on a solo project that allowed me to explore different areas of interest. Among the project options available, I decided to delve into the world of web scraping by utilizing Selenium. This technology provided me with the means to extract data from websites efficiently. Throughout the project, I gained valuable insights into the process of web scraping and acquired practical experience in leveraging Selenium for this purpose. This endeavor served as an opportunity for me to expand my skill set and deepen my understanding of DevOps principles.
            </p>
                <div className="sm:w-full md:w-1/2 pr-4">
                    <p className="mb-2 uppercase text-sm tracking-widest text-gray-600 pt-8" >Implementation</p>
                    <p>
                        For my project, I selected prominent platforms such as the New York Times, Indeed, and YouTube as the targets for web scraping. Leveraging the power of Selenium, I successfully extracted valuable data from these websites. Selenium provided the necessary tools and capabilities to navigate the pages, interact with elements, and scrape the desired information effectively.

                        In addition to web scraping, I implemented GitHub workflows as part of my DevOps practices. These workflows automated the process of updating my repository, ensuring that any changes or updates to the scraped data were seamlessly integrated. By leveraging GitHub workflows, I enhanced the efficiency and reliability of my projects development and maintenance.
                    </p>
                </div>
                <div className="sm:w-full md:w-1/2 pl-4">
                    <p className="mb-2 uppercase text-sm tracking-widest text-gray-600 pt-8" >Documents (all dutch)</p>
                    <p>Demo: <a className='text-blue-900 font-bold' target='_blank' rel="noreferrer" href="https://www.youtube.com/watch?v=Q6OC1NrEdJQ&ab_channel=RikkoKeuppens">Video</a></p>
                    <p>Case documentation: <a className="text-blue-900 font-bold" href="/static/images/Projects/Webscraper/Rikko_Keuppens_r0790832_2APPAI01_Webscraper%20(1).pdf" rel="noopener noreferrer" target="_blank">PDF</a></p>
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
