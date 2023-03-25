import clsx from 'clsx'
import { ComponentProps } from 'react'

export default function ProductsList({ className, ...props }: ComponentProps<'div'>) {
    return (
        <div className={clsx(
            "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5",
            className
        )} {...props} />
    )
}