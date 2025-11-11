'use client';

import { useState } from 'react';
import { IoIosStar } from 'react-icons/io';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import type { ProductUI } from '../types/Product.type';
import { BiChevronRight } from 'react-icons/bi';
import PaymentOptionsImage from '../assets/images/payment-options.svg';

interface ProductDetailModalProps {
     product: ProductUI & { images?: string[] };
     isOpen: boolean;
     onClose: () => void;
}

const ProductDetailModalComponent = ({
     product,
     isOpen,
     onClose,
}: ProductDetailModalProps) => {

     const [currentImageIndex, setCurrentImageIndex] = useState(0);

     const images = product.images && product.images.length > 1
          ? product.images
          : [product.image, product.image, product.image];

     const handlePrevImage = () => {
          setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
     };

     const handleNextImage = () => {
          setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
     };

     if (!isOpen) return null;

     return (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-[5px] p-4">
               <div className="relative w-full max-w-5xl rounded-2xl bg-white shadow-2xl">
                    <button
                         onClick={onClose}
                         className="absolute right-[-15px] top-[-15px] z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white border border-[#e4e4e4] text-gray-600 transition-all hover:bg-gray-200"
                         aria-label="Close"
                    >
                         <FiX className="text-xl" />
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">

                         <div className="flex flex-col items-center justify-center">

                              <div className="relative w-full bg-[#f8f8f8] rounded-xl p-8 flex items-center justify-center min-h-[400px]">

                                   <button
                                        onClick={handlePrevImage}
                                        className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white transition-all hover:bg-gray-800 hover:scale-110"
                                        aria-label="Previous image"
                                   >
                                        <FiChevronLeft className="text-2xl" />
                                   </button>

                                   <img
                                        src={images[currentImageIndex]}
                                        alt={`${product.name} slide ${currentImageIndex + 1}`}
                                        className="max-h-96 max-w-full  object-contain"
                                   />

                                   {images.length > 1 && (
                                        <div className="text-sm absolute bottom-5 bg-white px-4 py-1 rounded-full font-inter-medium border border-[#e4e4e4] text-gray-600">
                                             {currentImageIndex + 1} / {images.length}
                                        </div>
                                   )}

                                   <button
                                        onClick={handleNextImage}
                                        className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white transition-all hover:bg-gray-800 hover:scale-110"
                                        aria-label="Next image"
                                   >
                                        <FiChevronRight className="text-2xl" />
                                   </button>
                              </div>


                         </div>

                         <div className="flex flex-col justify-start">

                              <div className="flex items-start justify-between gap-4">
                                   <div>
                                        <h2 className="text-3xl font-inter-bold flex gap-4 items-center text-gray-900">{product.name} <p className='text-[15px] uppercase'>( {product.category} )</p> </h2>
                                   </div>

                              </div>

                              <p className="text-md font-inter-regular text-gray-700 leading-relaxed">{product.description}</p>

                              <div className='font-inter-regular flex gap-3 pt-4'>
                                   <p className='text-[13px] bg-[#f6f6f6] font-inter-medium px-3 py-1 rounded-md'>{product.stock == 'in_stock' ? 'IN STOCK' : 'OUT OF STOCK'}</p>
                                   <p className='text-[13px] bg-[#f6f6f6] font-inter-medium px-3 py-1 rounded-md uppercase'>{product.condition}</p>
                              </div>

                              <div>
                                   <p className='font-inter-regular text-[15px] py-4 text-gray-500'>"Professional 2500W active subwoofer delivers thunderous, deep bass with built-in amplifier. High-power driver produces room-shaking low frequencies. Perfect for home theaters, DJ setups, and audiophile sound systems demanding superior performance."</p>
                              </div>

                              <div className=" bg-white border max-w-[90px] border-[#e4e4e4] rounded-full px-2 py-1 flex items-center justify-center gap-1">
                                   <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 14 14">
                                        <IoIosStar className="text-[#F4E32C]" />
                                   </svg>
                                   <span className="font-inter-regular text-[14px]">{product.rating}</span>
                                   <div className="w-[2px] h-3 bg-[#828282]" />
                                   <span className="font-inter-regular text-[14px]">{product.reviews}</span>
                              </div>

                              <div className='pt-5 flex gap-11'>
                                   <h1 className='font-inter-bold text-xl'>LKR 87,000 . 00</h1>
                                   <button className="inline-flex items-center gap-2 underline hover:gap-3 transition-all duration-300">
                                        <span className="font-inter-regular text-md">View Product</span>
                                        <BiChevronRight className="w-4 h-4" />
                                   </button>
                              </div>

                              <div className='mt-7 mx-0'>
                                   <img src={PaymentOptionsImage} className='h-7' />
                              </div>

                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ProductDetailModalComponent;
