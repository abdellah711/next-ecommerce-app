import HomeIcon from '@heroicons/react/24/solid/HomeIcon'
import ChevronRightIcon from '@heroicons/react/24/outline/ChevronRightIcon'

import Link from 'next/link'
import { Children, Fragment, PropsWithChildren } from 'react'

export default function Breadcrumbs({ children }: PropsWithChildren) {
    const links = Children.toArray(children)

    return (
        <div aria-label="breadcrumb" className='bg-zinc-50 w-full'>
            <div className='content py-2 flex gap-2 text-zinc-500 text-sm'>
                <Link href="/">
                    <HomeIcon className="w-5 aspect-square" />
                </Link>
                {
                    links.map((link, index) => (
                        <Fragment key={index}>
                            <ChevronRightIcon className="w-4 aspect-square" />
                            {link}
                        </Fragment>))
                }
            </div>
        </div>
    )
}