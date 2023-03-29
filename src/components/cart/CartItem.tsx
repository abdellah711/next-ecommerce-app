import { Product } from '@/types/product'
import { urlFor } from '@/utils/img'
import Link from 'next/link'
import React from 'react'
import Counter from '../shared/Counter'

type Props = {
    product: Product
    color?: string
    size?: number
    quantity: number
}

export default function CartItem({ product, color, size, quantity }: Props) {
    return (
        <li className="flex items-center bg-slate-50 rounded-md p-2 gap-5">
            <img
                className="w-24 md:w-36 aspect-square object-contain p-2 bg-white rounded-md self-start"
                src={urlFor(product.attributes.featured_image.data.attributes.url)} alt="" />
            <div className="flex flex-col items-start self-stretch gap-1 flex-1">
                <Link href={`/products/${product.id}`} className="text-lg md:text-xl hover:underline">{product.attributes.title}</Link>
                <p className="text-zinc-500">{color}</p>
                <p className="text-zinc-500">{size}</p>
                <Counter count={quantity} onCountChange={() => { }} className="my-auto"/>
            </div>
            <div className="flex flex-col gap-2 text-center items-center md:flex-row md:gap-9">
                <p className="text-red-500 font-medium w-[5ch] md:text-xl">999$</p>
                <p className="text-red-500 text-xl font-medium w-[5ch]">999$</p>
            </div>
        </li>)
}