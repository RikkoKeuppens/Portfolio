import Image from 'next/image';
import React from 'react';
import dotnetlabImg from '../public/static/images/Projects/PHP/logo.png';

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
        <div>
            <p className="mb-2 pt-16 uppercase text-sm tracking-widest text-gray-600" >Assignment</p>
            <p>
                An advisory agency application created with Laravel and PHP, developed in collaboration with 5 other students. This project has provided me with a good understanding of what its like to work in a group, as well as working with a client.
            </p>
            <div className="flex pt-8 w-full">
                <div className="w-1/2">
                    <p className="mb-2 uppercase text-sm tracking-widest text-gray-600" >Implementation</p>
                    <p>
                        During the project, I took a created a big part of the application. The functionalities of the admin who can create consultants and opportunities was created by me. The functionalities of the business developer who can approve timesheets and creating the timesheets as a consultant.
                    </p>
                </div>
                <div className="w-1/2">
                     <Image className="mx-auto" src={dotnetlabImg} alt="php logo"/>
                </div>
            </div>
            <p className="mb-2 pt-8 uppercase text-sm tracking-widest text-gray-600" >What did I learn</p>
            <p>
                What I learned from this project is the importance of teamwork. To achieve a fully completed project, teamwork and communication are essential. This was something I found lacking in this project as there was a lot of miscommunication among team members. It resulted in confusion and frustration, which could have been avoided with better communication. Overall, this project served as a great way to learn the fundamental principles of teamwork and communication, as well as the use of Laravel and PHP.            </p>
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
