import SideMenu from "@/components/layout/SideMenu";
import EmptyCart from "./EmptyCart";
import { X } from "lucide-react";
import CartItems from "./CartItems";
import { useCartStore } from "../store/cartStore";
import CartItem from "./CartItem";
import {Button} from "@/components"
import formatCurrency from "@/lib/formatCurrency";

const Cart = () => {
  const { items, getSubtotal, getTotal } = useCartStore();
  const totalPrice = getTotal();

  return (
    <>
      <div className="flex items-center justify-between w-full text-foreground bg-background border-b border-foreground/20 px-5 py-7.5">
        <div className="flex items-baseline gap-3">
          <div className="font-serif text-3xl italic text-accent">Your</div>
          <div className="text-2xl font-light tracking-wide">Shopping Bag</div>
        </div>
        <SideMenu.CloseSideMenu>
          <X size={24} />
        </SideMenu.CloseSideMenu>
      </div>
      {items.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <CartItems>
            {items.map((item, index) => {
              const itemTotal = getSubtotal(item.id, item.color, item.size);
              return (
                <CartItem key={index}>
                  <CartItem.Image src={item.images.src} alt={item.images.alt} />
                  <CartItem.Content>
                    <CartItem.ColGroup className="justify-between mr-auto">
                      <CartItem.Name>{item.name}</CartItem.Name>
                      <CartItem.Variant>{item.color} {item.color && item.size && "•"} {item.size && "Size"} {item.size}</CartItem.Variant>
                      <CartItem.QtyControl id={item.id} color={item.color} size={item.size} quantity={item.quantity} />
                    </CartItem.ColGroup>
                    <CartItem.ColGroup>
                      <CartItem.Delete id={item.id} color={item.color} size={item.size} />
                      <CartItem.Price price={itemTotal} />
                    </CartItem.ColGroup>
                  </CartItem.Content>
                </CartItem>
              );
            })}
          </CartItems>
          <div className="border-t border-foreground/20 mt-auto py-4 px-6">
            <div className="border-l-2 border-accent text-foreground/60 text-xs py-2 px-4 mb-4 bg-foreground/5">
              One flat delivery fee applied per order — not per item added.
            </div>
            <div className="flex justify-between mb-3 text-sm text-foreground/60">
              <span>Subtotal</span>
              <span>{formatCurrency(totalPrice)}</span>
            </div>
            <div className="flex justify-between mb-3 text-sm text-foreground/60">
              <span>Delivery fee</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="flex justify-between mb-2 pt-4 text-base border-t border-foreground/20">
              <span>Items Total</span>
              <span>{formatCurrency(totalPrice)}</span>
            </div>
            <Button className="w-full mt-2">Proceed to Checkout</Button>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
