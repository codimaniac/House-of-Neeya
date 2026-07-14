import { Button } from "@/components";

const ProductCardLoader = () => {
  return (
    <div
      className={`flex flex-col overflow-hidden relative w-full rounded-lg`}
    >
      <ProductImageLoader />
      <ProductCardLoaderContent />
      <Button variant="secondary" disabled>Add to Cart</Button>
    </div>
  );
};

function ProductImageLoader() {
  return <div className="w-full aspect-4/5 bg-neutral-300 animate-pulse"></div>;
}

function ProductCardLoaderContent() {
  return <div className={`flex flex-col gap-2 p-2 md:p-3 lg:p-4 animate-pulse`}>
    <ProductCategory />
    <ProductName />
    <ProductPrice />
    <ProductDescription />
  </div>;
}

function ProductCategory() {
  return (
    <span
      className={`block h-4 w-3/10 bg-neutral-300 rounded-sm`}
    ></span>
  );
}

function ProductName() {
  return (
    <span
      className={`block h-4 w-2/4 bg-neutral-300 rounded-sm`}
    ></span>
  );
}

function ProductPrice() {
  return (
    <span
      className={`block h-4 w-1/4 bg-neutral-300 rounded-sm`}
    ></span>
  );
}

function ProductDescription() {
  return (
    <div className={`flex flex-col gap-1 text-xs md:text-sm text-foreground/60 line-clamp-2`}>
      <span
        className={`block h-4 w-full bg-neutral-300 rounded-sm`}
      ></span>
      <span
        className={`block h-4 w-full bg-neutral-300 rounded-sm`}
      ></span>
    </div>
  );
}

export default ProductCardLoader;
