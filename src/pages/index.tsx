import CategoryCard from "@/components/home/categories/CategoryCard";
import FeaturesList from "@/components/home/features/FeaturesList";
import NewsLetterForm from "@/components/home/newsletter/NewsLetterForm";
import Section from "@/components/home/Section";
import Slider from "@/components/home/slider/Slider";
import ProductCard from "@/components/shared/products/ProductCard";
import ProductsCarousel from "@/components/shared/products/ProductsCarousel";
import ProductsList from "@/components/shared/products/ProductsList";
import { api } from "@/services/api";
import { Category } from "@/types/category";
import { Product } from "@/types/product";
import { InferGetServerSidePropsType, NextPage } from "next";
import axios from 'axios'
import { urlFor } from "@/utils/img";
import { Slide } from "@/types/slide";


const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  slides,
  products,
  featuredProducts,
  featuredCategories,
}) => {
  return (
    <div>
      <Slider>
        {slides?.map(({ id, attributes: { title, sub_title, description, image } }) => (
          <Slider.SliderItem key={id} title={title} subTitle={sub_title} description={description} image={urlFor(image?.data.attributes.url!)} />
        ))}
      </Slider>


      <div className="flex flex-wrap content gap-12 my-12">
        {
          featuredCategories?.map(({ id, attributes: { name, subtitle, image } }) => (<CategoryCard key={id} title={name} subTitle={subtitle} link="#" image={urlFor(image?.data.attributes.url!)} />))
        }
      </div>


      <Section title="Featured Products">
        <ProductsCarousel>
          {featuredProducts?.map(({ id, attributes: { title, price, old_price, featured_image } }) => (<ProductCard key={id} title={title} image={urlFor(featured_image.data.attributes.url)} price={price} oldPrice={old_price} link={`/products/${id}`} />))}
        </ProductsCarousel>
      </Section>

      <Section title="All Products">
        <ProductsList className="my-5">
          {products?.map(({ id, attributes: { title, price, old_price, featured_image } }) => (<ProductCard key={id} title={title} image={urlFor(featured_image.data.attributes.url)} price={price} oldPrice={old_price} link={`/products/${id}`} />))}
        </ProductsList>
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