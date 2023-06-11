import Image from 'next/image';
import React from 'react';
import dotnetlabImg from '../public/static/images/Projects/CAD/dotnetlab.png';

const Cad = () => {
    return (
        <div id="cad-portfolio">
            <h3 className="portfolio-title"><span>Candidate assesment dashboard</span></h3>
            <div className="flex-cad">
                <div className="dotnetlab">
                    <Image src={dotnetlabImg} alt='dotnetlab' />
                </div>
                <p className="cad-intro">
                    In March 2023, I began a 13-week internship at dotNET lab, a software consultancy company located in
                    Heultje Westerlo.
                    dotNET lab specializes in educating junior software engineers, making it an ideal environment for me
                    to enhance my skills
                    and knowledge in this field.
                </p>
            </div>
        </div>
    );
};

export default Cad;
