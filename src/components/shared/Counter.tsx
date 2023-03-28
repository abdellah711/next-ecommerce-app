import PlusIcon from '@heroicons/react/24/outline/PlusIcon'
import MinusIcon from '@heroicons/react/24/outline/MinusIcon'

type Props = {
    count: number;
    onCountChange: (count: number) => void;
    min?: number;
    max?: number;
}

export default function Counter({ count, onCountChange, min = 0, max = Number.POSITIVE_INFINITY }: Props) {
    return (
        <div className='flex items-center border text-zinc-600 rounded'>
            <button
                className='border-r px-2 bg-gray-50 hover:bg-gray-100'
                onClick={() => count > min && onCountChange(count - 1)}
            >
                <MinusIcon className='w-8 aspect-square p-1' />
            </button>
            <span className='w-[5ch] text-center text-lg'>{count}</span>
            <button
                className='border-l px-2 bg-gray-50 hover:bg-gray-100'
                onClick={() => count < max && onCountChange(count + 1)}
            >
                <PlusIcon className='w-8 aspect-square p-1' />
            </button>
        </div>
    )
}