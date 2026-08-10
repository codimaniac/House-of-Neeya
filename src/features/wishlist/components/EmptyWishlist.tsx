import { Heart } from "lucide-react";

const EmptyWishlist = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-5 py-8">
      <div className="flex flex-col items-center gap-2 my-auto">
        <span className="mb-4">
          <Heart size={78} strokeWidth={1} />
        </span>
        <span className="font-serif text-2xl italic">
          Your wishlist is empty
        </span>
        <span className="text-sm text-center font-light tracking-wide">
          Save your favorite items to keep track of them and shop later.
        </span>
      </div>
    </div>
  );
};

export default EmptyWishlist;
