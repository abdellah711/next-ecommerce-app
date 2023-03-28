import useEmblaCarousel from 'embla-carousel-react';
import React, { useState } from 'react'

type Props = {
    images: string[];
}

export default function ProductImages({ images }: Props) {
    const [selectedImage, setSelectedImage] = useState(images[0])
    const [ref] = useEmblaCarousel({axis:'y',dragFree:true, containScroll:'keepSnaps',})
    return (
        <div className='flex grow md:basis-1/2 max-h-[min(400px,80vw)]'>
            <div className='embla overflow-hidden shrink-0 border' ref={ref}>
                <div className='embla__container flex flex-col'>
                    {images.map((image, i) => (
                        <div key={i} className='embla__slide w-20 border border-b-gray-200 border-transparent hover:border-red-500 transition duration-400'>
                            <img src={image} className="object-contain cursor-pointer aspect-square p-2 hover:scale-90 transition" alt="" onMouseOver={() => setSelectedImage(image)} />
                        </div>
                    ))}
                </div>
            </div>
            <img src={selectedImage} alt="Product image" className='aspect-square border md:border-l-0 flex-1 object-contain p-5 max-w-full' />
        </div>
    )
}