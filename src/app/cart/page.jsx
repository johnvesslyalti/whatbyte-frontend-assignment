'use client';

import { useEffect, useState } from "react";

export default function CartPage() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        try {
            const storedCart = localStorage.getItem("cart");
            if (storedCart) {
                const parsed = JSON.parse(storedCart);
                if (Array.isArray(parsed)) {
                    setCart(parsed);
                }
            }
        } catch (error) {
            console.error("Failed to parse cart from localStorage:", error);
        }
    }, []);

    return (
        <div className="p-5">
            <h1 className="text-4xl font-bold mb-5">Your Cart</h1>

            {cart.length === 0 ? (
                <p className="text-lg text-gray-500">Your cart is empty.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-5 gap-10">
                    {cart.map(product => (
                        <div
                            key={product.id}
                            className="flex flex-col justify-between items-center bg-white p-5 rounded-xl shadow">
                            <div className="w-full h-48 overflow-hidden">
                                <img 
                                    src={product.image} 
                                    alt={product.title} 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col items-start gap-1 mt-3">
                                <div className="text-xl font-bold">{product.title}</div>
                                <div className="font-bold text-lg">$ {product.price}</div>
                            </div>
                        </div>  
                    ))}
                </div>
            )}
        </div>
    );
}
