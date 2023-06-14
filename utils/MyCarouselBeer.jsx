import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import listImg from '../public/static/images/Projects/Beer/List.png';
import adjeImg from '../public/static/images/Projects/Beer/adje.png';
import prono from '../public/static/images/Projects/Beer/prono.png';
import rules from '../public/static/images/Projects/Beer/rules.png';

import Image from "next/image";


const MyCarouselBeer = () => {
    return (
        <Carousel
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}>
            <div>
                <Image src={listImg} alt='list'/>
            </div>
            <div>
                <Image src={adjeImg} alt='adje'/>
            </div>
            <div>
                <Image src={prono} alt='prono'/>
            </div>
            <div>
                <Image src={rules} alt='rules'/>
            </div>
        </Carousel>
    );
};

export default MyCarouselBeer;
