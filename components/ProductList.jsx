'use client'

import Link from "next/link"
import products from "/data/products"

export default function ProductList() {
    return(
        <div className="w-3/4 p-5">
            <div className="text-5xl font-bold text-blue-950">Product Listing</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-5 gap-20">
                {products.map((product) => (
                    <Link 
                    href={`/product/${product.id}`}
                    key={product.id}
                    >
                        <div className="flex flex-col justify-between items-center bg-white p-5">
                            <div className="w-full h-48 overflow-hidden">
                                <img 
                                src={product.image} 
                                alt={product.title} 
                                className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col items-start gap-1">
                                <div className="text-xl font-bold">{product.title}</div>
                                <div className="font-bold text-lg">$ {product.price}</div>
                            </div>
                            <button className="bg-blue-700 py-2 w-full text-white rounded-xl cursor-pointer">Add to Cart</button>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}