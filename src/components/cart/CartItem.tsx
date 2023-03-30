import { useCartStore } from '@/store/cart'
import { Product } from '@/types/product'
import { formatCurrency } from '@/utils/currency'
import { urlFor } from '@/utils/img'
import Link from 'next/link'
import React from 'react'
import Counter from '../shared/Counter'
import DeleteIcon from '@heroicons/react/24/outline/TrashIcon'

type Props = {
    product: Product
    color?: string
    size?: number
    quantity: number
}

export default function CartItem({ product, color, size, quantity }: Props) {
    const changeQuantity = useCartStore(({ changeQuantity }) => changeQuantity)
    const deleteItem = useCartStore(({ deleteItem }) => deleteItem)

    return (
        <li className="flex items-center bg-slate-50 rounded-md p-2 gap-5 relative">
            <img
                className="w-24 md:w-36 aspect-square object-contain p-2 bg-white rounded-md self-start"
                src={urlFor(product.attributes.featured_image.data.attributes.url)} alt="" />
            <div className="flex flex-col items-start self-stretch gap-1 flex-1">
                <Link href={`/products/${product.id}`} className="text-lg md:text-xl hover:underline">{product.attributes.title}</Link>
                <p className="text-zinc-500">{color}</p>
                <p className="text-zinc-500">{size}</p>
                <Counter
                    count={quantity}
                    onCountChange={(qty) => changeQuantity(product, qty, color, size)}
                    min={1}
                    max={product.attributes.stock}
                    className="my-auto" />
            </div>
            <div className="flex flex-col gap-2 pr-2 text-center items-center sm:flex-row sm:gap-9">
                <p className="text-red-500 font-medium md:text-xl">{formatCurrency(product.attributes.price)}</p>
                <p className="text-red-500 text-xl font-medium">{formatCurrency(product.attributes.price * quantity)}</p>
                <button onClick={() => deleteItem(product, color, size)}>
                    <DeleteIcon className='w-7 text-zinc-600 absolute sm:static sm:w-8 right-1 top-1 p-1 rounded hover:text-red-500 hover:bg-red-100 hover:rounded-lg transition-all duration-200' />
                </button>
            </div>
        </li>)
}