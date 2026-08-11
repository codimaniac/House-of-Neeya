import cn from "@/lib/cn";

const ProductGrid = ({children, className}: {children: React.ReactNode, className: string}) => {
  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3", className)}>
        {children}
    </div>
  )
}

export default ProductGrid