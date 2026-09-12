import { Button } from "@/components";
import Input from "@/components/ui/Input";
import { Plus, Trash2 } from "lucide-react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { ProductFormValues } from "../../schema/product.schema";

const ProductVariants = () => {
  const { control, register } =
    useFormContext<ProductFormValues>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "variants",
  });

  return (
    <>
      <h2>
        Variant
      </h2>

      {fields.map((field, index) => (
        <div key={field.id} className="flex flex-col md:flex-row gap-2 items-center">
          <Input
            type="text"
            label="Color"
            placeholder="Burgundy"
            {...register(`variants.${index}.color`)}
          />

          <Input
            type="string"
            label="Size"
            placeholder="39"
            {...register(`variants.${index}.size`)}
          />

          <Input
            type="number"
            label="Stock *"
            placeholder="5"
            {...register(`variants.${index}.stock`, {
              valueAsNumber: true,
            })}
          />

          <button type="button" className="flex items-center justify-center mt-4 cursor-pointer" onClick={() => remove(index)}>
            <Trash2
              size={14}
            />
          </button>
        </div>
      ))}

      <Button
        type="button"
        variant="link"
        onClick={() =>
          append({
            id: crypto.randomUUID(),
            color: "",
            size: "",
            stock: 0,
          })
        }
      >
        <Plus />
        Add Variant
      </Button>
    </>
  );
};

export default ProductVariants;