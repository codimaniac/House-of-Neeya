import Input from "@/components/ui/Input"
import { useFormContext } from "react-hook-form";
import { ProductFormValues } from "../../schema/product.schema";

const ProductPricing = () => {
  const { register } = useFormContext<ProductFormValues>();

  return (
    <>
      <h2 className="uppercase text-[11px] text-primary pb-2 tracking-[0.22em] border-b border-b-foreground/20">
        Pricing and Stock
      </h2>

      <div className="flex flex-col md:flex-row justify-between gap-4">
        <Input
          type="number"
          label="Price (₦) *"
          placeholder="12000"
          {...register("price", {
            valueAsNumber: true,
          })}
        />

        <Input
          type="number"
          label="Discounted Price (₦)"
          placeholder="9000"
          {...register("discountedPrice", {
            valueAsNumber: true,
          })}
        />

        <Input
          type="number"
          label="Stock"
          placeholder="5"
          {...register("stock", {
            valueAsNumber: true,
          })}
        />
      </div>
    </>
  );
};

export default ProductPricing