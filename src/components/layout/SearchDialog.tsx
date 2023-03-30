
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import SearchIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon'
import { useRouter } from 'next/router'
import Fade from '../shared/transitions/Fade'


type Props = {
    open?: boolean
    onClose: () => void
}

export default function SearchDialog({ open = false, onClose }: Props) {
    const [searchQuery, setSearchQuery] = useState('')

    const router = useRouter()

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onClose()
        router.push(`/search?q=${searchQuery}`)
    }

    return (
        <Transition show={open} as={Fragment}>
            <Dialog onClose={onClose} className="relative z-50">
                <Fade>
                    <Dialog.Overlay className="fixed inset-0 bg-black/10" />
                </Fade>
                <Transition.Child
                    as={Fragment}
                    enter="duration-200"
                    enterFrom="opacity-0 scale-125"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-125"
                >
                    <div className="fixed inset-0 grid place-items-center">
                        <Dialog.Panel className="w-full max-w-md px-3">
                            <form
                                className='flex pl-1 rounded bg-white overflow-hidden shadow'
                                onSubmit={handleSearch}
                            >
                                <button className='p-2 self-center hover:rounded-2xl hover:bg-zinc-100 transition-all'>
                                    <SearchIcon className="w-6 aspect-square text-zinc-700" />
                                </button>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className='px-3 py-3 grow outline-none'
                                    value={searchQuery}
                                    onChange={e => setSearchQuery(e.currentTarget.value)}
                                />
                            </form>
                        </Dialog.Panel>
                    </div>
                </Transition.Child>
            </Dialog>
        </Transition>
    )
}