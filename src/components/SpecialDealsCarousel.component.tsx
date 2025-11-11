import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import type { ProductUI } from '../types/Product.type';
import SingleSpeacker from '../assets/images/Single.png';
import { IoIosStar } from 'react-icons/io';

const SpecialDealsCarouselComponent = ({ products = [] }: {products?: ProductUI[]}) => {

     const [currentIndex, setCurrentIndex] = useState(0);
     const [isTransitioning, setIsTransitioning] = useState(false);

     const specialDeals: ProductUI[] = products.length > 0 ? products : [
          { id: '1', name: 'EVENT-18A', description: '4000W ACTIVE 18" PROFESSIONAL HIGH POWER SUBWOOFER', price: 80000, rating: 4.9, reviews: 112, category: 'subwoofers', stock: 'in_stock', condition: 'new', image: SingleSpeacker },
          { id: '2', name: 'J212', description: 'wo-way passive loudspeaker from J series with power output 200 W/8 Ohm for stage applications', price: 15000, rating: 4.9, reviews: 112, category: 'speakers', stock: 'in_stock', condition: 'new', image: SingleSpeacker },
          { id: '3', name: 'ART 910-AX', description: '2100W PROFESSIONAL ACTIVE BLUETOOTH® SPEAKER', price: 87000, rating: 4.9, reviews: 112, category: 'speakers', stock: 'in_stock', condition: 'new', image: SingleSpeacker },
          { id: '4', name: 'PRO-1200', description: 'PROFESSIONAL AUDIO MONITOR SYSTEM', price: 65000, rating: 4.8, reviews: 98, category: 'monitors', stock: 'in_stock', condition: 'new', image: SingleSpeacker },
          { id: '5', name: 'STAGE-5000', description: 'STAGE AMPLIFIER PROFESSIONAL SERIES', price: 120000, rating: 4.9, reviews: 145, category: 'amplifiers', stock: 'in_stock', condition: 'new', image: SingleSpeacker },
     ];

     const itemsPerView = 2;
     const maxIndex = Math.max(0, specialDeals.length - itemsPerView);

     const handlePrev = () => {
          if (isTransitioning) return;
          setIsTransitioning(true);
          setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
          setTimeout(() => setIsTransitioning(false), 500);
     };

     const handleNext = () => {
          if (isTransitioning) return;
          setIsTransitioning(true);
          setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
          setTimeout(() => setIsTransitioning(false), 500);
     };

     const visibleProducts = specialDeals.slice(
          currentIndex,
          currentIndex + itemsPerView
     );

     return (
          <section className="py-12">
               
               <div className="container mx-auto px-4 lg:px-8 mb-8">
                    <h1 className="text-lg font-inter-medium uppercase my-8">Special Deals</h1>
               </div>

               <div className="relative bg-[#1a1a1a] w-full">

                    <button
                         onClick={handlePrev}
                         disabled={isTransitioning}
                         className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-black/70 text-white transition-all hover:bg-black hover:scale-110 disabled:opacity-50"
                         aria-label="Previous products"
                    >
                         <FiChevronLeft className="text-4xl" />
                    </button>

                    <button
                         onClick={handleNext}
                         disabled={isTransitioning}
                         className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-black/70 text-white transition-all hover:bg-black hover:scale-110 disabled:opacity-50"
                         aria-label="Next products"
                    >
                         <FiChevronRight className="text-4xl" />
                    </button>

                    <div className="container mx-auto px-4 lg:px-8">
                         <div
                              className={`grid grid-cols-1 md:grid-cols-2 gap-8 py-12 transition-all duration-500 ease-out ${isTransitioning ? 'opacity-70 scale-98' : 'opacity-100 scale-100'
                                   }`}
                         >
                              {visibleProducts.map((product) => (
                                   <div
                                        key={product.id}
                                        className="flex flex-col md:flex-row items-center gap-6 text-white"
                                   >
                                        <div className="flex-shrink-0 w-full md:w-2/5 flex items-center justify-center">
                                             <div className="bg-[#2a2a2a] rounded-lg p-6 aspect-square flex items-center justify-center w-full">
                                                  <img
                                                       src={product.image}
                                                       alt={product.name}
                                                       className="max-h-full max-w-full object-contain"
                                                  />
                                             </div>
                                        </div>

                                        <div className="flex-1 space-y-3">
                                             <h3 className="text-3xl font-inter-bold text-white">
                                                  {product.name}
                                             </h3>
                                             <p className="text-md font-inter-regular text-gray-400 leading-relaxed">
                                                  {product.description}
                                             </p>

                                             <div className=" bg-[#2a2a2a] max-w-[90px] rounded-full px-2 py-1 flex items-center justify-center gap-1">
                                                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 14 14">
                                                       <IoIosStar className="text-[#F4E32C]" />
                                                  </svg>
                                                  <span className="font-inter-regular text-[14px]">{product.rating}</span>
                                                  <div className="w-[2px] h-3 bg-[#828282]" />
                                                  <span className="font-inter-regular text-[14px]">{product.reviews}</span>
                                             </div>

                                             <div className="space-y-2 pt-2">
                                                  <div className="flex items-center gap-2">
                                                       <span className="text-md  font-inter-regular text-gray-400 line-through">
                                                            Rs.{' '}
                                                            {(product.price + 10000).toLocaleString()}
                                                       </span>
                                                       <span className="text-xl font-inter-medium text-white">
                                                            Rs. {product.price.toLocaleString()}.00
                                                       </span>
                                                  </div>
                                             </div>

                                             <div className="flex items-center gap-3 text-xs font-inter-medium text-white pt-2">
                                                  <div className="flex flex-col items-center bg-[#2a2a2a] rounded-lg px-4 py-2">
                                                       <span className="text-lg">20</span>
                                                       <span className="text-[10px] text-gray-400">
                                                            DAYS
                                                       </span>
                                                  </div>
                                                  <div className="flex flex-col items-center bg-[#2a2a2a] rounded-lg px-4 py-2">
                                                       <span className="text-lg">20</span>
                                                       <span className="text-[10px] text-gray-400">
                                                            HRS
                                                       </span>
                                                  </div>
                                                  <div className="flex flex-col items-center bg-[#2a2a2a] rounded-lg px-4 py-2">
                                                       <span className="text-lg">08</span>
                                                       <span className="text-[10px] text-gray-400">
                                                            MIN
                                                       </span>
                                                  </div>
                                                  <div className="flex flex-col items-center bg-[#2a2a2a] rounded-lg px-4 py-2">
                                                       <span className="text-lg">7</span>
                                                       <span className="text-[10px] text-gray-400">
                                                            SEC
                                                       </span>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default SpecialDealsCarouselComponent;
