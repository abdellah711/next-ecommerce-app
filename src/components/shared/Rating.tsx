import StarIcon from '@heroicons/react/24/solid/StarIcon'
import StarOutlineIcon from '@heroicons/react/24/outline/StarIcon'


type Props = {
    rating: number;
}

export default function Rating({ rating }: Props) {
    const ratingRounded = Math.min(Math.floor(rating), 5)
    const stars = new Array(ratingRounded).fill(0)
    const emptyStars = new Array(5 - ratingRounded).fill(0)

    return (
        <div className='text-yellow-400 flex gap-0.5'>
            {stars.map((_, i) => (<StarIcon className='w-5' key={i} />))}
            {emptyStars.map((_, i) => (<StarOutlineIcon className='w-5' key={ratingRounded + i} />))}
        </div>
    )
}