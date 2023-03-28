
import Counter from "@/components/shared/Counter";
import Rating from "@/components/shared/Rating";
import { formatCurrency } from "@/utils/currency";
import ProductOptions from "@/components/product/ProductOptions";
import { ProductDetails } from "@/types/product";
import { useState } from "react";


type Props = {
    product: ProductDetails
}

export default function ProductInfo({ product }: Props) {
    const [quantity, setQuantity] = useState(1)

    return (
        <div className="flex flex-col items-start gap-2 flex-1 basis-[50ch]">
            <h1 className="text-2xl md:text-4xl">{product.attributes.title}</h1>
            <div className="flex gap-2">
                <Rating rating={4.5} />
                <span className="text-zinc-600">(3 Reviews)</span>
            </div>
            <p className="text-xl md:text-2xl font-medium text-red-500">{formatCurrency(product.attributes.price)}</p>
            <p className="text-zinc-600 ">{product.attributes.short_description}</p>
            <div className="flex flex-wrap gap-3 my-2">
                <ProductOptions label="Size" options={['Small', 'Medium', 'Large']} />
                <ProductOptions label="Size" options={['Small', 'Medium', 'Large']} />
                <ProductOptions label="Size" options={['Small', 'Medium', 'Large']} />
            </div>
            <Counter count={quantity} onCountChange={setQuantity} min={1} max={product.attributes.stock} />
            <p className="text-green-500">In Stock ({product.attributes.stock} items)</p>
            <div className="space-x-2">
                <button className="text-white bg-zinc-900 py-2 px-5 text-lg rounded hover:bg-zinc-700 active:scale-95 transition">Add to Cart</button>
                <button className="py-2 px-5 text-lg rounded hover:bg-zinc-100 active:scale-95 transition">Buy Now</button>
            </div>
        </div>
    )
}