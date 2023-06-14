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
            <p className="mb-2 pt-16 uppercase text-sm tracking-widest text-gray-600" >Assignment</p>
            <p>
                This is a solo project for the course Angular. I had to create a movie database using an external API. In
                the project you can search any movie. U can go to the details and see the rating, actors, description, etc...
                I can add a movie to your watchlist and review it.
            </p>
            <div className="flex pt-8 w-full">
                <div className="w-1/2 pr-4">
                    <p className="mb-2 uppercase text-sm tracking-widest text-gray-600" >Implementation</p>
                    <p>
                        I used Angular for this project. I also used a JSON database to save the API Data.
                        For the external API, I used the movies database API. For my styling I used Tailwind.
                    </p>
                    <p className="mb-2 pt-8 uppercase text-sm tracking-widest text-gray-600" >What did I learn</p>
                    <p>
                        I learned a lot about Angular in this project. My knowledge was very limited so the project took a few days.

                    </p>
                </div>
                <div className="w-1/2 pl-4">
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
