import { ProductFormValues } from "@/features/admin/products/schema/product.schema";
import type {
    Product,
    ProductCategory,
    ProductTag,
    ProductImage,
    ProductVariant,
} from "../types/product.types";

type ProductDatabaseRow = {
    id: string;
    name: string;
    slug: string;
    description: string;
    category: string;
    brand: string;
    price: number;
    discountedPrice?: number | null;
    image: ProductImage;
    variants?: ProductVariant[] | null;
    rating: number;
    reviewCount: number;
    tags?: string[] | null;
    isFeatured?: boolean | null;
    isNewArrival?: boolean | null;
    stock: number;
    sku: string;
    createdAt: string;
    updatedAt: string;
};

export function mapProductFromDatabase(
    product: ProductDatabaseRow
): Product {
    return {
        id: product.id,
        name: product.name,
        slug: product.slug,
        description: product.description,
        category: product.category as ProductCategory,
        brand: product.brand,
        price: product.price,
        discountedPrice: product.discountedPrice ?? undefined,

        image: product.image,

        variants: product.variants ?? [],

        rating: product.rating,
        reviewCount: product.reviewCount,

        tags: (product.tags ?? []) as ProductTag[],

        isFeatured: product.isFeatured ?? false,
        isNewArrival: product.isNewArrival ?? false,

        stock: product.stock,
        sku: product.sku,

        createdAt: product.createdAt,
        updatedAt: product.updatedAt,
    };
}

export function mapProductFormToDatabase(
    data: ProductFormValues
) {
    return {
        name: data.name,
        slug: data.slug,
        description: data.description,
        category: data.category,
        brand: data.brand,
        price: data.price,
        discountedPrice: data.discountedPrice,
        stock: data.stock,
        sku: data.sku,
        image: data.image,
        variants: data.variants,
        tags: data.tags,
        isFeatured: data.isFeatured,
        isNewArrival: data.isNewArrival,
    };
}