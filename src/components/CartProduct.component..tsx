import type { CartProductProps } from "../types/Product.type";

const CartProductComponent = ({ id, title, category, price, quantity }: CartProductProps) => {
     return (

          <li key={id} className="flex py-4">
               <div className="size-24 shrink-0 overflow-hidden rounded-md bg-[#f6f6f6]">
                    <div className="relative w-full h-full">
                    </div>
               </div>
               <div className="ml-4 flex flex-1 flex-col">
                    <div>
                         <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>
                                   <a className='font-inter-medium text-[14px]'>{title}</a>
                              </h3>
                              <p className="ml-2 text-[13px] font-inter-regular">{price}</p>
                         </div>
                         <p className="text-sm text-gray-500 font-inter-regular">{category}</p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                         <p className="text-gray-500 font-inter-regular">QTY {quantity}</p>

                         <div className="flex">
                              <button type="button" className="font-inter-regular uppercase text-[12px] bg-red-100 px-3 py-2 rounded-md text-red-600 hover:text-red-500">
                                   Remove
                              </button>
                         </div>
                    </div>
               </div>
          </li>

     );
}

export default CartProductComponent;