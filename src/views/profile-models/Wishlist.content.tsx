import type { ProductUI } from "../../types/Product.type";
import ProductCardComponent from "../../components/ProductCard.component";

export const WishlistContent = () => {

     const products: ProductUI[] = [
          { id: '1', name: 'ART 910-AX', description: '2100W PROFESSIONAL ACTIVE BLUETOOTH® SPEAKER', price: 87000, rating: 4.9, reviews: 12, category: 'speakers', stock: 'in_stock', condition: 'new', image: "https://i.ibb.co/s92vjfvF/Group-8773.png" },
          { id: '2', name: 'ART 910-AX', description: '2100W PROFESSIONAL ACTIVE BLUETOOTH® SPEAKER', price: 87000, rating: 4.9, reviews: 12, category: 'speakers', stock: 'in_stock', condition: 'new', image: "https://i.ibb.co/s92vjfvF/Group-8773.png" },
          { id: '3', name: 'ART 910-AX', description: '2100W PROFESSIONAL ACTIVE BLUETOOTH® SPEAKER', price: 87000, rating: 4.9, reviews: 12, category: 'subwoofers', stock: 'in_stock', condition: 'new', image: "https://i.ibb.co/s92vjfvF/Group-8773.png" },
          { id: '4', name: 'ART 910-AX', description: '2100W PROFESSIONAL ACTIVE BLUETOOTH® SPEAKER', price: 87000, rating: 4.9, reviews: 12, category: 'subwoofers', stock: 'out_of_stock', condition: 'refurbished', image: "https://i.ibb.co/s92vjfvF/Group-8773.png" },
     ];

     return (
          <div className="bg-white rounded-lg border border-gray-200">

               <div className="px-10 py-5 border-b border-gray-200">
                    <h2 className="text-xl font-inter-medium text-gray-900">My Wishlist</h2>
                    <p className="text-gray-500 font-inter-regular">20 items saved for later</p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-7">
                    {products.map((product) => (
                         <ProductCardComponent key={product.id} product={product} />
                    ))}
               </div>
          </div>
     );
};