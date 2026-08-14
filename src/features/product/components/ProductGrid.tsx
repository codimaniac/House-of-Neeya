import cn from "@/lib/cn";

const ProductGrid = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <div className={cn("grid grid-cols-2 @3xl:grid-cols-3 @5xl:grid-cols-4 gap-3 w-full", className)}>
        {children}
    </div>
  )
}

export default ProductGrid