import { Product } from '@/types/product'
import { urlFor } from '@/utils/img'
import useEmblaCarousel from 'embla-carousel-react'
import ProductCard from './ProductCard'

const ProductsCarousel = ({ products }: { products: Product[] }) => {
    const [carouselRef,] = useEmblaCarousel({ dragFree: true, containScroll: 'keepSnaps', })

    return products?.length > 0 ? (
        <div className='embla overflow-hidden' ref={carouselRef}>
            <div className='embla__container flex gap-5'>
                {
                    products?.map(({ id, attributes: { title, price, old_price, featured_image } }) => (
                        <ProductCard key={id} title={title} image={urlFor(featured_image.data.attributes.url)} price={price} oldPrice={old_price} link={`/products/${id}`} />
                    ))
                }
            </div>
        </div>
    ): <div className="text-center text-xl text-slate-400 py-12">No products found</div>
}

export default ProductsCarousel