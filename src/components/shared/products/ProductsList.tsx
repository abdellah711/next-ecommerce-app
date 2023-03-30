import { Product } from '@/types/product'
import { urlFor } from '@/utils/img'
import clsx from 'clsx'
import { ComponentProps } from 'react'
import ProductCard from './ProductCard'

export default function ProductsList({ className, products, ...props }: ComponentProps<'div'> & { products: Product[] }) {
    return (
        <div className={clsx(
            "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5",
            className
        )} {...props}>
            {
                products?.length > 0 ?
                    products?.map(({ id, attributes: { title, price, old_price, featured_image } }) => (
                        <ProductCard key={id} title={title} image={urlFor(featured_image.data.attributes.url)} price={price} oldPrice={old_price} link={`/products/${id}`} />
                    ))
                    :
                    <div className="text-center text-xl text-slate-400 py-12 col-start-1 col-end-[-1]">No products found</div>
            }
        </div>
    )
}