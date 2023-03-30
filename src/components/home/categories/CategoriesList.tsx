import { Category } from "@/types/category"
import { urlFor } from "@/utils/img"
import useEmblaCarousel from "embla-carousel-react"

type Props = { categories: Category[] }

export default function CategoriesList({ categories }: Props) {
    const [ref] = useEmblaCarousel({ dragFree: true, containScroll: 'keepSnaps' })

    return (
        <div className="embla overflow-hidden" ref={ref}>
            <ul className="embla__container flex gap-5">
                {
                    categories.map(({ id, attributes: { name, image } }) => (
                        <li>
                            <a href={`/categories/${id}`}>
                                <div className="embla__slide bg-slate-50 p-2 rounded-lg">
                                    <img
                                        src={urlFor(image?.data.attributes.url!)}
                                        alt={name}
                                        className="object-contain w-24 aspect-square p-2 "
                                    />
                                    <h4 className="mt-1 text-zinc-800">{name}</h4>
                                </div>
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}