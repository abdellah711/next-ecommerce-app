import React from 'react'
import ShippingIcon from '@heroicons/react/24/outline/TruckIcon'
import CardIcon from '@heroicons/react/24/outline/CreditCardIcon'
import CurrencyIcon from '@heroicons/react/24/outline/CurrencyDollarIcon'
import LikeIcon from '@heroicons/react/24/outline/HandThumbUpIcon'

const FEATURES = [
    { title: 'Free Shipping', Icon: ShippingIcon },
    { title: '100% Money Back', Icon: CardIcon },
    { title: 'Many Payment gaytways', Icon: CurrencyIcon },
    { title: '24/7 Support', Icon: LikeIcon },
]

export default function FeaturesList() {
    return (
        <div className="bg-gray-100">
            <div className='grid grid-cols-2 md:grid-cols-4 gap-16 py-12 content'>
                {FEATURES.map(({ title, Icon }, i) => (<div key={i} className="flex flex-col items-center gap-3 text-center">
                    <Icon className='w-14  bg-white p-2 rounded-full'/>
                    <p>{title}</p>
                </div>))}
            </div>
        </div>
    )
}
