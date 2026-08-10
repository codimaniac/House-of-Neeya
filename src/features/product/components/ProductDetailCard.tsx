import { Overlay } from "@/components";
import { useNavToggle } from "@/providers/NavToggleContext";
import { ReactNode } from "react";

interface ProductDetailCardProps {
    children: ReactNode;
    className?: string;
}

function ProductDetailCard({ children, className }: ProductDetailCardProps) {
  const { isOpen, closeNav } = useNavToggle();
  return (
    <>
      <Overlay
        className={`md:hidden z-999 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        onClick={closeNav}
      ></Overlay>
      <div
        className={`fixed inset-0 z-1000 w-4/5 md:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <ul
          className={`flex flex-col justify-center bg-foreground text-background h-full px-5 py-12 gap-12 text-sm md:hidden ${className}`}
        >
          {children}
        </ul>
      </div>
    </>
  );
}

export default ProductDetailCard;