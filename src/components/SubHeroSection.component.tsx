import { BiChevronRight } from "react-icons/bi";
import ArrayImg from "../assets/images/Sub-Hero-Array.png";
import SpeakerImg from "../assets/images/Sub-Hero-Single-Speacker.png";

const SubHeroSectionComponent = () => {
     return (
          <section className="container mx-auto px-4 lg:px-8 pt-[150px] mb-10">
               <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-stretch">

                    <div className="bg-[#f6f6f648] border border-[#e4e4e4] rounded-[17px] p-8 flex items-center md:h-[400px] overflow-visible md:col-span-3">
                         <div className="w-full grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-4 items-center">
                              <div className="flex flex-col justify-center">
                                   <button className="bg-[#212121] w-24 rounded-full inline-block text-white text-[13px] px-3 py-1 font-inter-regular">SOLUTION</button>

                                   <h3 className="text-2xl mt-1 md:text-3xl lg:text-4xl font-inter-bold text-gray-900 mb-3">
                                        Event Audio Solutions
                                   </h3>
                                   <p className="text-[14px] font-inter-regular text-gray-600 max-w-lg">
                                        Powerful line array systems engineered for superior clarity, consistent coverage, and impactful sound delivery—ideal for live performances, corporate conferences, concerts, festivals, and large-scale professional audio events worldwide.
                                   </p>

                                   <div className="mt-5">
                                        <button className="inline-flex items-center gap-2 text-black text-sm hover:gap-3 transition-all duration-300">
                                             <span className="font-inter-regular">Explore</span>
                                             <BiChevronRight className="w-4 h-4" />
                                        </button>
                                        <button className="inline-flex ml-3 items-center gap-2 text-black text-sm hover:gap-3 transition-all duration-300">
                                             <span className="font-inter-regular">Shop now</span>
                                             <BiChevronRight className="w-4 h-4" />
                                        </button>
                                   </div>
                              </div>

                              <div className="flex items-center justify-center md:justify-end relative mr-5 mt-5">
                                   <img
                                        src={ArrayImg}
                                        alt="Line array speakers"
                                        className="w-full max-w-[260px] mt-7 md:max-w-[320px] lg:max-w-[340px] max-h-[320px] h-auto object-contain md:scale-150 md:translate-y-4 md:origin-bottom"
                                   />
                              </div>
                         </div>
                    </div>

                    <div className="bg-[#f6f6f648] border border-[#e4e4e4]  rounded-[17px] p-8 flex items-center justify-center md:h-[400px] overflow-visible md:col-span-1">
                         <div className="w-full h-full flex items-center justify-center">
                              <img
                                   src={SpeakerImg}
                                   alt="Single studio speaker"
                                   className="w-auto max-w-full max-h-[360px] md:max-h-[370px] object-contain md:scale-125 md:translate-y-4 md:origin-bottom"
                              />
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default SubHeroSectionComponent;