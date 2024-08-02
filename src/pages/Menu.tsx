import MenuItem from "../components/MenuItem";
import WithQuantity from "../components/WithQuantity";
import { PRODUCTS } from "../data/menu-items";

const QuantifiedMenuItem = WithQuantity(MenuItem);


const Menu = () => {
  return (
    <>
      <h2 className="text-3xl text-center my-4">
        Pick what you crave for today
      </h2>
      <ul className="flex w-full flex-col gap-4">
        {PRODUCTS.map((item) => {
          return <QuantifiedMenuItem key={item.id} item={item} />;
        })}
      </ul>
    </>
  );
};

export default Menu;
