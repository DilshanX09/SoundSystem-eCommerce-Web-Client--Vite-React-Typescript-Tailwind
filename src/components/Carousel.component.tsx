import { useState, useEffect, useRef, type JSX } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import svgPaths from "../imports/svg-49uswhq1gl";
// import imgImage58 from "figma:asset/cc358233aa1cfb93317d7c914eecdac09ffbea6b.png";
import SpeackerBoxes from '../assets/images/Speacker-boxes.png';
import Bin from '../assets/images/Bin.png';
import Mixer from '../assets/images/Mixer.png';
import Moniters from '../assets/images/Moniters.png';
import Drawing from '../assets/images/Drawing.svg';
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import type { SlideData } from "../types/Slidebar.type";


const slides: SlideData[] = [
     {
          id: 1,
          title: "Custom Speaker Box Solutions",
          description: "Professional custom-built speaker enclosures for cars, vans, trucks, buses, and commercial vehicles. Perfectly fitted to your vehicle with premium sound quality. Transform your ride into a mobile concert hall.",
          image: Bin,
     },
     {
          id: 2,
          title: "Elevate Your Sound",
          description: "Professional-grade audio mixers with advanced channel control and superior sound quality. Whether you're producing music, hosting live events, or creating content, achieve the perfect mix every time.",
          image: Mixer,
     },
     {
          id: 3,
          title: "Power Your Performance",
          description: "Premium PA speakers delivering crystal-clear sound and powerful bass. Built for concerts, events, and professional audio installations. Experience unmatched clarity and room-filling sound.",
          image: SpeackerBoxes,
     },
     {
          id: 4,
          title: "Studio Precision Sound",
          description: "Professional studio monitors engineered for accurate sound reproduction. Perfect for music production, mixing, and mastering. Hear every detail with flat-response clarity.",
          image: Moniters,
     },
];

const CarouselComponent = (): JSX.Element => {

     const [currentSlide, setCurrentSlide] = useState(0);
     const [isAnimating, setIsAnimating] = useState(false);
     const isAnimatingRef = useRef<boolean>(false);
     const lastKeyAt = useRef<number>(0);
     const slidesContainerRef = useRef<HTMLDivElement | null>(null);

     // keep ref in sync with state for handlers
     useEffect(() => { isAnimatingRef.current = isAnimating; }, [isAnimating]);

     const nextSlide = useRef<() => void | null>(null);
     const prevSlide = useRef<() => void | null>(null);

     // implement slide functions using refs so they are stable for event handlers
     nextSlide.current = () => {
          if (isAnimatingRef.current) return;
          isAnimatingRef.current = true;
          setIsAnimating(true);
          setCurrentSlide((prev) => (prev + 1) % slides.length);
          // clear will happen on transitionend listener
     };

     prevSlide.current = () => {
          if (isAnimatingRef.current) return;
          isAnimatingRef.current = true;
          setIsAnimating(true);
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
          // clear will happen on transitionend listener
     };

     useEffect(() => {
          const handleKeyDown = (e: KeyboardEvent) => {
               if (e.repeat) return;
               const now = Date.now();
               if (now - lastKeyAt.current < 450) return;
               if (isAnimatingRef.current) return;

               if (e.key === "ArrowLeft") {
                    if (prevSlide.current) prevSlide.current();
                    lastKeyAt.current = now;
               } else if (e.key === "ArrowRight") {
                    if (nextSlide.current) nextSlide.current();
                    lastKeyAt.current = now;
               }
          };

          window.addEventListener("keydown", handleKeyDown);
          return () => window.removeEventListener("keydown", handleKeyDown);
     }, []);

     // Listen for transitionend on the slides container to clear animating state.
     useEffect(() => {
          const el = slidesContainerRef.current;
          if (!el) return;
          const onTransitionEnd = (e: TransitionEvent) => {
               // look for transform or opacity transitions
               if (isAnimatingRef.current && (e.propertyName === 'transform' || e.propertyName === 'opacity' || e.propertyName === 'all')) {
                    isAnimatingRef.current = false;
                    setIsAnimating(false);
               }
          };
          el.addEventListener('transitionend', onTransitionEnd as EventListener);
          return () => el.removeEventListener('transitionend', onTransitionEnd as EventListener);
     }, []);

     return (
          <div className="relative w-full h-screen min-h-[550px] bg-[#212121] overflow-hidden">
               {/* Carousel Container */}
               <div className="relative w-full h-full flex items-center justify-center">
                    {/* Content Section */}
                    <div className="relative w-full h-full max-w-[1440px] mx-auto">
                         <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-between px-6 py-12 lg:py-0">
                              {/* Left Content */}
                              <div className="w-full lg:w-1/2 z-10 space-y-6 lg:space-y-8 text-center lg:text-left">
                                   {/* Title with decorative line */}
                                   <div className="space-y-4">

                                        <h1 className="text-white text-3xl md:text-3xl flex items-center gap-3 font-inter-bold lg:text-[40px] max-w-full mx-auto lg:mx-0">
                                             <div className="h-8 w-1 bg-white" /> <p>{slides[currentSlide].title}</p>
                                        </h1>

                                        <img src={Drawing} />

                                   </div>

                                   {/* Description */}
                                   <p className="text-[#b3adad] font-inter-regular md:text-lg max-w-full mx-auto lg:mx-0 leading-relaxed">
                                        {slides[currentSlide].description}
                                   </p>

                                   {/* Explore Button */}
                                   <button className="inline-flex items-center gap-2 text-white text-sm hover:gap-3 transition-all duration-300">
                                        <span className="font-inter-regular">Explore</span>
                                        <BiChevronRight className="w-4 h-4" />
                                   </button>

                                   {/* Explore Button */}
                                   <button className="inline-flex ml-3 items-center gap-2 text-white text-sm hover:gap-3 transition-all duration-300">
                                        <span className="font-inter-regular">Shop now</span>
                                        <BiChevronRight className="w-4 h-4" />
                                   </button>

                                   {/* Navigation Arrows */}
                                   <div className="flex items-center gap-3 justify-center lg:justify-start pt-4">
                                        <button
                                             onClick={() => prevSlide.current && prevSlide.current()}
                                             disabled={isAnimating}
                                             className="w-9 h-9 rounded-full bg-[#3A3A3A] flex items-center justify-center hover:bg-[#4A4A4A] transition-colors disabled:opacity-50"
                                             aria-label="Previous slide"
                                        >
                                             <BiChevronLeft className="w-5 h-5 text-white" />
                                        </button>
                                        <button
                                             onClick={() => nextSlide.current && nextSlide.current()}
                                             disabled={isAnimating}
                                             className="w-9 h-9 rounded-full bg-[#3A3A3A] flex items-center justify-center hover:bg-[#4A4A4A] transition-colors disabled:opacity-50"
                                             aria-label="Next slide"
                                        >
                                             <BiChevronRight className="w-5 h-5 text-white" />
                                        </button>
                                   </div>

                                   {/* Slide Indicators */}
                                   <div className="flex items-center gap-2 justify-center lg:justify-start">
                                        {slides.map((_, index) => (
                                             <button
                                                  key={index}
                                                  onClick={() => {
                                                       if (!isAnimating) {
                                                            setIsAnimating(true);
                                                            setCurrentSlide(index);
                                                            setTimeout(() => setIsAnimating(false), 600);
                                                       }
                                                  }}
                                                  className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide
                                                       ? "w-8 bg-white"
                                                       : "w-2 bg-[#3A3A3A] hover:bg-[#4A4A4A]"
                                                       }`}
                                                  aria-label={`Go to slide ${index + 1}`}
                                             />
                                        ))}
                                   </div>
                              </div>

                              {/* Right Image Section with 3D Effect */}
                              <div className="w-full lg:w-1/2 h-[500px] lg:h-full flex items-center justify-center perspective-[2000px] mt-8 lg:mt-0">
                                   <div ref={slidesContainerRef} className="relative w-full h-full max-w-[600px] lg:max-w-none">
                                        {slides.map((slide, index) => {
                                             const offset = index - currentSlide;
                                             const isActive = index === currentSlide;

                                             return (
                                                  <div
                                                       key={slide.id}
                                                       className="absolute inset-0 transition-all duration-600 ease-out"
                                                       style={{
                                                            transform: `
                          translateX(${offset * 100}%)
                          translateZ(${isActive ? "50px" : "0px"})
                          rotateY(${offset * -15}deg)
                          scale(${isActive ? 1.05 : 0.9})
                        `,
                                                            opacity: isActive ? 1 : 0.3,
                                                            zIndex: isActive ? 10 : 1,
                                                            transformStyle: "preserve-3d",
                                                            pointerEvents: isActive ? "auto" : "none",
                                                       }}
                                                  >
                                                       <div className="w-full h-full flex items-center justify-center">
                                                            <img
                                                                 src={slide.image}
                                                                 alt={slide.title}
                                                                 className="w-full h-full object-contain drop-shadow-2xl"
                                                                 style={{
                                                                      filter: isActive
                                                                           ? "drop-shadow(0 25px 50px rgba(0,0,0,0.5))"
                                                                           : "none",
                                                                 }}
                                                            />
                                                       </div>
                                                  </div>
                                             );
                                        })}
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default CarouselComponent;