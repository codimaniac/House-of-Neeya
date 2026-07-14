import { products } from "../data/products";

const delay = async (ms: number) => {
    new Promise(resolve => setTimeout(resolve, ms))
}

export async function getProducts() {
    await delay(5000)

    return products;
}

export async function getProduct(slug: string) {
    await delay(5000)

    return products.find((product) => product.slug === slug);
}