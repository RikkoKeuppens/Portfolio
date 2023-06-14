import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import moviesImg from '../public/static/images/Projects/Angular/search.png';
import detailsImg from '../public/static/images/Projects/Angular/Details.png';
import watchedImg from '../public/static/images/Projects/Angular/Watched.png';

import Image from "next/image";


const MyCarouselAngular = () => {
    return (
        <Carousel
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}>
            <div>
                <Image src={moviesImg} alt='graphs'/>
            </div>
            <div>
                <Image src={detailsImg} alt='graphs'/>
            </div>
            <div>
                <Image src={watchedImg} alt='graphs'/>
            </div>

        </Carousel>
    );
};

export default MyCarouselAngular;
