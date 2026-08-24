import { CartProduct } from "@/features/cart/types/cart.types"
import formatCurrency from "@/lib/formatCurrency"
import Link from "next/link"

const SummaryItem = ({item}: {item: CartProduct}) => {
  return (
    <div className="flex justify-between">
      <div className="">
        <p className="text-sm">{item.name}</p>
        <p className="text-[10px] text-foreground/60">Qty {item.quantity} • {item.color} • Size {item.size}</p>
      </div>
      <p className="text-sm">{item.discountedPrice ? formatCurrency(item.quantity * item.discountedPrice) : formatCurrency(item.quantity * item.price)}</p>
    </div>
  )
}

const Subtotal = ({orderTotal}: {orderTotal: number}) => {
  return (
    <div className="flex justify-between text-sm text-foreground/60">
      <p>Subtotal</p>
      <p>{formatCurrency(orderTotal)}</p>
    </div>
  )
}

const DeliveryFee = ({fee}: {fee: number}) => {
  return (
    <div className="flex justify-between text-sm text-foreground/60">
      <p>Delivery <span className="text-xs">(once per order)</span></p>
      <p>{fee !== 0 ? formatCurrency(fee) : "Select state"}</p>
    </div>
  )
}

const Total = ({grandTotal}: {grandTotal: number}) => {
  return (
    <div className="flex justify-between py-4 border-t border-t-foreground/20 text-lg">
      <p>Total</p>
      <p>{formatCurrency(grandTotal)}</p>
    </div>
  )
}

const OrderSummary = ({checkoutItems, orderTotal, deliveryFee}: {checkoutItems: CartProduct[], orderTotal: number, deliveryFee: number}) => {
  return (
    <div className="flex-5">
      <div className="max-w-100 flex flex-col bg-foreground/5 p-6 gap-4">
        <h3 className="text-2xl font-serif font-light mb-4">Order Summary</h3>
        <div className="flex flex-col gap-4 border-b border-b-foreground/20 pb-4">
          {
            checkoutItems.length===0 ? 
            <div className="flex flex-col items-center text-sm text-foreground/60"><p>There is no order.</p> <p>Place an order from the <Link href="/shop" className="hover:underline">shop</Link>.</p></div> :
            checkoutItems.map((summaryItem) => {
              return (
                <SummaryItem key={summaryItem.id} item={summaryItem} />
              )
            })
          }
        </div>
        <Subtotal orderTotal={orderTotal} />
        <DeliveryFee fee={deliveryFee} />
        <Total grandTotal={orderTotal + deliveryFee} />
      </div>
    </div>
  )
}

export default OrderSummary