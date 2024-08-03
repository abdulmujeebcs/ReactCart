import "react-credit-cards-2/dist/es/styles-compiled.css";
import BackBtn from "../components/BackBtn";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectCartItems } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/product/ProductCard";
import { PRODUCTS } from "../data/menu-items";
import useQuery from "../hooks/useQuery";
import { useEffect, useState } from "react";
import { Product } from "../types/Product";

const Search = () => {
  const query = useQuery();
  const searchTerm = query.get('search') || '';
  const cartItems = useAppSelector(selectCartItems);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [results, setResults] = useState<Product[]>([]);

  const searchProduct = (keyword: string) => {
    const regex = new RegExp(keyword, 'i');
    return PRODUCTS.filter((item) => regex.test(item.title));
  };
  
  useEffect(() => {
    setResults(searchProduct(searchTerm));
  }, [searchTerm]);

  return (
    <div className="my-6">
      <BackBtn to={"/"}>Back to Home</BackBtn>
      <div className="flex flex-col items-center">
        <h2 className="text-3xl my-5">Search results for "{searchTerm}"</h2>
        {results.length > 0 && <div>
            <small className="text-lg">{results.length} Items found</small>
        </div>
        }
        
      </div>
      {results.length ?
        <div className="my-4 p-4 card bg-base-200 shadow-xl">
          <div className="grid lg:grid-cols-4 gap-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {results.map(product => (<ProductCard product={product} key={product.id} />))}
          </div>
        </div> : <h3 className="text-2xl text-center">No items found</h3>
      }

    </div>
  );
};

export default Search;
