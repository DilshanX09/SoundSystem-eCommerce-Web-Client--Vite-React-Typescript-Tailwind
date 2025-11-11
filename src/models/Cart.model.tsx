'use client'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { IoMdClose } from 'react-icons/io'
import CartProductComponent from '../components/CartProduct.component.';
import type { CartProductProps } from '../types/Product.type';

const sampleProducts: CartProductProps[] = [
     { id: 1, quantity: 2, title: 'Yamaha DM7 Digital Mixing Console', category: 'Mixers, Consoles', price: 'Rs. 450,000.00' },
     { id: 2, quantity: 2, title: 'Behringer X32 Compact Mixer', category: 'Mixers, Consoles', price: 'Rs. 220,000.00' },
     { id: 3, quantity: 2, title: 'Shure SM7B Microphone', category: 'Microphones', price: 'Rs. 75,000.00' },
     { id: 4, quantity: 2, title: 'JBL Studio Monitor Speakers', category: 'Speakers', price: 'Rs. 120,000.00' },
     { id: 5, quantity: 2, title: 'Audio-Technica ATH-M50x Headphones', category: 'Headphones', price: 'Rs. 35,000.00' },
     { id: 6, quantity: 2, title: 'Focusrite Scarlett 2i2 Interface', category: 'Audio Interfaces', price: 'Rs. 55,000.00' },
     { id: 7, quantity: 2, title: 'Focusrite Scarlett 2i2 Interface', category: 'Audio Interfaces', price: 'Rs. 55,000.00' },
     { id: 8, quantity: 2, title: 'Focusrite Scarlett 2i2 Interface', category: 'Audio Interfaces', price: 'Rs. 55,000.00' },
     { id: 9, quantity: 2, title: 'Focusrite Scarlett 2i2 Interface', category: 'Audio Interfaces', price: 'Rs. 55,000.00' },
     { id: 10, quantity: 2, title: 'Focusrite Scarlett 2i2 Interface', category: 'Audio Interfaces', price: 'Rs. 55,000.00' },
];

const CartModel = ({ cartIsOpen, setCartIsOpen }: { cartIsOpen: boolean, setCartIsOpen: (isOpen: boolean) => void }) => {

     return (
          <div>
               <Dialog open={cartIsOpen} onClose={setCartIsOpen} className="relative z-10">
                    <DialogBackdrop
                         transition
                         className="fixed inset-0 bg-black/20 backdrop-blur-[5px] transition-opacity duration-500 ease-in-out data-closed:opacity-0"
                    />

                    <div className="fixed inset-0 overflow-hidden">
                         <div className="absolute inset-0 overflow-hidden">
                              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full lg:pl-10 sm:pl-16">
                                   <DialogPanel
                                        transition
                                        className="pointer-events-auto w-screen max-w-xl transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
                                   >
                                        <div className="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                                             <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                                  <div className="flex items-start justify-between">
                                                       <div className='flex flex-col'>
                                                            <DialogTitle className="text-lg font-inter-bold uppercase text-gray-900">Shopping cart ( {sampleProducts.length} items )</DialogTitle>
                                                            <DialogTitle className="text-sm font-inter-regular text-gray-500">Review your items and proceed to secure checkout</DialogTitle>
                                                       </div>
                                                       <div className="ml-3 flex h-7 items-center">
                                                            <button
                                                                 type="button"
                                                                 onClick={() => setCartIsOpen(false)}
                                                                 className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                                            >
                                                                 <span className="absolute -inset-0.5" />
                                                                 <IoMdClose className='text-2xl cursor-pointer text-black' />
                                                            </button>
                                                       </div>
                                                  </div>

                                                  <div className="mt-10">
                                                       <div className="flow-root">
                                                            <ul role="list" className="-my-6 divide-y divide-gray-200">

                                                                 {sampleProducts.map((product, index) => (
                                                                      <CartProductComponent key={index} id={product.id} title={product.title} category={product.category} price={product.price} quantity={product.quantity} />
                                                                 ))}

                                                            </ul>
                                                       </div>
                                                  </div>
                                             </div>

                                             <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                                  <div className="flex justify-between text-base font-inter-medium text-gray-900">
                                                       <p>Subtotal</p>
                                                       <p>$262.00</p>
                                                  </div>
                                                  <p className="mt-0.5 text-sm font-inter-regular text-gray-500">Shipping and taxes calculated at checkout.</p>
                                                  <div className="mt-6">
                                                       <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-[#181818] px-6 py-3 font-inter-medium text-white shadow-xs">Checkout
                                                       </a>
                                                  </div>
                                                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                                       <button
                                                            type="button"
                                                            onClick={() => setCartIsOpen(false)}
                                                            className="font-inter-regular text-[13px] text-black" >
                                                            Continue Shopping
                                                            <span aria-hidden="true"> &rarr;</span>
                                                       </button>
                                                  </div>
                                             </div>
                                        </div>
                                   </DialogPanel>
                              </div>
                         </div>
                    </div>
               </Dialog>
          </div>
     )
}

export default CartModel;