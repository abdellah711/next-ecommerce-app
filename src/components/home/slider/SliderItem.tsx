import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'


type Props = {
    title?: string
    subTitle?: string
    image?: string
    description?: string
    link?: string
    linkText?: string
}

export default function SliderItem({ title, description, subTitle, image, link = '#', linkText = 'Shop now' }: Props) {
    return (
        <div className="embla__slide flex-shrink-0 basis-full min-w-screen">
            <div className={clsx(
                'content flex justify-between py-12 flex-col gap-y-5 gap-x-2',
                'md:flex-row '
            )}>
                <div className='flex flex-col justify-center items-center text-center md:text-left md:items-start gap-5'>
                    <h3 className='text-lg -mb-4'>{subTitle}</h3>
                    <h2 className='text-5xl font-medium max-w-[20ch]'>{title}</h2>
                    <p className='max-w-[50ch] text-zinc-600'>{description}</p>
                    <Link href={link} className="bg-zinc-900 text-white text-lg py-2 px-4 rounded uppercase">
                        {linkText}
                    </Link>
                </div>
                <img src={image} alt={title} className="max-w-[80%] md:max-w-[40%] max-h-[70vh] mx-auto object-contain" />
            </div>
        </div>
    )
}