import { useState } from "react";
import { IoIosStar } from "react-icons/io";
import { FiShoppingCart, FiHeart, FiEye, FiShare2 } from "react-icons/fi";
import type { ProductUI } from "../types/Product.type";
import ProductDetailModalComponent from "./ProductDetailModal.component";

const ProductCardComponent = ({ product }: { product: ProductUI }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
        <div className="group relative bg-white rounded-lg overflow-hidden">

            <div className="bg-[#fbfbfb] rounded-[7px] p-4 border border-gray-200 relative aspect-square mb-4">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                />

                <div className="absolute bottom-4 left-4 bg-white border border-[#e4e4e4] rounded-full px-2 py-1 flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 14 14">
                        <IoIosStar className="text-[#F4E32C]" />
                    </svg>
                    <span className="font-inter-regular text-[12px] text-[#828282]">{product.rating}</span>
                    <div className="w-px h-2 bg-[#828282]" />
                    <span className="font-inter-regular text-[12px] text-[#828282]">{product.reviews}</span>
                </div>
            </div>

            <div className="px-2 pb-2">
                <h3 className="font-inter-medium text-lg text-black mb-1">{product.name}</h3>
                <p className="font-inter-regular text-[12px] text-[#8e8e8e] mb-2">{product.description}</p>
                <p className="font-inter-regular text-sm text-black">Rs. {product.price.toLocaleString()} .00</p>
            </div>

            <div className="pointer-events-none absolute top-4 right-4 flex flex-col gap-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                {[{
                    icon: <FiShoppingCart className="text-gray-700 text-lg" />, label: "Add to cart", onClick: () => {}
                }, {
                    icon: <FiHeart className="text-gray-700 text-lg" />, label: "Add to wishlist", onClick: () => {}
                }, {
                    icon: <FiEye className="text-gray-700 text-lg" />, label: "View", onClick: () => setIsModalOpen(true)
                }, {
                    icon: <FiShare2 className="text-gray-700 text-lg" />, label: "Share", onClick: () => {}
                }].map((action) => (
                    <button
                        key={action.label}
                        type="button"
                        onClick={action.onClick}
                        className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-white border border-[#e4e4e4] transition-transform duration-200 hover:scale-105 hover:shadow-md"
                        aria-label={action.label}
                    >
                        {action.icon}
                    </button>
                ))}
            </div>
        </div>
        <ProductDetailModalComponent 
            product={product}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
        />
        </>
    );
}

export default ProductCardComponent;