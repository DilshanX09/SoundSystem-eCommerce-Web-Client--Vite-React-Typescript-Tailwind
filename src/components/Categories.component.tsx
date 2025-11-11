const CategoriesComponent = () => {
     return (
          <div className="container mx-auto px-4 lg:px-8">
               <h1 className="text-lg font-inter-medium uppercase my-8">Categories</h1>
               <div className="uppercase font-inter-regular flex items-center gap-3 my-4 cursor-pointer flex-wrap gap-y-2">
                    <p className="border border-[#e4e4e4] rounded-full px-4 py-2">Speakers</p>
                    <p className="border border-[#e4e4e4] rounded-full px-4 py-2">Subwoofers</p>
                    <p className="border border-[#e4e4e4] rounded-full px-4 py-2">Mixers</p>
                    <p className="border border-[#e4e4e4] rounded-full px-4 py-2">Home Setup</p>
               </div>
          </div>
     );
}
export default CategoriesComponent