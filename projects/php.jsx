import Image from 'next/image';
import React from 'react';
import dotnetlabImg from '../public/static/images/Projects/PHP/logo.png';
import MyCarouselPHP from "../utils/MyCarouselPHP";

const PHP = () => {
    function closeDiv(divId) {
        var div = document.getElementById(divId);
        if (div) {
            div.style.display = 'none';
            var newDiv = document.getElementById("projects");
            newDiv.scrollIntoView({ behavior: 'smooth' });
        }

    }

    return (
        <div className="text-justify">
            <p className="mb-2 pt-16 uppercase text-sm tracking-widest text-gray-600" >Assignment</p>
            <p>
                An advisory agency application created with Laravel and PHP, developed in collaboration with 5 other students. This project has provided me with a good understanding of what its like to work in a group, as well as working with a client.
            </p>
            <div className="sm:block md:flex pt-8 w-full">
                <div className="sm:w-full md:w-1/2 pr-4 mb-5">
                    <p className="mb-2 uppercase text-sm tracking-widest text-gray-600" >Implementation</p>
                    <p>
                        During the project, I took on a significant role in developing a major portion of the application. Specifically, I was responsible for implementing the functionalities related to the admin role, which involved creating and managing consultants and opportunities within the system. Additionally, I worked on the functionalities assigned to the business developer role, which included the ability to approve timesheets and create timesheets as a consultant. Through these tasks, I gained hands-on experience in building and integrating complex features that aligned with the project requirements.                    </p><p className="mb-2 pt-8 uppercase text-sm tracking-widest text-gray-600" >What did I learn</p>
                    <p>
                        What I learned from this project is the importance of teamwork. To achieve a fully completed project, teamwork and communication are essential. This was something I found lacking in this project as there was a lot of miscommunication among team members. It resulted in confusion and frustration, which could have been avoided with better communication. Overall, this project served as a great way to learn the fundamental principles of teamwork and communication, as well as the use of Laravel and PHP.            </p>

                </div>
                <div className="sm:w-full md:w-1/2 px-5">
                     <MyCarouselPHP/>
                </div>
            </div>
            <div className="mt-10">
                <button className='mx-1' onClick={() => closeDiv("PHP")}>
                    <p className='text-center px-2 py-1 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
                        Close
                    </p>
                </button>
            </div>
        </div>
    );
};

export default PHP;
