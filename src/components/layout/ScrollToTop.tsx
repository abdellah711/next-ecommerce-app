import { Transition } from '@headlessui/react'
import UpArrow from '@heroicons/react/24/outline/ChevronUpIcon'
import { Fragment, useEffect, useState } from 'react'

export default function ScrollToTop() {
    const [showBtn, setShowBtn] = useState(false)

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        const handleScroll = () => {
            setShowBtn(window.scrollY > 100)
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <Transition
            show={showBtn}
            enter='transition duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]'
            enterFrom='opacity-0 scale-50'
            enterTo='scale-100'
            leave='transition ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
            as={Fragment}
        >
            <button
                className='fixed bottom-5 right-5 md:bottom-10 md:right-10 rounded-full p-2 bg-slate-600/90 text-white z-40 group'
                onClick={handleClick}
            >
                <UpArrow className='w-6 md:w-7 group-hover:-translate-y-0.5 transition' />
            </button>
        </Transition>
    )
}
