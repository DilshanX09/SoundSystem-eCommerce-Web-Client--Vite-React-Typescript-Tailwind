import { CiCirclePlus } from "react-icons/ci";

export const AddressesContent = () => {
     return (
          <div className="space-y-6">
               <div className="bg-white rounded-lg border border-gray-200 p-7">
                    <h2 className="text-xl font-inter-medium text-gray-900 mb-4">Saved Addresses</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                         <div className="border-1 border-black rounded-lg p-4 bg-gray-50">
                              <div className="flex items-start justify-between mb-2">
                                   <span className="px-2.5 py-1.5 bg-black text-white text-[13px] font-inter-regular rounded">Default</span>
                                   <button className="text-gray-500 font-inter-regular hover:text-gray-700 underline cursor-pointer">Edit</button>
                              </div>
                              <p className="font-inter-medium text-md text-gray-900 mt-3">Home</p>
                              <p className="text-gray-600 font-inter-regular text-[14px] mt-2">123 Main Street, Apt 4B<br />New York, NY 10001<br />United States</p>
                              <p className="text-gray-600 font-inter-regular text-[14px] mt-2">Phone: +1 (555) 123-4567</p>
                         </div>

                         <div className="border border-gray-200 rounded-lg p-4">
                              <div className="flex items-start justify-between mb-2">
                                   <span className="py-1.5 text-gray-700 text-[13px] font-inter-regular rounded">Secondary</span>
                                   <button className="text-gray-500 font-inter-regular hover:text-gray-700 underline cursor-pointer">Edit</button>
                              </div>
                              <p className="font-inter-medium text-md text-gray-900 mt-3">Office</p>
                              <p className="text-gray-600 font-inter-regular text-[14px] mt-2">123 Main Street, Apt 4B<br />New York, NY 10001<br />United States</p>
                              <p className="text-gray-600 font-inter-regular text-[14px] mt-2">Phone: +1 (555) 123-4567</p>
                         </div>

                         <button className="border-2 border-dashed cursor-pointer border-gray-300 rounded-lg p-6 hover:border-blue-500 hover:bg-blue-50 transition-colors flex flex-col items-center justify-center gap-2 text-gray-600 hover:text-blue-600">
                              <CiCirclePlus className="text-3xl" />
                              <span className="font-inter-medium">Add new address</span>
                         </button>
                    </div>
               </div>
          </div>
     );
};