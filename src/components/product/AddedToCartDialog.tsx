import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'
import { Fragment } from 'react'

type Props = {
    openDialog: boolean
    onClose: () => void
}

export default function AddedToCartDialog({ onClose, openDialog }: Props) {
    return (
        <Transition
            show={openDialog}
            as={Fragment}
        >
            <Dialog onClose={onClose} className="relative z-50">
                <Transition.Child
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0">
                    <Dialog.Overlay className="fixed inset-0 bg-black/10" />
                </Transition.Child>
                <div className="fixed inset-0 grid place-items-center">
                    <Transition.Child
                        as={Fragment}
                        enter="duration-200 bounce"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="w-full max-w-md rounded bg-white py-3 px-4">
                            <Dialog.Title className="text-2xl mb-5">Item has been added to cart</Dialog.Title>
                            <div className="flex justify-end gap-4">
                                <button className="py-2 px-4 rounded hover:bg-zinc-100 active:scale-95 transition" onClick={onClose}>Continue shopping</button>
                                <Link href="/cart" className="py-2 px-4 rounded bg-zinc-800 text-white hover:bg-zinc-700 active:scale-95 transition" onClick={() => { }}>Checkout</Link>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition >
    )
}