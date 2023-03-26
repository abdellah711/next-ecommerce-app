import React from 'react'

export default function NewsLetterForm() {
    return (
        <div className='flex justify-between content py-12 flex-wrap gap-5'>
            <div>
                <h3 className='text-2xl'>SUBSCRIBE TO OUR NEWSLETTER</h3>
                <p className='text-zinc-600'>Get the latest news and updates sent straight to your inbox.</p>
            </div>
            <form className='bg-gray-100 flex'>
                <input type="email" placeholder='Enter your email address' className='bg-transparent p-4 w-[min(400px,50vw)]' />
                <button className='text-white bg-zinc-800 px-5'>Subscribe</button>
            </form>
        </div>
    )
}
