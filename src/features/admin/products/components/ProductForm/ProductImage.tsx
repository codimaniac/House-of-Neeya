import Input from "@/components/ui/Input";
import { useFormContext } from "react-hook-form";
import type { ProductFormValues } from "../../schema/product.schema";

const ProductImage = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormValues>();

  return (
    <>
      <h2 className="uppercase text-[11px] text-primary pb-2 tracking-[0.22em] border-b border-b-foreground/20">
        {" "}
        Image{" "}
      </h2>
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <Input
          type="text"
          label="Image URL *"
          placeholder="https://..."
          className="min-w-70"
          error={errors.image?.src?.message}
          {...register("image.src")}
        />
        <Input
          type="text"
          label="ALT Text *"
          placeholder="A picture of a leather tote bag."
          className="min-w-70"
          error={errors.image?.alt?.message}
          {...register("image.alt")}
        />
      </div>
    </>
  );
};
export default ProductImage;
