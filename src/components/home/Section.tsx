import React, { PropsWithChildren } from 'react'

type Props = {
    title?: string
}

export default function Section({ title, children }: PropsWithChildren<Props>) {
    return (
        <section className='content'>
            <h2 className="text-3xl font-semibold text-center my-12 text-slate-700">{title}</h2>
            {children}
        </section>
    )
}