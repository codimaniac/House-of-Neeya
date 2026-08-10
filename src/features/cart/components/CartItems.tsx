import { ReactNode } from "react";

const CartItems = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col gap-2 overflow-y-auto scroll-smooth">{children}</div>;
};

export default CartItems;
