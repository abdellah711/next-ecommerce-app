import Link from "next/link"


type Props = {
    title: string,
    image: string,
    price: number,
    oldPrice?: number,
    link: string
}

const ProductCard = ({ title, image, price, oldPrice, link }: Props) => {
    const discount = oldPrice && Math.round((1 - price / oldPrice) * 100)

    return (
        <Link href={link} className="p-3 flex flex-col gap-2 relative bg-zinc-50 rounded-md embla__slide flex-shrink-0 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 group">
            {oldPrice && (<p className="absolute right-4 top-4 bg-red-50/90 text-red-500 px-1 py-0.5 z-20">-{discount}%</p>)}
            <img
                src={image}
                alt={title}
                className="aspect-square object-contain mix-blend-multiply group-hover:scale-105 transition"
            />
            <h3 className="text-lg text-zinc-800">{title}</h3>
            <p className="text-orange-500 text-lg font-semibold">${price}
                {oldPrice && <span className="text-gray-400 line-through ml-2 text-base font-normal">${oldPrice}</span>}
            </p>
        </Link>
    )
}

export default ProductCard