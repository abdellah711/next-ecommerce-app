import PlusIcon from '@heroicons/react/24/outline/PlusIcon'
import MinusIcon from '@heroicons/react/24/outline/MinusIcon'
import clsx from 'clsx';

type Props = {
    count: number;
    onCountChange: (count: number) => void;
    min?: number;
    max?: number;
    className?: string;
}

export default function Counter({
    count,
    onCountChange,
    min = 0,
    max = Number.POSITIVE_INFINITY,
    className
}: Props) {
    return (
        <div className={clsx(
            'flex items-center border text-zinc-600 rounded overflow-hidden',
            className
        )}>
            <button
                className='border-r bg-white hover:bg-gray-100 px-1'
                onClick={() => count > min && onCountChange(count - 1)}
            >
                <MinusIcon className='aspect-square w-6 p-0.5'/>
            </button>
            <span className='w-[4ch] text-center font-medium'>{count}</span>
            <button
                className='border-l bg-white hover:bg-gray-100 px-1'
                onClick={() => count < max && onCountChange(count + 1)}
            >
                <PlusIcon className='aspect-square w-6 p-0.5' />
            </button>
        </div>
    )
}