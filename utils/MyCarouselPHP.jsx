import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import oneImg from '../public/static/images/Projects/PHP/1.png';
import twoImg from '../public/static/images/Projects/PHP/2.png';
import threeImg from '../public/static/images/Projects/PHP/3.png';
import fourImg from '../public/static/images/Projects/PHP/4.png';
import fiveImg from '../public/static/images/Projects/PHP/5.png';

import Image from "next/image";


const MyCarouselPHP = () => {
    return (
        <Carousel
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}>
            <div>
                <Image src={oneImg} alt=''/>
            </div>
            <div>
                <Image src={twoImg} alt=''/>
            </div>
            <div>
                <Image src={threeImg} alt=''/>
            </div>
            <div>
                <Image src={fourImg} alt=''/>
            </div>
            <div>
                <Image src={fiveImg} alt=''/>
            </div>

        </Carousel>
    );
};

export default MyCarouselPHP;
