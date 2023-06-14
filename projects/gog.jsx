import Image from 'next/image';
import React from 'react';
import consoleImg from '../public/static/images/Projects/GOG/console.png';

const GOG = () => {
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
            <div className="md:flex sm:block pt-8 w-full text-justify">
                <div className="sm:w-full md:w-1/2 pr-4">
                    <p className="mb-2 pt-16 uppercase text-sm tracking-widest text-gray-600" >Assignment</p>
                    <p>
                        During my internship at dotNET lab, I was assigned a solo project aimed at honing my skills in applying the SOLID design principle. The project revolved around developing a console application in C# that adhered to the SOLID principles. The main objective was to recreate the widely recognized board game, Game of Goose. By undertaking this task, I had the opportunity to enhance my understanding and practical application of SOLID design principles in a real-world scenario.                    </p>
                    <p className="mb-2 pt-8 uppercase text-sm tracking-widest text-gray-600" >Implementation</p>
                    <p>
                        During the assignment I used Test-Driven Development. This helped me to check all de different special
                        squares in the game. I tried very hard to make the code single responsibility, one of the parts of SOLID.
                    </p>
                    <p className="mb-2 pt-8 uppercase text-sm tracking-widest text-gray-600" >What did I learn</p>
                    <p>
                        I learned a lot about SOLID. My seniors gave me a lot of instructions and tips to better my code. This was
                        a great and fun learning experience for me.
                    </p>
                </div>
                <div className="sm:w-full md:w-1/2 pl-4 pt-16">
                    <div className='w-1/2 mx-auto '>
                        <Image  src={consoleImg} alt='gog'/>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <button className='mx-1' onClick={() => closeDiv("GOG")}>
                    <p className='text-center px-2 py-1 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
                        Close
                    </p>
                </button>
            </div>
        </div>
    );
};

export default GOG;
