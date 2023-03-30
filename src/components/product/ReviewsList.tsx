import UserIcon from '@heroicons/react/24/solid/UserIcon'
import React from 'react'
import Rating from '../shared/Rating'

type Props = {}

export default function ReviewsList({ }: Props) {
    return (
        <ul className='space-y-5 p-2'>
            {[1, 2, 3, 4, 5].map((_, i) => <ReviewItem key={i} />)}
        </ul>
    )
}

const ReviewItem = () => {
    return (
        <li className='grid grid-cols-[auto_1fr] gap-x-4 gap-y-0.5'>
            <UserIcon className='w-12 bg-slate-700 text-white rounded-full p-2' />
            <div>
                <div className='flex gap-2'>
                    <h4 className="text-sm font-medium">Guest 828 </h4>
                    &middot;
                    <p className="text-sm text-gray-400">12/12/2020</p>
                </div>
                <Rating rating={4} />

            </div>
            <p className='col-start-2 text-zinc-700'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
        </li>
    )
}