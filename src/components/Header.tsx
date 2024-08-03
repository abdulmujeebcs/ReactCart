import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import { selectCartQuantity, selectCartTotal } from "../store/cartSlice";
import { ChangeEventHandler, FormEvent, useState } from "react";

const Header = () => {
  const [search, setSearch] = useState<String>('');
  const cartQuantity = useAppSelector(selectCartQuantity);
  const cartTotal = useAppSelector(selectCartTotal);
  const navigate = useNavigate();

  const handleSearch: ChangeEventHandler = (ev) => {
    const target = ev.target as HTMLInputElement;
    setSearch(target.value);
  }

  const handleForm = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (search) {
      navigate(`/search?search=${search}`)
    }
  }

  return (
    <div className="navbar bg-primary sticky top-0 z-40 gap-4">
      <Link to={"/"} className="text-base-100 btn btn-ghost text-xl">
        ReactCart
      </Link>
      <form className="flex-1 flex justify-center" onSubmit={handleForm}>
        <div className="relative w-full md:w-2/3">
          <input
            name="search"
            onChange={handleSearch}
            autoComplete="off"
            required
            type="text"
            placeholder="What are you looking for?"
            className="input input-bordered w-full pr-12"
          />
          <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1117.5 10.5a7.5 7.5 0 01-4.35 6.65z" />
            </svg> Search
          </button>
        </div>
      </form>
      <div className="flex-none text-base-100">
        <div className="font-semibold gap-1 flex">
          <span className="hidden md:flex">Cart total: </span>
          <span>€{cartTotal}</span>{" "}
        </div>
        <Link
          to="/cart"
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle"
        >
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-sm indicator-item">{cartQuantity}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
