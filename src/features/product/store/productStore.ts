import { create } from "zustand"
import { CartProduct } from "@/features/cart/types/cart.types";

type CartState = {
    items: CartProduct[];

    addToCart: (item: CartProduct, quantity?: number) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
    increaseQuantity: (id: string) => void;
    decreaseQuantity: (id: string) => void;

    getTotal: () => number;
    getSubtotal: (id: string) => number;
}

export const useCartStore = create<CartState>((set, get) => ({
    items: [],

    addToCart: (item, quantity = 1) => {
        const existing = get().items.find((i) => i.id === item.id)

        if (existing) {
            set({ items: get().items.map((i) => i.id === item.id ? {...item, quantity: i.quantity + quantity} : item) })
        } else {
            set({ items: [...get().items, item] })
        }
    },

    removeFromCart: (id) => {
        set({ items: [...get().items.filter(item => item.id!==id)] })
    },

    clearCart: () => {
        set({ items: [] })
    },

    increaseQuantity: (id) => {
        set({ 
            items: get().items.map((item) => 
                item.id === id && item.quantity < item.stock ? {...item, quantity: item.quantity + 1} : item
            ),
        })

        get().getTotal()
    },

    decreaseQuantity: (id) => {
        set({ 
            items: get().items.map((item) => 
                item.id === id ? {...item, quantity: item.quantity - 1} : item
            ).filter((item) => item.quantity > 0),
        })
    },

    getTotal: () => {
        return get().items.reduce((total, item) => total + item.quantity * item.price, 0)        
    },

    getSubtotal: (id) => {
        const item = get().items.find((item) => item.id === id)

        return item ? item.quantity * item.price : 0
    },
}))