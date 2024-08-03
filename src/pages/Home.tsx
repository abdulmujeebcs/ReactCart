import { PRODUCTS } from "../data/menu-items";
import SimpleSlider from "../components/SimpleSlider";
import ProductCard from "../components/product/ProductCard";
import { BANNERS } from "../data/banners";
import Banner from "../components/Banner";
import './home.css'
import FeatureBrand from "../components/FeatureBrand";
import { FEATURED_BRANDS } from "../data/featured-brands";

const Home = () => {
  return <>
    <SimpleSlider
      draggable={true}
      items={BANNERS}
      renderItem={(item) => <Banner {...item} />}
    >
    </SimpleSlider>

    <div className="py-4 container flex-container">
      <div className="flex-item image-container">
        <img src="images/banner045.jpg" alt="Banner" />
      </div>

      <div className="flex-item slider-container">
        <SimpleSlider
          items={PRODUCTS}
          slidesToShow={4}
          slidesToScroll={1}
          renderItem={(item) => <ProductCard product={item} key={item.id} />}
        />
      </div>
    </div>

    <div className="mt-5 py-4">
      <h1 className="text-4xl p-5 font-semibold">Spicy Pizza</h1>
      <SimpleSlider
        items={PRODUCTS}
        slidesToShow={5}
        slidesToScroll={1}
        renderItem={(item) => <ProductCard product={item} key={item.id} />}
      />
    </div>

    <div className="py-8 m-5">
      <h3 className="font-semibold py-4">Featured Brands</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {FEATURED_BRANDS.map(brand => (<FeatureBrand brand={brand} />)
        )}
      </div>
    </div>
  </>
};

export default Home;
