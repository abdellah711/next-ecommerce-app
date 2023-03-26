import Link from 'next/link'

import PhoneIcon from '@heroicons/react/24/solid/PhoneIcon'
import MapPinIcon from '@heroicons/react/24/solid/MapPinIcon'
import EnvelopeIcon from '@heroicons/react/24/solid/EnvelopeIcon'


export default function Footer() {
    return (
        <div className='bg-zinc-800'>
            <div className='flex text-zinc-400 content py-9'>
                <div className='flex-1'>
                    <h1 className='text-2xl font-semibold text-white mb-5'>PHONE</h1>
                    <p className='pr-16'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex enim dolorum</p>
                </div>
                <div className='flex-1 flex flex-col gap-3 items-start'>
                    <h2 className='text-2xl text-zinc-50 mb-4'>Information</h2>
                    <Link className='hover:underline hover:text-zinc-50 transition' href='/about'>About</Link>
                    <Link className='hover:underline hover:text-zinc-50 transition' href='/contact'>Contact</Link>
                    <Link className='hover:underline hover:text-zinc-50 transition' href='/privacy'>Privacy</Link>
                    <Link className='hover:underline hover:text-zinc-50 transition' href='/terms'>Terms</Link>
                </div>
                <div className='flex-1 flex flex-col gap-3 items-start'>
                    <h2 className='text-2xl text-zinc-50 mb-4'>Follow Us</h2>
                    <a className='hover:underline hover:text-zinc-50 transition' href='http://facebook.com'>Facebook</a>
                    <a className='hover:underline hover:text-zinc-50 transition' href='http://twitter.com'>Twitter</a>
                    <a className='hover:underline hover:text-zinc-50 transition' href='http://instagram.com'>Instagram</a>
                </div>
                <div className='flex-1 flex flex-col gap-3'>
                    <h2 className='text-2xl text-zinc-50 mb-4'>Contact Us</h2>
                    <p className='flex items-start gap-2 max-w-[40ch]'><MapPinIcon className='h-7 aspect-square' /> 42 Dream House, Dreammy street, 7131 Dreamville, USA</p>
                    <p className='flex items-start gap-2'><PhoneIcon className='h-5 aspect-square' /> 555-555-5555</p>
                    <p className='flex items-start gap-2'><EnvelopeIcon className='h-5 aspect-square' /> company@gmail.com</p>
                </div>
            </div>
        </div>
    )
}