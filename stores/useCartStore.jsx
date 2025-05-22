'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
    persist(
        (set, get) => ({
            cart: [],
            addToCart: (product) => {
                const existing = get().cart.find((item) => item.id === product.id);
                if(!existing) {
                    set((state) => ({
                        cart: [...state.cart, {...product, quantity: 1 }],
                    }));
                } else {
                    set((state) => ({
                        cart: state.cart.map((item) => 
                        item.id === product.id
                        ? { ...item, quantity: item.quantity + 1}
                        : item
                        ),
                    }));
                }
            },
            removeFromCart: (id) => {
                set((state) => ({
                    cart: state.cart.filter((item) => item.id !== id),
                }));
            },
            clearCart: () => set({ cart: []}),
        }),
        {
            name: 'cart-storage',
        }
    )
)

export default useCartStore;