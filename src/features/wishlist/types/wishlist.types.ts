export interface Cart {
    id: string;
    userId: string;
    items: CartItem[];
    updatedAt: string;
}

export interface CartItem {
    id: string;
    productId: string;
    variantId: string
    quantity: number;
}