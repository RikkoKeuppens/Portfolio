import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import loginImg from '../public/static/images/Projects/ABMS/inlogpagina.png';
import incidentsImg from '../public/static/images/Projects/ABMS/incidents.png';
import allEventsImg from '../public/static/images/Projects/ABMS/allEvents.png';
import microphonesImg from '../public/static/images/Projects/ABMS/microphones.png';
import Image from "next/image";


const MyCarouselABMS = () => {
    return (
        <Carousel
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}>
            <div>
                <Image src={loginImg} alt='login'/>
            </div>
            <div>
                <Image src={incidentsImg} alt='incidents'/>
            </div>
            <div>
                <Image src={allEventsImg} alt='allEvents'/>
            </div>
            <div>
                <Image src={microphonesImg} alt='microphones'/>
            </div>
        </Carousel>
    );
};

export default MyCarouselABMS;
