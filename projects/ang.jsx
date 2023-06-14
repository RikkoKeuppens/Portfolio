import Image from 'next/image';
import React from 'react';
import dotnetlabImg from '../public/static/images/Projects/PHP/logo.png';
import MyCarouselAngular from "../utils/MyCarouselAngular";

const ANG = () => {
    function closeDiv(divId) {
        var div = document.getElementById(divId);
        if (div) {
            div.style.display = 'none';
            var newDiv = document.getElementById("projects");
            newDiv.scrollIntoView({ behavior: 'smooth' });
        }

    }

    return (
        <div className="w-full">
            <div className="sm:block md:flex pt-16 w-full">
                <div className="sm:w-full md:w-1/2 pr-4 mb-3 text-justify">
                    <p className="mb-2 uppercase text-sm tracking-widest text-gray-600" >Assignment</p>
                    <p>
                        This project was an individual undertaking for the Angular course. Its objective was to develop a movie database utilizing an external API. The application allows users to search for any movie of their choice and explore its details, including ratings, actors, descriptions, and more. Additionally, users have the ability to add movies to their watchlist and provide reviews. The project was assigned by the esteemed organization, dotNET lab.
                    </p>
                    <p className="mb-2 pt-8 uppercase text-sm tracking-widest text-gray-600" >Implementation</p>
                    <p>

                        For this project, I utilized Angular as the framework to develop the application. To store and manage the API data, I employed a JSON database. The external API used in this project was the movies database API, which provided the necessary movie information. As for the styling, I opted for Tailwind, a popular CSS framework, to create the desired visual design and layout.
                    </p>
                    <p className="mb-2 pt-8 uppercase text-sm tracking-widest text-gray-600" >What did I learn</p>
                    <p>
                        During this project, I had the opportunity to significantly enhance my knowledge of Angular. Since my familiarity with the framework was limited, I dedicated several days to grasp its concepts and implement them effectively. The learning process was intensive, but it allowed me to gain valuable experience and skills in Angular development. Overall, this project served as a valuable learning experience and helped me expand my proficiency in Angular.                    </p>
                </div>
                <div className="sm:w-full md:w-1/2 ml-4">
                    <MyCarouselAngular/>
                </div>
            </div>
            <div className="mt-10">
                <button className='mx-1' onClick={() => closeDiv("ANG")}>
                    <p className='text-center px-2 py-1 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
                        Close
                    </p>
                </button>
            </div>
        </div>
    );
};

export default ANG;
