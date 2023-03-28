import { useMediaQuery } from '@/hooks/useMediaQuery';
import useEmblaCarousel from 'embla-carousel-react';
import React, { useState } from 'react'

type Props = {
    images: string[];
}

export default function ProductImages({ images }: Props) {
    const [selectedImage, setSelectedImage] = useState(images[0])
    const isTablet = useMediaQuery('(max-width: 1024px)')

    const [ref] = useEmblaCarousel({ axis: isTablet ? 'x' : 'y', dragFree: true, containScroll: 'keepSnaps', })

    return (
        <div className='flex shrink-0 lg:max-h-[min(490px,80vw)] flex-col-reverse lg:flex-row self-stretch lg:self-start'>
            <div className='embla overflow-hidden shrink-0 border' ref={ref}>
                <div className='embla__container flex lg:flex-col lg:h-full'>
                    {images.map((image, i) => (
                        <div key={i} className='embla__slide w-20 border border-r-gray-200 lg:border-b-gray-200 border-transparent hover:border-red-500 transition duration-400'>
                            <img src={image} className="object-contain cursor-pointer aspect-square p-2 hover:scale-90 transition" alt="" onMouseOver={() => setSelectedImage(image)} />
                        </div>
                    ))}
                </div>
            </div>
            <div className='p-5 border border-b-0 lg:border-b lg:border-l-0'>
                <img src={selectedImage} alt="Product image" className='w-96 aspect-square object-contain mx-auto' />
            </div>
        </div>
    )
}