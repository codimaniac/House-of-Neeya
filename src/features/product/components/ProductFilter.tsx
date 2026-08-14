const ProductFilter = ({isOpen}: {isOpen: boolean}) => {
  return (
    <aside className={`md:sticky md:top-35 rounded-2xl h-fit p-8 bg-white w-full max-w-100 transition-all duration-3000 ease-in-out z-50 ${isOpen ? "left-0" : "-left-full"}`}>
        <div className="flex items-baseline justify-between pb-4 border-b border-b-foreground/10">
            <div className="font-serif font-light text-foreground text-[24px]">Filters</div>
            <button className="uppercase text-xs text-foreground/60 hover:text-foreground cursor-pointer tracking-widest">Clear all</button>
        </div>
        <div className="flex flex-col gap-8 py-4 text-sm">
          <div className="flex flex-col gap-4">
            <div className="uppercase text-xs tracking-widest">Category</div>
            <div className="flex gap-2">
              <input type="checkbox" name="men" id="men" />
              <label htmlFor="men" className="text-foreground/60">Men</label>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" name="women" id="women" />
              <label htmlFor="women" className="text-foreground/60">Women</label>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" name="accessories" id="accessories" />
              <label htmlFor="accessories" className="text-foreground/60">Accessories</label>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="uppercase text-xs tracking-widest">Price Range</div>
            <div className="flex gap-2">
              <input type="range" name="price-range" id="men" className="w-full" min={0} max={200000} />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="uppercase text-xs tracking-widest">Availability</div>
            <div className="flex gap-2">
              <input type="radio" name="stock" id="men" defaultChecked />
              <label htmlFor="men" className="text-foreground/60">All Items</label>
            </div>
            <div className="flex gap-2">
              <input type="radio" name="stock" id="women" />
              <label htmlFor="women" className="text-foreground/60">In Stock Only</label>
            </div>
          </div>
        </div>
    </aside>
  )
}

export default ProductFilter