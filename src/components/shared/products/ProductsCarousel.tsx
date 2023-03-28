import React, { PropsWithChildren } from 'react'

import useEmblaCarousel from 'embla-carousel-react'

const ProductsCarousel = ({ children }: PropsWithChildren) => {
    const [carouselRef,] = useEmblaCarousel({ dragFree: true, containScroll: 'keepSnaps',})

    return (
        <div className='embla overflow-hidden' ref={carouselRef}>
            <div className='embla__container flex gap-5'>
                {children}
            </div>
        </div>
    )
}

export default ProductsCarousel