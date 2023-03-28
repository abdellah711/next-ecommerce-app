import ProductImages from "@/components/product/ProductImages";
import ProductsCarousel from "@/components/shared/products/ProductsCarousel";
import { useState } from "react";
import { GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from "next";
import { api } from "@/services/api";
import { ProductDetails } from "@/types/product";
import { urlFor } from "@/utils/img";
import ProductDetailsTabs from "@/components/product/ProductDetailsTabs";
import ProductInfo from "@/components/product/ProductInfo";

const ProductPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
    product
}) => {

    return (
        <div className="content my-6">
            <div className="flex gap-9 p-5 flex-col md:flex-row">
                <ProductImages images={product.attributes.images.data.map(im => urlFor(im.attributes.url))} />
                <ProductInfo product={product} />
            </div>

            <ProductDetailsTabs description={product.attributes.description} />

            <h2 className="text-2xl text-center font-medium text-slate-600 my-6">Related Products</h2>
            <ProductsCarousel products={[]} />
        </div>
    )
}


export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const id = context.params?.id
    const { data: product } = await api<ProductDetails>(`/products/${id}?populate=images`)
    return {
        props: {
            product
        }
    }
}

export default ProductPage