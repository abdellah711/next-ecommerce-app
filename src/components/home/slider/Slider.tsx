
import { Children, PropsWithChildren, useEffect, useState } from "react"

import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import clsx from "clsx"

import LeftArrowIcon from '@heroicons/react/24/outline/ArrowLeftIcon'
import RightArrowIcon from '@heroicons/react/24/outline/ArrowRightIcon'

import SliderItem from "./SliderItem"


const Slider = ({ children }: PropsWithChildren) => {
    const [carouselRef, api] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5500 })])
    const [currentPosition, setCurrentPosition] = useState(0)

    const lst = Children.toArray(children)

    useEffect(() => {
        api?.on('select', () => {
            setCurrentPosition(api?.selectedScrollSnap())
        })
    }, [api])

    return (
        <div className="embla overflow-hidden flex-1 bg-gray-100 relative cursor-grab" ref={carouselRef}>

            <div className="embla__container flex">
                {children}
            </div>

            <button className="absolute left-7 bottom-1/2 -translate-y-1/2 animate-pulse" onClick={() => api?.scrollPrev()}>
                <LeftArrowIcon className="w-7" />
            </button>

            <button className="absolute right-5 bottom-1/2 -translate-y-1/2" onClick={() => api?.scrollNext()}>
                <RightArrowIcon className="w-7" />
            </button>

            <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex gap-2">
                {lst.map((_, index) => (
                    <button
                        key={index}
                        className={clsx('w-3 aspect-square rounded-full', currentPosition === index ? 'bg-zinc-900' : 'bg-gray-300',)}
                        onClick={() => api?.scrollTo(index)}
                    />))}
            </div>
        </div>
    )
}

Slider.SliderItem = SliderItem

export default Slider