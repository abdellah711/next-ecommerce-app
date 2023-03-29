import { useCartStore } from "@/store/cart"
import { formatCurrency } from "@/utils/currency"
import { useMemo } from "react"

export default function CartSummary() {
    const items = useCartStore(state => state.cartItems)
    const total = useMemo(() => items.reduce((acc, item) => acc + item.product.attributes.price * item.quantity, 0), [items])
    const fees = total > 0 ? 10 : 0
    return (
        <div className="ml-auto grid grid-cols-2 gap-3 px-6 py-4 my-8 text-lg w-full sm:w-auto sm:min-w-[350px] text-zinc-600 bg-zinc-50 rounded-md">
            <h2 className="col-span-2 text-zinc-800 font-medium text-xl mb-5">Order Summary</h2>
            <p>Subtotal:</p>
            <p className="text-end">{formatCurrency(total)}</p>
            <p>Shipping fees:</p>
            <p className="text-end">{formatCurrency(fees)}</p>
            <p className="text-zinc-800 font-medium">Total:</p>
            <p className="text-zinc-800 font-medium text-end">{formatCurrency(total + fees)}</p>
            <button className="col-start-2 mt-5 bg-zinc-800 text-white px-4 py-2 rounded-md active:scale-95 hover:bg-zinc-700 transition">Checkout</button>
        </div>
    )
}