import ProductImages from "@/components/product/ProductImages";
import Counter from "@/components/shared/Counter";
import ProductCard from "@/components/shared/products/ProductCard";
import ProductsCarousel from "@/components/shared/products/ProductsCarousel";
import Rating from "@/components/shared/Rating";
import { formatCurrency } from "@/utils/currency";
import { useState } from "react";
import { Tab } from '@headlessui/react'
import ProductOptions from "@/components/product/ProductOptions";

export default function ProductPage() {
    const [quantity, setQuantity] = useState(1)
    const stock = 10
    return (
        <div className="content my-6">
            <div className="flex gap-9 p-5 flex-wrap">
                {/* images carousel */}
                <ProductImages images={[
                    'http://localhost:5500/phone_website/images/products/iPhone/iphone2.jpeg',
                    'http://localhost:5500/phone_website/images/products/iPhone/iphone3.jpeg',
                    'http://localhost:5500/phone_website/images/products/iPhone/iphone2.jpeg',
                    'http://localhost:5500/phone_website/images/products/iPhone/iphone2.jpeg',
                ]} />
                {/* product details */}
                <div className="flex flex-col items-start gap-2 grow">
                    <h1 className="text-4xl">Product Name</h1>
                    <div className="flex gap-2">
                        <Rating rating={4.5} />
                        <span className="text-zinc-600">(3 Reviews)</span>
                    </div>
                    <p className="text-2xl font-medium text-red-500">{formatCurrency(250.492737)}</p>
                    <p className="text-zinc-600 max-w-[50ch]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt quo eius sapiente temporibus autem ipsam blanditiis totam necessitatibus non! Blanditiis.</p>
                    <div className="flex flex-wrap gap-3 my-2">
                        <ProductOptions label="Size" options={['Small', 'Medium', 'Large']} />
                        <ProductOptions label="Size" options={['Small', 'Medium', 'Large']} />
                        <ProductOptions label="Size" options={['Small', 'Medium', 'Large']} />
                    </div>
                    <Counter count={quantity} onCountChange={setQuantity} min={1} max={stock} />
                    <p className="text-green-500">In Stock ({stock} items)</p>
                    <div className="space-x-2">
                        <button className="text-white bg-zinc-900 py-2 px-5 text-lg rounded hover:bg-zinc-700 active:scale-95 transition">Add to Cart</button>
                        <button className="py-2 px-5 text-lg rounded hover:bg-zinc-100 active:scale-95 transition">Buy Now</button>
                    </div>
                </div>
            </div>

            <Tab.Group>
                <Tab.List className="flex p-1 gap-1 bg-gray-100 rounded">
                    <Tab className={({ selected }) => `flex-1 py-2.5 text-lg text-center rounded ${selected ? 'bg-white' : 'text-gray-500'}`}>Description</Tab>
                    <Tab className={({ selected }) => `flex-1 py-2.5 text-lg text-center rounded ${selected ? 'bg-white' : 'text-gray-500'}`}>Reviews</Tab>
                    <Tab className={({ selected }) => `flex-1 py-2.5 text-lg text-center rounded ${selected ? 'bg-white' : 'text-gray-500'}`}>Shipping</Tab>
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel className="p-5">
                        <p>test1</p>
                    </Tab.Panel>
                    <Tab.Panel className="p-5">
                        <p>test2</p>
                    </Tab.Panel>
                    <Tab.Panel className="p-5">
                        <p>Returns Policy
                            You may return most new, unopened items within 30 days of delivery for a full refund. We'll also pay the return shipping costs if the return is a result of our error (you received an incorrect or defective item, etc.).
                            </p>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>

            <h2 className="text-2xl text-center font-medium text-slate-600 my-6">Related Products</h2>
            <ProductsCarousel>
                <ProductCard title="Apple iPhone 13" image="http://localhost:5500/phone_website/images/products/iphone/iphone3.jpeg" price={999} oldPrice={1200} link={'#'} />
                <ProductCard title="Apple iPhone 13" image="http://localhost:5500/phone_website/images/products/iphone/iphone3.jpeg" price={999} oldPrice={1200} link={'#'} />
                <ProductCard title="Apple iPhone 13" image="http://localhost:5500/phone_website/images/products/iphone/iphone3.jpeg" price={999} oldPrice={1200} link={'#'} />
                <ProductCard title="Apple iPhone 13" image="http://localhost:5500/phone_website/images/products/iphone/iphone3.jpeg" price={999} oldPrice={1200} link={'#'} />

            </ProductsCarousel>
        </div>
    )
}
