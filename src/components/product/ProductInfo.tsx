
import Counter from "@/components/shared/Counter";
import Rating from "@/components/shared/Rating";
import { formatCurrency } from "@/utils/currency";
import ProductOptions from "@/components/product/ProductOptions";
import { ProductDetails } from "@/types/product";
import { useState } from "react";
import { useCartStore } from "@/store/cart";
import { Dialog } from "@headlessui/react";
import Link from "next/link";
import AddedToCartDialog from "./AddedToCartDialog";
import { useRouter } from "next/router";


type Props = {
    product: ProductDetails
}

export default function ProductInfo({ product }: Props) {
    const [quantity, setQuantity] = useState(1)
    const [openDialog, setOpenDialog] = useState(false)
    const [selectedColor, setSelectedColor] = useState(product.attributes.colors?.[0])
    const [selectedSize, setSelectedSize] = useState(product.attributes.sizes?.[0])

    const router = useRouter()

    const addToCart = useCartStore(state => state.addToCart)

    const handleAddToCart = () => {
        addToCart(product, quantity, selectedColor, selectedSize)
        setOpenDialog(true)
    }

    const handleBuyNow = () => {
        addToCart(product, quantity, selectedColor, selectedSize)
        router.push('/cart')
    }

    return (
        <>
            <div className="flex flex-col items-start gap-2 flex-1 basis-[50ch]">
                <h1 className="text-2xl md:text-4xl">{product.attributes.title}</h1>
                <div className="flex gap-2">
                    <Rating rating={4.5} />
                    <span className="text-zinc-600">(3 Reviews)</span>
                </div>
                <p className="text-xl md:text-2xl font-medium text-red-500">
                    {formatCurrency(product.attributes.price)}
                    {product.attributes.old_price && (<span className="ml-3 text-base text-zinc-400 font-normal line-through">{formatCurrency(product.attributes.old_price)}</span>)}
                </p>
                <p className="text-zinc-600 ">{product.attributes.short_description}</p>
                <div className="flex flex-wrap gap-3 my-2">
                    {product.attributes.colors && (<ProductOptions label="Colors" options={product.attributes.colors} value={selectedColor} onChange={v => setSelectedColor(v as string)} />)}
                    {product.attributes.sizes && (<ProductOptions label="Sizes" options={product.attributes.sizes} value={selectedSize} onChange={v => setSelectedSize(+v)} />)}
                </div>
                <Counter count={quantity} onCountChange={setQuantity} min={1} max={product.attributes.stock} />
                {product.attributes.stock === 0 ?
                    (<p className="text-red-500">Out of Stock</p>)
                    :
                    (
                        <>
                            <p className="text-green-500">In Stock ({product.attributes.stock} items)</p>
                            <div className="space-x-2">
                                <button onClick={handleAddToCart} className="text-white bg-zinc-900 py-2 px-5 text-lg rounded hover:bg-zinc-700 active:scale-95 transition">Add to Cart</button>
                                <button onClick={handleBuyNow} className="py-2 px-5 text-lg rounded hover:bg-zinc-100 active:scale-95 transition">Buy Now</button>
                            </div>
                        </>
                    )
                }
            </div>
            <AddedToCartDialog openDialog={openDialog} onClose={() => setOpenDialog(false)} />
        </>
    )
}