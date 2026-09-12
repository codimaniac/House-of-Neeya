import { type ProductTag } from "@/features/product/types/product.types"
import { useFormContext } from "react-hook-form";
import { ProductFormValues } from "../../schema/product.schema";
import Checkbox from "@/components/ui/Checkbox";

const ProductTags = ({ tags }: { tags: ProductTag[] }) => {
  const { register, watch, setValue } = useFormContext<ProductFormValues>();

  const selectedTags = watch("tags") ?? [];

  const toggleTag = (tag: ProductTag) => {
    const exists = selectedTags.includes(tag);

    if (exists) {
      setValue(
        "tags",
        selectedTags.filter((item) => item !== tag)
      );
    } else {
      setValue("tags", [...selectedTags, tag]);
    }
  };

  return (
    <>
      <h2>
        Tags and Visibility
      </h2>

      <div className="flex gap-2">
        {tags.map((tag) => {
          const selected = selectedTags.includes(tag);

          return (
            <button
              key={tag}
              type="button"
              onClick={() => toggleTag(tag)}
              className={`py-2 px-4 text-xs rounded-full ${selected
                ? "bg-primary text-background"
                : "bg-white"
                }`}
            >
              {tag}
            </button>
          );
        })}
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <Checkbox
          label="Feature on home page"
          {...register("isFeatured")}
          className="text-xs"
        />

        <Checkbox
          label="Mark as new arrival"
          {...register("isNewArrival")}
          className="text-xs"
        />
      </div>
    </>
  );
};

export default ProductTags