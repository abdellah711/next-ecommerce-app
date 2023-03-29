
type Props = {}

export default function CartSummary({ }: Props) {
    return (
        <div className="ml-auto grid grid-cols-2 gap-3 px-6 py-4 my-8 text-lg w-full sm:w-auto sm:min-w-[350px] text-zinc-600 bg-zinc-50 rounded-md">
            <h2 className="col-span-2 text-zinc-800 font-medium text-xl mb-5">Order Summary</h2>
            <p>Subtotal:</p>
            <p className="text-end">999$</p>
            <p>Shipping fees:</p>
            <p className="text-end">9$</p>
            <p className="text-zinc-800 font-medium">Total:</p>
            <p className="text-zinc-800 font-medium text-end">999$</p>
            <button className="col-start-2 mt-5 bg-zinc-800 text-white px-4 py-2 rounded-md active:scale-95 hover:bg-zinc-700 transition">Checkout</button>
        </div>
    )
}