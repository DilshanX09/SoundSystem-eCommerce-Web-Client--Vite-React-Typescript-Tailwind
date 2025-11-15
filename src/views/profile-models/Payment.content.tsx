import { BiCreditCard } from "react-icons/bi";

export const PaymentContent = () => {
     return (
          <div className="bg-white rounded-lg border border-gray-200">

               <div className="px-10 py-5 border-b border-gray-200">
                    <h2 className="text-xl font-inter-medium text-gray-900">Payment Methods</h2>
                    <p className="text-gray-500 font-inter-regular">Manage your saved payment methods</p>
               </div>

               <div className="px-9 py-3 space-y-3">
                    <div className="border-1 border-gray-400 rounded-lg p-4 bg-gray-50">
                         <div className="flex items-start justify-between">
                              <div className="flex items-center gap-3">
                                   <div className="w-12 h-8 bg-black rounded flex items-center justify-center text-white text-xs font-bold">
                                        VISA
                                   </div>
                                   <div>
                                        <p className="font-inter-medium text-gray-900">•••• •••• •••• 4242</p>
                                        <p className="text-[13px] font-inter-regular text-gray-500 mt-1">Expires 12/25</p>
                                   </div>
                              </div>
                              <span className="px-2 py-1.5 text-[13px] bg-black text-white text-xs font-inter-regular rounded">Default</span>
                         </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
                         <div className="flex items-start justify-between">
                              <div className="flex items-center gap-3">
                                   <div className="w-12 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded flex items-center justify-center text-white text-xs font-bold">
                                        MC
                                   </div>
                                   <div>
                                        <p className="font-inter-medium text-gray-900">•••• •••• •••• 8888</p>
                                        <p className="text-[13px] font-inter-regular text-gray-500 mt-1">Expires 06/26</p>
                                   </div>
                              </div>
                              <button className="text-gray-500 hover:text-gray-700 text-[13px] font-inter-regular">Remove</button>
                         </div>
                    </div>

                    <button className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-500 hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 text-gray-600 hover:text-blue-600 font-inter-regular">
                         <BiCreditCard size={20} />
                         Add New Payment Method
                    </button>
               </div>
          </div>
     );
};