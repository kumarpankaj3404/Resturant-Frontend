import React from 'react'
import { aboutUsSlides } from '../utils/constants'
import { Carousel } from 'primereact/carousel'
// The required CSS imports are now correctly placed
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-blue/theme.css'; 
import 'primeicons/primeicons.css';
import '../assets/css/about.css';


const About = () => {
    const [interval, setAutoplayInterval] = React.useState(3000); 
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const slideTemplate = (items) => {
        return (
            <div className='md:flex md:justify-around md:px-4  md:items-center h-full'> 
                <div className='md:w-96 md:p-4'> {/* Added p-4 for internal padding */}
                    <h1 className='font-bold text-2xl'>{items.title}</h1>
                    <p className='font-thin font-desc text-md'>{items.content}</p>
                </div>
                <div>
                    <img 
                        src={items.image} 
                        alt={items.alt} 
                        className='md:h-[60svh] md:w-[40svw] rounded-lg md:object-cover shadow-xl'
                    />
                </div>
            </div>
        );
    }

    const carouselProps = {
        value: aboutUsSlides,
        itemTemplate: slideTemplate,
        numVisible: 1,
        numScroll: 1,
        autoplayInterval: interval, 
        circular: true,
        showIndicators: true, 
        showNavigators: true,
        responsiveOptions: responsiveOptions
    };

    const mouseEnter = () => {
        setAutoplayInterval(0);
    }
    const mouseLeave = () => {
        setAutoplayInterval(3000);
    }

  return (
    <div 
        onMouseEnter={mouseEnter} 
        onMouseLeave={mouseLeave} 
        className='lg:mx-20 lg:my-14 md:mx-6 md:my-10 sm:mx-4 sm:my-6  ' 
    >
        <Carousel {...carouselProps}  />
    </div>
  )
}

export default About;