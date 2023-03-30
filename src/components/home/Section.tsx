import { ComponentProps } from 'react'

export default function Section({ title, children,...props }: ComponentProps<'section'>) {
    return (
        <section className='content' {...props}>
            <h2 className="text-3xl font-semibold text-center my-12 text-slate-700">{title}</h2>
            {children}
        </section>
    )
}