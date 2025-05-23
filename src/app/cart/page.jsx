'use client';

import Back from "@/components/Back";
import useCartStore from "/stores/useCartStore";

export default function CartPage() {
    const cart = useCartStore((state) => state.cart);
    const removeFromCart = useCartStore((state) => state.removeFromCart);

    return (
        <div  className="p-5">
            <Back />
            <div className="text-5xl font-bold text-blue-950 text-center">Your Cart</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-5 gap-20">
                {cart.map((product) => (
                    <div
                    key={product.id}
                    className="flex flex-col justify-between items-center bg-white p-5">
                        <div className="w-48 h-48 overflow-hidden">
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
                        <button
                        onClick={() => removeFromCart(product.id)}
                        className="bg-red-700 py-2 w-full text-white rounded-xl cursor-pointer">
                            Remove from Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
