import { Fragment, PropsWithChildren } from 'react'

import { Transition } from '@headlessui/react'

export default function Fade({children}: PropsWithChildren) {
    return (
        <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            as={Fragment}
        >
            {children}
        </Transition.Child>
    )
}