'use client';

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import products from "/data/products";
import { StepBack } from "lucide-react";

export default function ProductPage() {
    const [product, setProduct] = useState(null);
    const params = useParams();
    const router = useRouter();
    const id = params.id;

    useEffect(() => {
        const found = products.find(p => p.id === Number(id));
        setProduct(found);
    }, [id]);

    if (!product) return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <p className="text-xl text-gray-500 animate-pulse">Loading...</p>
        </div>
    );

    return (
        <div className="min-h-screen bg-white p-6 md:p-12 flex flex-col md:flex-row gap-10">
            <button onClick={() => router.push("/")} className="absolute flex justify-center items-center top-5 left-5 text-blue-500 cursor-pointer"><StepBack /><p className="text-xl">Back</p></button>
            <div className="md:w-1/2 w-full flex justify-center items-center">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                    <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-[400px] object-cover transition-transform duration-300 hover:scale-105"
                    />
                </div>
            </div>
            <div className="md:w-1/2 w-full flex flex-col justify-center gap-6">
                <h1 className="text-4xl md:text-5xl font-bold text-blue-800">{product.title}</h1>
                <p className="text-blue-600 text-lg leading-relaxed">{product.description}</p>
                <button className="mt-4 px-6 py-3 bg-blue-500 text-white text-lg rounded-xl shadow hover:bg-blue-600 transition">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
