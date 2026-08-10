import cn from "@/lib/cn";
import Image from "next/image";
import { ReactNode } from "react";
import { useCartStore } from "@/features/cart/store/cartStore";
import { X } from "lucide-react";
import formatCurrency from "@/lib/formatCurrency";

type CartItemProps = {
  children: ReactNode;
  className?: string;
};

type CartImageProps = {
  src: string;
  alt: string;
  className?: string;
};

type CartContentProps = Pick<CartItemProps, "children" | "className">

const CartItem = ({ children, className }: CartItemProps) => {
  return <div className={cn("flex gap-2 mx-5 py-4 border-b border-foreground/20", className)}>{children}</div>;
};

function CartImage({ src, alt, className }: CartImageProps) {
  return (
    <div className="relative aspect-8/10 flex-1">
      <Image src={src} className={cn("object-cover", className)} alt={alt} fill />
    </div>
  );
}

function CartContent({children, className}: CartContentProps) {
    return (
        <div className={cn("flex gap-2 flex-4", className)}>
            {children}
        </div>
    )
}

function CartColGroup({children, className}: CartContentProps) {
    return (
        <div className={cn("flex flex-col gap-2", className)}>
            {children}
        </div>
    )
}

function ItemName({children, className}: CartContentProps) {
    return (
        <div className={cn("font-serif text-lg font-bold", className)}>
            {children}
        </div>
    )
}

function ItemVariant({children, className}: CartContentProps) {
    return (
        <div className={cn("flex flex-col text-xs text-foreground/60", className)}>
            {children}
        </div>
    )
}

function ItemTotal({children, className}: CartContentProps) {
    return (
        <div className={cn("flex flex-col", className)}>
            {children}
        </div>
    )
}

function QtyControl({id, color, size, quantity}: {id: string, color: string, size: string, quantity: number}) {
    const { increaseQuantity, decreaseQuantity } = useCartStore();

    return (
        <div className={cn("flex items-center gap-2 border border-foreground/20 p-2 w-fit")}>
          <button className="text-sm cursor-pointer px-2" onClick={() => decreaseQuantity(id, color, size)}>-</button>
          <span className="px-2 text-sm">{quantity}</span>
          <button className="text-sm cursor-pointer px-2" onClick={() => increaseQuantity(id, color, size)}>+</button>
        </div>
    )
}

function DeleteCartItem({id, color, size}: {id:string, color: string, size: string}) {
    const { removeFromCart } = useCartStore();

    return (
        <button className="cursor-pointer ml-auto" onClick={() => removeFromCart(id, color, size)}>
            <X size={16} strokeWidth={1} />
        </button>
    )
}

function CartItemPrice({price}: {price: number}) {

    return (
        <p className="text-sm mt-4">
            {formatCurrency(price)}
        </p>
    )
}

CartItem.Image = CartImage;
CartItem.Content = CartContent;
CartItem.ColGroup = CartColGroup;
CartItem.Name = ItemName;
CartItem.Variant = ItemVariant;
CartItem.Total = ItemTotal;
CartItem.QtyControl = QtyControl;
CartItem.Delete = DeleteCartItem;
CartItem.Price = CartItemPrice;

export default CartItem;
