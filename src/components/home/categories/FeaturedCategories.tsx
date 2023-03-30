import { Category } from '@/types/category'
import { urlFor } from '@/utils/img'
import CategoryCard from './CategoryCard'

type Props = { categories: Category[] }

export default function FeaturedCategories({categories}: Props) {
    return (
        <div className="flex flex-wrap content gap-12 my-12">
            {
                categories?.map(({ id, attributes: { name, subtitle, image } }) => (
                    <CategoryCard key={id} title={name} subTitle={subtitle} link={`/categories/${id}`} image={urlFor(image?.data.attributes.url!)} />
                ))
            }
        </div>
    )
}