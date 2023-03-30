import ProductsList from "@/components/shared/products/ProductsList"
import { api } from "@/services/api"
import { Product } from "@/types/product"
import { GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from "next"


const SearchPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
    products,
    searchQuery
}) => {
    return (
        <main className="content min-h-screen w-full">
            <h1 className="text-2xl font-medium text-slate-600 my-6">Search Results : {searchQuery}</h1>
            <ProductsList products={products} className="mb-9"/>
        </main>
    )
}

export const getServerSideProps = async ({ query }: GetServerSidePropsContext) => {

    const searchQuery = query?.q as string

    if (!searchQuery) return {
        redirect: {
            destination: '/',
            permanent: false
        }
    }

    const { data: products } = await api<Product[]>(`/products?filters[title][$containsi]=${searchQuery}&pagination[pageSize]=12&populate=featured_image`)

    return {
        props: {
            products,
            searchQuery
        }
    }
}

export default SearchPage