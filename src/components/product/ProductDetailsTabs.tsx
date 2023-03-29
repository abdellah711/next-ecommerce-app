import { Tab } from '@headlessui/react'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import ShippingMarkdown from '@/assets/shipping.md'

type Props = {
    description: string
}

export default function ProductDetailsTabs({ description }: Props) {
    return (
        <Tab.Group>
            <Tab.List className="flex p-1 gap-1 bg-gray-100 rounded">
                <Tab className={({ selected }) => `flex-1 py-2.5 text-lg text-center rounded ${selected ? 'bg-white' : 'text-gray-500'}`}>Description</Tab>
                <Tab className={({ selected }) => `flex-1 py-2.5 text-lg text-center rounded ${selected ? 'bg-white' : 'text-gray-500'}`}>Reviews</Tab>
                <Tab className={({ selected }) => `flex-1 py-2.5 text-lg text-center rounded ${selected ? 'bg-white' : 'text-gray-500'}`}>Shipping</Tab>
            </Tab.List>
            <Tab.Panels className="border-b">
                <Tab.Panel className="p-5">
                    <ReactMarkdown className="prose max-w-none prose-h1:font-semibold prose-h2:font-semibold">
                        {description}
                    </ReactMarkdown>
                </Tab.Panel>
                <Tab.Panel className="p-5">
                    <p>todo</p>
                </Tab.Panel>
                <Tab.Panel className="p-5">
                    <ReactMarkdown className="prose max-w-none">
                        {ShippingMarkdown}
                    </ReactMarkdown>
                </Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    )
}