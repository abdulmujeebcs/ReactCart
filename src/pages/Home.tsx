import { PRODUCTS } from "../data/menu-items";
import SimpleSlider from "../components/SimpleSlider";
import ProductCard from "../components/product/ProductCard";
import { BANNERS } from "../data/banners";
import Banner from "../components/Banner";


const Home = () => {
  return <>
    <SimpleSlider
      items={BANNERS}
      renderItem={(item) => <Banner {...item} />}
    >
    </SimpleSlider>

    <div className="py-4">
      <SimpleSlider
        items={PRODUCTS}
        slidesToShow={4}
        slidesToScroll={1}
        renderItem={(item) => <ProductCard product={item} key={item.id} />}
      >
      </SimpleSlider>
    </div>

    {/* const QuantifiedProductItem = WithQuantity(ProductItem); */}
    {/* <ul className="flex w-full flex-col gap-4">
        {PRODUCTS.map((item) => {
          return <QuantifiedProductItem key={item.id} item={item} />;
        })}
      </ul> */}
  </>
    ;
};

export default Home;
