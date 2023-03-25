import React, { PropsWithChildren } from 'react'

import useEmblaCarousel from 'embla-carousel-react'

type Props = {}

const ProductsCarousel = ({ children }: PropsWithChildren) => {
    const [carouselRef,] = useEmblaCarousel({ align: 'start'})

    return (
        <div className='embla overflow-hidden' ref={carouselRef}>
            <div className='embla__container flex gap-5'>
                {children}
            </div>
        </div>
    )
}

export default ProductsCarousel