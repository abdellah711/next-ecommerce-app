import CategoryCard from "@/components/home/categories/CategoryCard";
import Slider from "@/components/home/slider/Slider";
import ProductCard from "@/components/shared/products/ProductCard";
import ProductsCarousel from "@/components/shared/products/ProductsCarousel";
import ProductsList from "@/components/shared/products/ProductsList";

export default function Home() {
  return (
    <>
      <Slider>
        <Slider.SliderItem title="PHONES MADE FOR YOU!" subTitle="New Inspiration 2023" description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel luctus tincidunt, nisl nisl aliquet nisl, nec lacinia nisl lorem eget dolor. Sed euismod, nisl vel luctus tincidunt" image="http://127.0.0.1:5500/phone_website/images/banner_01.png" />
        <Slider.SliderItem title="PHONES MADE FOR YOU!" subTitle="New Inspiration 2023" description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel luctus tincidunt, nisl nisl aliquet nisl, nec lacinia nisl lorem eget dolor. Sed euismod, nisl vel luctus tincidunt" image="http://127.0.0.1:5500/phone_website/images/banner_01.png" />
        <Slider.SliderItem title="PHONES MADE FOR YOU!" subTitle="New Inspiration 2023" description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel luctus tincidunt, nisl nisl aliquet nisl, nec lacinia nisl lorem eget dolor. Sed euismod, nisl vel luctus tincidunt" image="http://127.0.0.1:5500/phone_website/images/banner_01.png" />
      </Slider>

      <div className="my-12">

        <div className="flex flex-wrap content gap-12">
          <CategoryCard title="HEADPHONES" subTitle="New Colors Introduced" image="http://localhost:5500/phone_website/images/collection_02.png" link="#" />
          <CategoryCard title="HEADPHONES" subTitle="New Colors Introduced" image="http://localhost:5500/phone_website/images/collection_02.png" link="#" />
        </div>


        <div className="content">
          <h2 className="text-3xl font-semibold text-center my-12 text-slate-700">FEATURED PRODUCTS</h2>
          <ProductsList className="my-5">
            <ProductCard title="Apple iPhone 13" image="http://localhost:5500/phone_website/images/products/iphone/iphone3.jpeg" price={999} oldPrice={1200} link={'#'} />
            <ProductCard title="Apple iPhone 13" image="http://localhost:5500/phone_website/images/products/iphone/iphone3.jpeg" price={999} oldPrice={1200} link={'#'} />
            <ProductCard title="Apple iPhone 13" image="http://localhost:5500/phone_website/images/products/iphone/iphone3.jpeg" price={999} oldPrice={1200} link={'#'} />
            <ProductCard title="Apple iPhone 13" image="http://localhost:5500/phone_website/images/products/iphone/iphone3.jpeg" price={999} link={'#'} />
            <ProductCard title="Apple iPhone 13" image="http://localhost:5500/phone_website/images/products/iphone/iphone3.jpeg" price={999} oldPrice={1200} link={'#'} />
            <ProductCard title="Apple iPhone 13" image="http://localhost:5500/phone_website/images/products/iphone/iphone3.jpeg" price={999} oldPrice={1200} link={'#'} />
          </ProductsList>
          
        </div>

      </div>
    </>
  )
}