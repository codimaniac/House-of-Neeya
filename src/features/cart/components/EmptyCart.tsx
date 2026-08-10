import { LucideShoppingBag } from "lucide-react";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-5 py-8">
      <div className="flex flex-col items-center gap-2 my-auto">
        <span className="mb-4">
          <LucideShoppingBag size={78} strokeWidth={1} />
        </span>
        <span className="font-serif text-2xl italic">Your bag is empty</span>
        <span className="text-sm text-center font-light tracking-wide">
          Discover our curated collections and find your next favourite piece.
        </span>
      </div>
    </div>
  );
};

export default EmptyCart;
