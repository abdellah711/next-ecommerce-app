import FeaturesList from "@/components/home/features/FeaturesList";
import NewsLetterForm from "@/components/home/newsletter/NewsLetterForm";
import Section from "@/components/home/Section";
import Slider from "@/components/home/slider/Slider";
import ProductsCarousel from "@/components/shared/products/ProductsCarousel";
import ProductsList from "@/components/shared/products/ProductsList";
import { api } from "@/services/api";
import { Category } from "@/types/category";
import { Product } from "@/types/product";
import { InferGetServerSidePropsType, NextPage } from "next";
import axios from 'axios'
import { Slide } from "@/types/slide";
import CategoriesList from "@/components/home/categories/CategoriesList";
import FeaturedCategories from "@/components/home/categories/FeaturedCategories";


const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  slides,
  products,
  featuredProducts,
  featuredCategories,
  categories,
}) => {
  return (
    <div>
      <Slider slides={slides} />

      <FeaturedCategories categories={featuredCategories} />
      <Section title="Featured Products">
        <ProductsCarousel products={featuredProducts} />
      </Section>

      <Section title="Categories" id="categories">
        <CategoriesList categories={categories} />
      </Section>

      <Section title="All Products">
        <ProductsList className="my-5" products={products} />
      </Section>

      <FeaturesList />
      <NewsLetterForm />

    </div>
  )
}


export const getServerSideProps = async () => {

  const responses = await Promise.all([
    api<Slide[]>('/slides?populate=image'),
    api<Product[]>('/products?filters[featured][$eq]=false&&populate=featured_image'),
    api<Product[]>('/products?filters[featured][$eq]=true&&populate=featured_image'),
    api<Category[]>('/categories?filters[featured][$eq]=true&pagination[pageSize]=2&populate=image'),
    api<Category[]>('/categories?populate=image'),
  ])
  const [{ data: slides }, { data: products }, { data: featuredProducts }, { data: featuredCategories }, { data: categories }] = responses

  return {
    props: {
      slides,
      products,
      featuredProducts,
      featuredCategories,
      categories,
    }
  }
}

export default Home