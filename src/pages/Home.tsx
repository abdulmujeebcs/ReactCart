import Hero from "../components/Hero";
import { PRODUCTS } from "../data/menu-items";
import WithQuantity from "../components/WithQuantity";
import ProductItem from "../components/ProductItem";

const QuantifiedProductItem = WithQuantity(ProductItem);

const Home = () => {
  return <>
    <Hero />
    <div>
      <h2 className="text-3xl text-center my-4">
        Pick what you crave for today
      </h2>
      <ul className="flex w-full flex-col gap-4">
        {PRODUCTS.map((item) => {
          return <QuantifiedProductItem key={item.id} item={item} />;
        })}
      </ul>
    </div>
  </>
    ;
};

export default Home;
