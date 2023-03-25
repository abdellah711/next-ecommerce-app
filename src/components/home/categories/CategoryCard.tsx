import React from 'react'

type Props = {
    title: string,
    subTitle: string,
    image: string,
    link: string,
}

export default function CategoryCard({ image, link, subTitle, title }: Props) {
    return (
        <a href="#" className='flex gap-12 p-5 bg-gray-100 flex-grow rounded hover:shadow-lg active:scale-95 transition'>
            <img
                src={image}
                alt={title}
                className='w-52 aspect-square object-contain'
            />
            <div className='flex flex-col justify-center items-start gap-2'>
                <p className='text-lg'>{subTitle}</p>
                <h3 className='text-3xl font-semibold'>{title}</h3>
            </div>
        </a>
    )
}