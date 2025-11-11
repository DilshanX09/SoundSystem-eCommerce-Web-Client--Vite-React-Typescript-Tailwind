import Truck from '../assets/icons/truck.svg';
import ReturnBox from '../assets/icons/return-box.svg';
import SecurePayment from '../assets/icons/hand-payment.svg';
import Gift from '../assets/icons/gift.svg';
import type { ServicesType } from '../types/Services.type';

const ServicesComponent = () => {

     const services: ServicesType[] = [
          { image: Truck, title: 'Free Shipping', description: 'For all Orders Over Rs. 100,000 .00' },
          { image: ReturnBox, title: '30 Days Returns', description: 'For an Exchange Product' },
          { image: SecurePayment, title: 'Secured Payment', description: 'Payment Cards Accepted' },
          { image: Gift, title: 'Special Gifts', description: 'Special Offers Available' }
     ]

     return (
          <>
               <div className="relative bg-[#1a1a1a] w-full font-inter-regular text-white">
                    <div className="container mx-auto">
                         <div className="grid grid-cols-1 md:grid-cols-4 gap-15 py-10 pl-7 md:pl-0">
                              {services.map((service, index) => (
                                   <div className='flex items-center gap-4' key={index}>
                                        <img src={service.image} />
                                        <div>
                                             <h1 className='text-xl font-inter-bold'>{service.title}</h1>
                                             <p className='text-[13px] text-gray-400'>{service.description}</p>
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>
               </div>
          </>
     );
}
export default ServicesComponent;