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


const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  slides,
  products,
  featuredProducts,
  featuredCategories,
}) => {
  return (
    <div>
      <Slider slides={slides} />

      <CategoriesList categories={featuredCategories} />

      <Section title="Featured Products">
        <ProductsCarousel products={featuredProducts} />
      </Section>

      <Section title="All Products">
        <ProductsList className="my-5" products={products}/>
      </Section>

      <FeaturesList />
      <NewsLetterForm />
      
    </div>
  )
}


export const getServerSideProps = async () => {
  const test = await axios.get('http://localhost:3000/api/hello');

  const responses = await Promise.all([
    api<Slide[]>('/slides?populate=image'),
    api<Product[]>('/products?filters[featured][$eq]=false&&populate=featured_image'),
    api<Product[]>('/products?filters[featured][$eq]=true&&populate=featured_image'),
    api<Category[]>('/categories?filters[featured][$eq]=true&pagination[pageSize]=2&populate=image'),
  ])
  const [{ data: slides }, { data: products }, { data: featuredProducts }, { data: featuredCategories }] = responses

  return {
    props: {
      slides,
      products,
      featuredProducts,
      featuredCategories
    }
  }
}

export default Home