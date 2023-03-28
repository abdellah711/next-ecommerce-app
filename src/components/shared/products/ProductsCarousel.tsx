import { Product } from '@/types/product'
import { urlFor } from '@/utils/img'
import useEmblaCarousel from 'embla-carousel-react'
import ProductCard from './ProductCard'

const ProductsCarousel = ({ products }: { products: Product[] }) => {
    const [carouselRef,] = useEmblaCarousel({ dragFree: true, containScroll: 'keepSnaps', })

    return (
        <div className='embla overflow-hidden' ref={carouselRef}>
            <div className='embla__container flex gap-5'>
                {
                    products?.map(({ id, attributes: { title, price, old_price, featured_image } }) => (
                        <ProductCard key={id} title={title} image={urlFor(featured_image.data.attributes.url)} price={price} oldPrice={old_price} link={`/products/${id}`} />
                    ))
                }
            </div>
        </div>
    )
}

export default ProductsCarousel