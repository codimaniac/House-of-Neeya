import { Product } from "../types/product.types";

const categories = [
    "Men's Footwear",
    "Women's Footwear",
    "Clothing",
    "Handbags"
] as const;

const brands = ["House of Neeya"];

const productsNames = {
    "Men's Footwear": [
        "Classic Leather Loafers",
        "Executive Derby Shoes",
        "Canvas Sneakers",
        "Running Trainers",
        "Casual Slip-ons",
        "Premiun Monk Strap",
        "Oxford Dress Shoe",
        "Weekend Sneakers",
        "Sports Trainers",
        "Suede Loafers",
        "Formal Lace Shoes",
        "Leather Sandals",
        "High Top Sneakers",
        "Classic Boots",
        "Driving Moccasins",
        "Premium Sneakers",
        "Urban Trainers",
    ],

    "Women's Footwear": [
        "Elegant Heels",
        "Block Heel Sandals",
        "Luxury Pumps",
        "Leather Flats",
        "Comfort Sneakers",
        "Platform Sandals",
        "Ankle Boots",
        "Classic Loafers",
        "Pointed Heels",
        "Designers Slides",
        "Wedge Sandals",
        "Fashion Sneakers",
        "Ballet Flats",
        "Chunky Heels",
        "Luxury Mules",
        "Office Pumps",
        "Strappy Heels",
        "Summer Sandals",
    ],
    
    "Clothing": [
        "Classic T-shirt",
        "Premium Polo",
        "Linen Shirt",
        "Oxford Shirt",
        "Slim Fit Jean",
        "Cargo Pants",
        "Denim Jackets",
        "Blazer",
        "Hoodie",
        "Sweatshirt",
        "Maxi Dress",
        "Midi Dress",
        "Pleated Skirt",
        "Wide Leg Trousers",
        "Joggers",
        "Leather Jacket",
        "Cardigan",
        "Floral Dress",
    ],

    "Handbags": [
        "Luxury Tote",
        "Crossbody Bag",
        "Leather Handbag",
        "Mini Purse",
        "Office Tote",
        "Shoulder Bag",
        "Evening Clutch",
        "Travel Duffel",
        "Bucket Bag",
        "Sling bag",
        "Top Handle Bag",
        "Designer Satchel",
        "Weekend Bag",
        "Laptop Tote",
        "Chain Bag",
        "Mini Crossbody",
    ],
}

const colors = [
    "Black",
    "Brown",
    "White",
    "Blue",
    "Red",
    "Green",
    "Cream",
    "Beige",
    "Burgundy",
    "Nude",
]

const sizes = ["S", "M", "L", "XL", "38", "39", "40", "41", "42", "43", "44", "45"];

const tags = ["New", "Featured", "Sales", "Best-Seller"] as const;

const slugify = (text: string) => {
    return text.toLowerCase().replace(/'/g, "").replace(/\s+/g, "-");
}

export const products: Product[] = Array.from({length: 12}, (_, index) => {
    const category = categories[index % categories.length]

    const names = productsNames[category]

    const name = `${names[index % names.length]} ${Math.floor(index / categories.length) + 1 }`

    const price = Math.floor((Math.random() + 1) * 100) * 1000 - 85000

    const hasDiscount = Math.random() > 0.4

    return {
        id: crypto.randomUUID(),
        name: name,
        slug: slugify(name),
        description: `Premium ${category.toLowerCase()} from House of Neeya crafted with exceptional quality and modern style.`,
        category: category,
        brand: brands[0],
        price: price,
        discountedPrice: hasDiscount ? Math.floor(price * 0.85) : undefined,
        images: {
            id: crypto.randomUUID(),
            src: "https://res.cloudinary.com/dagamvlju/image/upload/q_auto/f_auto/v1781863746/IMG-20260604-WA0023_nlh91a.jpg",
            alt: name,
        },
        variants: [
            {
                id: crypto.randomUUID(),
                color: colors[index % colors.length],
                sizes: sizes[index % sizes.length],
                stock: Math.floor(Math.random() * 20) + 5
            },
            {
                id: crypto.randomUUID(),
                color: colors[index % colors.length],
                sizes: sizes[index % sizes.length],
                stock: Math.floor(Math.random() * 20) + 5
            }
        ],
        rating: Number((Math.random() * 1.5 + 3.5).toFixed(1)),
        reviewCount: Math.floor(Math.random() * 250) + 10,
        tags: [tags[index % tags.length]],
        isFeatured: index % 5 === 0,
        isNewArrival: index  % 7 === 0,
        stock: Math.floor(Math.random() * 100) + 10,
        sku: `HON-${String(index + 1).padStart(4, "0")}`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };
});