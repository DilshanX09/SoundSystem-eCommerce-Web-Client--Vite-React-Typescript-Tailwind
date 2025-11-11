import Slider from 'react-slick';
import MAudioLogo from '../assets/brand-logos/m-audio.png';
import MackieLogo from '../assets/brand-logos/mackie.png';
import OneODioLogo from '../assets/brand-logos/one-o-dio.png';
import RCFLogo from '../assets/brand-logos/rcf.png';
import ShureLogo from '../assets/brand-logos/shure.png';
import SoundkingLogo from '../assets/brand-logos/soundking.png';
import SamsoneLogo from '../assets/brand-logos/samson.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BrandsComponent = () => {
     const settings = {
          dots: false,
          infinite: true,
          speed: 8000,
          slidesToShow: 6,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1000,
          arrows: false,
          cssEase: "linear",
          pauseOnHover: false,
          responsive: [
               {
                    breakpoint: 1024,
                    settings: {
                         slidesToShow: 4,
                    }
               },
               {
                    breakpoint: 600,
                    settings: {
                         slidesToShow: 3,
                    }
               },
               {
                    breakpoint: 480,
                    settings: {
                         slidesToShow: 2,
                    }
               }
          ]
     };
     return (
          <>
               <div className="relative w-full py-10 font-inter-regular container mx-auto mt-10">
                    <h1 className="text-lg font-inter-medium uppercase text-center lg:text-left">OUR TRUSTED BRANDS</h1>
                    <Slider {...settings} className='w-full mt-5'>
                         <div className="flex items-center justify-center px-2">
                              <img src={MackieLogo} alt="Mackie" className="h-16 lg:h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                         </div>
                         <div className="flex items-center justify-center px-2">
                              <img src={MAudioLogo} alt="M-Audio" className="h-16 lg:h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                         </div>
                         <div className="flex items-center justify-center px-2">
                              <img src={OneODioLogo} alt="OneOdio" className="h-16 lg:h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                         </div>
                         <div className="flex items-center justify-center px-2">
                              <img src={RCFLogo} alt="RCF" className="h-16 lg:h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                         </div>
                         <div className="flex items-center justify-center px-2">
                              <img src={ShureLogo} alt="Shure" className="h-16 lg:h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                         </div>
                         <div className="flex items-center justify-center px-2">
                              <img src={SoundkingLogo} alt="Soundking" className="h-16 lg:h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                         </div>
                         <div className="flex items-center justify-center px-2">
                              <img src={SamsoneLogo} alt="Samson" className="h-16 lg:h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                         </div>
                    </Slider>
               </div>
          </>
     );
}
export default BrandsComponent;