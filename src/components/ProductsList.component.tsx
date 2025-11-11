import type { ProductUI } from "../types/Product.type";
import ProductCardComponent from "./ProductCard.component";

const products: ProductUI[] = [
     { id: '1', name: 'ART 910-AX', description: '2100W PROFESSIONAL ACTIVE BLUETOOTH® SPEAKER', price: 87000, rating: 4.9, reviews: 12, category: 'speakers', stock: 'in_stock', condition: 'new', image: "https://i.ibb.co/s92vjfvF/Group-8773.png" },
     { id: '2', name: 'ART 910-AX', description: '2100W PROFESSIONAL ACTIVE BLUETOOTH® SPEAKER', price: 87000, rating: 4.9, reviews: 12, category: 'speakers', stock: 'in_stock', condition: 'new', image: "https://i.ibb.co/s92vjfvF/Group-8773.png" },
     { id: '3', name: 'ART 910-AX', description: '2100W PROFESSIONAL ACTIVE BLUETOOTH® SPEAKER', price: 87000, rating: 4.9, reviews: 12, category: 'subwoofers', stock: 'in_stock', condition: 'new', image: "https://i.ibb.co/s92vjfvF/Group-8773.png" },
     { id: '4', name: 'ART 910-AX', description: '2100W PROFESSIONAL ACTIVE BLUETOOTH® SPEAKER', price: 87000, rating: 4.9, reviews: 12, category: 'subwoofers', stock: 'out_of_stock', condition: 'refurbished', image: "https://i.ibb.co/s92vjfvF/Group-8773.png" },
     { id: '5', name: 'ART 910-AX', description: '2100W PROFESSIONAL ACTIVE BLUETOOTH® SPEAKER', price: 87000, rating: 4.9, reviews: 12, category: 'subwoofers', stock: 'in_stock', condition: 'used', image: "https://i.ibb.co/s92vjfvF/Group-8773.png" },
     { id: '6', name: 'ART 910-AX', description: '2100W PROFESSIONAL ACTIVE BLUETOOTH® SPEAKER', price: 87000, rating: 4.9, reviews: 12, category: 'mixers', stock: 'in_stock', condition: 'new', image: "https://i.ibb.co/s92vjfvF/Group-8773.png" },
     { id: '7', name: 'ART 910-AX', description: '2100W PROFESSIONAL ACTIVE BLUETOOTH® SPEAKER', price: 87000, rating: 4.9, reviews: 12, category: 'speakers', stock: 'in_stock', condition: 'new', image: "https://i.ibb.co/s92vjfvF/Group-8773.png" },
     { id: '8', name: 'ART 910-AX', description: '2100W PROFESSIONAL ACTIVE BLUETOOTH® SPEAKER', price: 87000, rating: 4.9, reviews: 12, category: 'subwoofers', stock: 'in_stock', condition: 'refurbished', image: "https://i.ibb.co/s92vjfvF/Group-8773.png" },
     { id: '9', name: 'ART 910-AX', description: '2100W PROFESSIONAL ACTIVE BLUETOOTH® SPEAKER', price: 87000, rating: 4.9, reviews: 12, category: 'monitors', stock: 'out_of_stock', condition: 'used', image: "https://i.ibb.co/s92vjfvF/Group-8773.png" },
     { id: '10', name: 'ART 910-AX', description: '2100W PROFESSIONAL ACTIVE BLUETOOTH® SPEAKER', price: 87000, rating: 4.9, reviews: 12, category: 'speakers', stock: 'in_stock', condition: 'new', image: "https://i.ibb.co/s92vjfvF/Group-8773.png" },
     { id: '11', name: 'ART 910-AX', description: '2100W PROFESSIONAL ACTIVE BLUETOOTH® SPEAKER', price: 87000, rating: 4.9, reviews: 12, category: 'subwoofers', stock: 'in_stock', condition: 'used', image: "https://i.ibb.co/s92vjfvF/Group-8773.png" },
     { id: '12', name: 'ART 910-AX', description: '2100W PROFESSIONAL ACTIVE BLUETOOTH® SPEAKER', price: 87000, rating: 4.9, reviews: 12, category: 'monitors', stock: 'in_stock', condition: 'new', image: "https://i.ibb.co/s92vjfvF/Group-8773.png" },
];

const ProductListComponent = ({ title = "Products" }: { title?: string }) => {
     return (
          <div className="container mx-auto px-4 lg:px-8">
               <h1 className="text-lg font-inter-medium uppercase my-8">{title}</h1>

               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {products.map((product) => (
                         <ProductCardComponent key={product.id} product={product} />
                    ))}
               </div>
          </div>
     );
}
export default ProductListComponent;