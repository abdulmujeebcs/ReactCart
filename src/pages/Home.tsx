import { PRODUCTS } from "../data/menu-items";
import SimpleSlider from "../components/SimpleSlider";
import ProductCard from "../components/product/ProductCard";
import { BANNERS } from "../data/banners";
import Banner from "../components/Banner";
import './home.css'

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
  </>
};

export default Home;
