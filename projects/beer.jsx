import Image from 'next/image';
import React from 'react';
import consoleImg from '../public/static/images/Projects/GOG/console.png';
import MyCarouselBeer from "../utils/MyCarouselBeer";

const BEER = () => {
    function closeDiv(divId) {
        var div = document.getElementById(divId);
        if (div) {
            div.style.display = 'none';
            var newDiv = document.getElementById("projects");
            newDiv.scrollIntoView({ behavior: 'smooth' });
        }

    }

    return (
        <div className="w-full text-justify">
            <div className=" pt-8 w-full">
                <p className="mb-2 pt-16 uppercase text-sm tracking-widest text-gray-600" >Assignment</p>
                <p>
                    During the summer of 2022, my friends and I decided to organize a friendly competition among ourselves. We wanted to keep track of our beer consumption throughout the summer, and I took it upon myself to develop a dedicated app for this purpose. Not only did I create and host the app, but I also added an entertaining hidden drinking game to enhance the overall experience.

                    The app served as a convenient tool for us to log and tally the number of beers we consumed individually, fostering a sense of friendly rivalry and camaraderie. Additionally, the inclusion of a hidden drinking game added an element of fun and surprise to our gatherings, making the entire experience more enjoyable.

                    Overall, this project allowed me to combine my programming skills with our shared passion for friendly competition and socializing, resulting in a customized app that enriched our summer activities and created lasting memories.
                </p>
            </div>
            <div className="sm:block md:flex w-full">
                <div className="sm:w-full md:w-1/2 pr-4">
                    <p className="mb-2 pt-8 uppercase text-sm tracking-widest text-gray-600" >Implementation</p>
                    <p>
                        I utilized the PHP skills I gained from a previous project to design and develop this application. Drawing upon my knowledge and experience, I created an intuitive and user-friendly interface for the app. Additionally, I leveraged my hosting capabilities and chose Combell as the platform to host and deploy the application.                    </p>
                    <p className="mb-2 pt-8 uppercase text-sm tracking-widest text-gray-600" >What did I learn</p>
                    <p>

                        While not every project may be a profound learning experience, I believe that the joy and creativity inherent in programming can be fulfilling on its own. This particular project didnt involve extensive new learning for me, but it provided an opportunity to explore my programming skills and indulge in the artistry of coding. Sometimes, the sheer enjoyment of problem-solving, creating something functional and engaging, or simply immersing oneself in the process is sufficient to derive satisfaction from a project.                    </p>
                </div>
                <div className="sm:w-full md:w-1/2 pl-4 pt-16">
                    <div className='w-1/2 mx-auto '>
                        <MyCarouselBeer/>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <button className='mx-1' onClick={() => closeDiv("BEER")}>
                    <p className='text-center px-2 py-1 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
                        Close
                    </p>
                </button>
            </div>
        </div>
    );
};

export default BEER;
