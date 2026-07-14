export default function formatCurrency(price: number) {
    return price.toLocaleString("en-NG", {
        style: "currency",
        currency: "NGN"
    })
}