import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import listImg from '../public/static/images/Projects/CAD/candidate-list.png';
import mailImg from '../public/static/images/Projects/CAD/mail-screen.png';
import settingsImg from '../public/static/images/Projects/CAD/Settings.png';
import graphImg from '../public/static/images/Projects/CAD/CAD.png';
import detailsImg from '../public/static/images/Projects/CAD/candidate-details.png';
import belbinImg from '../public/static/images/Projects/CAD/Belbin.png';
import ownResultImg from '../public/static/images/Projects/CAD/own-result.png';
import Image from "next/image";


const MyCarousel = () => {
    return (
        <Carousel
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}>
            <div>
                <Image src={graphImg} alt='graphs'/>
            </div>
            <div>
                <Image src={mailImg} alt='mail'/>
            </div>
            <div>
                <Image src={listImg} alt='list'/>
            </div>
            <div>
                <Image src={settingsImg} alt='settings'/>
            </div>
            <div>
                <Image src={detailsImg} alt='details'/>
            </div>
            <div>
                <Image src={belbinImg} alt='belbin test'/>
            </div>
            <div>
                <Image src={ownResultImg} alt='own result'/>
            </div>
        </Carousel>
    );
};

export default MyCarousel;
