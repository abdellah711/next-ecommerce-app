import { Product } from "@/types/product";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartState = {
    cartItems: { product: Product, color?: string, size?: number, quantity: number }[];
    addToCart: (product: Product, quantity?: number, color?: string, size?: number) => void;
    changeQuantity: (product: Product, quantity: number, color?: string, size?: number) => void;
    deleteItem: (product: Product, color?: string, size?: number) => void;
}

export const useCartStore = create(
    persist<CartState>((set) => ({
        cartItems: [],
        addToCart: (product: Product, quantity = 1, color?: string, size?: number) => set((state) => {
            const cartItems = [...state.cartItems];
            const item = cartItems.find((item) => item.product.id === product.id);
            if (item && item.color === color && item.size === size) {
                item.quantity = Math.min(item.quantity + quantity, product.attributes.stock);
            } else {
                cartItems.push({ product, quantity, color, size });
            }
            return { cartItems };
        }),
        changeQuantity: (product: Product, quantity: number, color?: string, size?: number) => set((state) => {
            const cartItems = [...state.cartItems];
            const item = cartItems.find((item) => item.product.id === product.id);
            if (item && item.color === color && item.size === size) {
                item.quantity = quantity;
            }
            return { cartItems };
        }),
        deleteItem: (product: Product, color?: string, size?: number) => set((state) => {
            const cartItems = [...state.cartItems];
            const item = cartItems.find((item) => item.product.id === product.id && item.color === color && item.size === size);
            if (item) {
                const index = cartItems.indexOf(item);
                cartItems.splice(index, 1);
            }
            return { cartItems };
        }),
    }), {
        name: "cart"
    })
)