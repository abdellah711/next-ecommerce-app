import CategoryCard from "@/components/home/categories/CategoryCard";
import Slider from "@/components/home/slider/Slider";

export default function Home() {
  return (
    <>
      <Slider>
        <Slider.SliderItem title="PHONES MADE FOR YOU!" subTitle="New Inspiration 2023" description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel luctus tincidunt, nisl nisl aliquet nisl, nec lacinia nisl lorem eget dolor. Sed euismod, nisl vel luctus tincidunt" image="http://127.0.0.1:5500/phone_website/images/banner_01.png" />
        <Slider.SliderItem title="PHONES MADE FOR YOU!" subTitle="New Inspiration 2023" description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel luctus tincidunt, nisl nisl aliquet nisl, nec lacinia nisl lorem eget dolor. Sed euismod, nisl vel luctus tincidunt" image="http://127.0.0.1:5500/phone_website/images/banner_01.png" />
        <Slider.SliderItem title="PHONES MADE FOR YOU!" subTitle="New Inspiration 2023" description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel luctus tincidunt, nisl nisl aliquet nisl, nec lacinia nisl lorem eget dolor. Sed euismod, nisl vel luctus tincidunt" image="http://127.0.0.1:5500/phone_website/images/banner_01.png" />
      </Slider>

      <div className="my-12">
        
        <div className="grid md:grid-cols-2 content gap-12">
          <CategoryCard title="HEADPHONES"  subTitle="New Colors Introduced" image="http://localhost:5500/phone_website/images/collection_02.png" link="#" />
          <CategoryCard title="HEADPHONES"  subTitle="New Colors Introduced" image="http://localhost:5500/phone_website/images/collection_02.png" link="#" />
        </div>


      </div>
    </>
  )
}