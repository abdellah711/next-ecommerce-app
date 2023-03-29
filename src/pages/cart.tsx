import CartIcon from '@heroicons/react/24/solid/ShoppingCartIcon'

import CartItem from "@/components/cart/CartItem"
import CartSummary from "@/components/cart/CartSummary"
import { useCartStore } from "@/store/cart"


const CartPage = () => {
    const items = useCartStore(state => state.cartItems)
    return (
        <div className="content min-h-screen w-full">
            <h1 className="text-3xl py-7 text-zinc-700">
                <CartIcon className="w-8 h-8 inline-block mr-4 pb-1" />
                Cart
            </h1>
            {items.length > 0 ? (
                <ul className='space-y-2'>
                    {items.map((item) => (<CartItem key={`${item.product.id}-${item.color}-${item.size}`} {...item} />))}
                </ul>) 
                : (
                <div className="text-center text-xl text-zinc-500 py-12">There is no item in your cart</div>
            )
            }
            <div className="flex">
                {items.length > 0 && (<CartSummary />)}
            </div>
        </div>
    )
}

export default CartPage