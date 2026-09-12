import { useFormContext } from "react-hook-form";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/SelectInput";

import {
  ProductCategory,
} from "@/features/product/types/product.types";

import { ProductFormValues } from "../../schema/product.schema";

interface ProductDetailsProps {
  categories: ProductCategory[];
}

const ProductDetails = ({ categories }: ProductDetailsProps) => {
  const { register } = useFormContext<ProductFormValues>();

  return (
    <>
      <h2 className="uppercase text-[11px] text-primary pb-2 tracking-[0.22em] border-b border-b-foreground/20">
        Product Details
      </h2>

      <Input
        type="text"
        label="Product Name *"
        placeholder="Luxury Tote Bag"
        className="min-w-70"
        {...register("name")}
      />

      <div className="flex flex-col md:flex-row justify-between gap-4">
        <Input
          type="text"
          label="Slug *"
          placeholder="luxury-tote-bag"
          className="min-w-70"
          {...register("slug")}
        />

        <Input
          type="text"
          label="Brand *"
          placeholder="House of Neeya"
          className="min-w-70"
          {...register("brand")}
        />
      </div>

      <Input
        type="text"
        label="Description *"
        placeholder="A brief description of the piece"
        className="min-w-70"
        {...register("description")}
      />

      <div className="flex flex-col md:flex-row justify-between gap-4">
        <Select {...register("category")} label="Category">
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Select>

        <Input
          type="text"
          label="SKU *"
          placeholder="HON-DOL-001"
          className="min-w-70"
          {...register("sku")}
        />
      </div>
    </>
  );
};

export default ProductDetails;