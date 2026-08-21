"use client"

import SectionLayout from "@/components/layout/SectionLayout"
import { useCartStore } from "@/features/cart/store/cartStore";
import CheckoutForm from "@/features/checkout/components/CheckoutForm"
import OrderSummary from "@/features/checkout/components/OrderSummary"
import { useState } from "react";

export default function Checkout() {
    const { items, getTotal } = useCartStore();
    const total = getTotal();

    const [selectedState, setSelectedState] = useState<{state: string, price: number}>({
        state: "",
        price: 0
    })
    const handleClick = (state: string, fee: number) => {
        setSelectedState({state: state, price: fee})
    }

    return (
        <SectionLayout className="flex flex-col md:flex-row gap-8">
            <CheckoutForm onClick={handleClick} />
            <OrderSummary checkoutItems={items} orderTotal={total} deliveryFee={selectedState.price} />
        </SectionLayout>
    )
}