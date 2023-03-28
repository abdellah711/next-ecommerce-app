
import { useEffect, useState } from "react"

import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import clsx from "clsx"

import LeftArrowIcon from '@heroicons/react/24/outline/ArrowLeftIcon'
import RightArrowIcon from '@heroicons/react/24/outline/ArrowRightIcon'

import SliderItem from "./SliderItem"
import { Slide } from "@/types/slide"
import { urlFor } from "@/utils/img"


const Slider = ({ slides }: { slides: Slide[] }) => {
    const [carouselRef, api] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5500 })])
    const [currentPosition, setCurrentPosition] = useState(0)


    useEffect(() => {
        api?.on('select', () => {
            setCurrentPosition(api?.selectedScrollSnap())
        })
    }, [api])

    return (
        <div className="embla overflow-hidden flex-1 bg-gray-100 relative cursor-grab" ref={carouselRef}>

            <div className="embla__container flex">
                {slides.map(({ id, attributes: { title, sub_title, description, image } }) => (
                    <SliderItem key={id} title={title} subTitle={sub_title} description={description} image={urlFor(image?.data.attributes.url!)} />
                ))
                }
            </div>

            <button className="absolute left-7 bottom-1/2 -translate-y-1/2" onClick={() => api?.scrollPrev()}>
                <LeftArrowIcon className="w-7" />
            </button>

            <button className="absolute right-5 bottom-1/2 -translate-y-1/2" onClick={() => api?.scrollNext()}>
                <RightArrowIcon className="w-7" />
            </button>

            <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={clsx('w-3 aspect-square rounded-full', currentPosition === index ? 'bg-zinc-900' : 'bg-gray-300',)}
                        onClick={() => api?.scrollTo(index)}
                    />))}
            </div>
        </div>
    )
}


export default Slider