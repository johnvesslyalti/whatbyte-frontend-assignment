'use client'

import Link from "next/link"
import products from "/data/products"
import { useEffect, useState } from "react";
import useCartStore from "/stores/useCartStore";


export default function ProductList({ category, minValue, maxValue }) {
    const [filterProducts, setFilteredProducts] = useState([]);
    const addToCart = useCartStore((state) => state.addToCart);

    const afterFilter = () => {
        try {
            let filtered = products;

            if(category && category !== "All") {
                filtered = filtered.filter(p => p.category === category);
            }

            if(minValue !== undefined && maxValue !== undefined) {
                filtered = filtered.filter(p => p.price >= minValue && p.price <= maxValue);
            }

            setFilteredProducts(filtered);
            
        } catch(error) {
            console.error(error);
        }
    }

    useEffect(() => {
        afterFilter();
    }, [category, minValue, maxValue]);

    return(
        <div className="w-3/4 p-5">
            <div className="text-5xl font-bold text-blue-950">Product Listing</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-5 gap-20">
                {filterProducts.map((product) => (
                        <div
                        key={product.id}
                        className="flex flex-col justify-between items-center bg-white p-5">
                            <Link 
                            href={`/product/${product.id}`}
                            >
                            <div className="w-full h-48 overflow-hidden">
                                <img 
                                src={product.image} 
                                alt={product.title} 
                                className="w-full h-full object-cover"
                                />
                            </div>
                            </Link>
                            <div className="flex flex-col items-start gap-1">
                                <div className="text-xl font-bold">{product.title}</div>
                                <div className="font-bold text-lg">$ {product.price}</div>
                            </div>
                            
                            <button
                            onClick={() => addToCart(product)}
                            className="bg-blue-700 py-2 w-full text-white rounded-xl cursor-pointer">Add to Cart</button>
                        </div>
                ))}
            </div>
        </div>
    )
}