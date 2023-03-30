import Breadcrumbs from "@/components/shared/Breadcrumbs"
import ProductsList from "@/components/shared/products/ProductsList"
import { api } from "@/services/api"
import { CategoryDetails } from "@/types/category"
import { GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from "next"
import Link from "next/link"

const CategoryPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
    category
}) => {
    
    return (
        <>
        <Breadcrumbs>
            <Link href={`/categories/${category.id}`}>{category.attributes.name}</Link>
        </Breadcrumbs>
        <main className="content w-full min-h-screen py-6">
            <h2 className="text-3xl text-zinc-700 capitalize">{category.attributes.name}</h2>
            <ProductsList products={category.attributes.products.data} className="my-6"/>
        </main>
        </>
    )
}

export const getServerSideProps = async ({ params }: GetServerSidePropsContext) => {
    const id = params?.id as string
    const { data: category } = await api<CategoryDetails>(`/categories/${id}?populate[0]=image&populate[products][populate][0]=featured_image`)

    if (!category) return {
        notFound: true
    }

    return {
        props: {
            category
        }
    }
}


export default CategoryPage