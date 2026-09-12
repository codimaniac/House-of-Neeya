import { FieldErrors, FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from '@/components';
import { useProductFormToggle } from '../../provider/ProductFormToggleContext';
import { X } from 'lucide-react';
import ProductDetails from './ProductDetails';
import ProductPricing from './ProductPricing';
import ProductImage from './ProductImage';
import ProductVariants from './ProductVariants';
import ProductTags from './ProductTags';
import { ProductFormValues, productSchema } from "../../schema/product.schema";
import { PRODUCT_CATEGORIES, PRODUCT_TAGS } from "../../constants/product.constants";
import { createProduct } from "@/features/product/api/product.services";
import { useState } from "react";

const ProductForm = () => {
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      slug: "",
      description: "",
      category: "Clothing",
      brand: "",
      price: 0,
      discountedPrice: undefined,
      stock: 0,
      sku: "",
      image: {
        id: "",
        src: "",
        alt: "",
      },
      variants: [],
      tags: [],
      isFeatured: false,
      isNewArrival: false,
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onInvalid = (errors: FieldErrors<ProductFormValues>) => {
    console.log("FORM ERRORS:", errors);
};

  const onSubmit = async (data: ProductFormValues) => {
    try {
      setIsSubmitting(true);

      const product = await createProduct(data);

      console.log("Product created:", product);

      form.reset();

    } catch (error) {
      console.error("Failed to create product:", error);

    } finally {
      setIsSubmitting(false);
    }
  };

  const { action, CloseProductForm } = useProductFormToggle();

  return (
    <FormProvider {...form}>
      <div className="bg-background inset-0 overflow-y-auto">
        <form className="flex flex-col flex-5 gap-6 p-8" onSubmit={form.handleSubmit(onSubmit, onInvalid)}>
          <h1 className="flex items-center justify-between text-4xl font-serif capitalize">
            {action} Product
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={CloseProductForm}
            ><X size={16} className="cursor-pointer" onClick={CloseProductForm} /></Button></h1>
          <ProductDetails categories={PRODUCT_CATEGORIES} />
          <ProductPricing />
          <ProductImage />
          <ProductVariants />
          <ProductTags tags={PRODUCT_TAGS} />
          <div className="flex justify-end gap-2">
            <Button type="button" variant="ghost" className="w-fit">Save as draft</Button>
            <Button type="submit" className="w-fit" disabled={isSubmitting}>
              {isSubmitting ? "Publishing..." : "Publish"}
            </Button>
          </div>
        </form>
      </div>
    </FormProvider>
  );
}

export default ProductForm