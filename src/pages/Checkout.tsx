import "react-credit-cards-2/dist/es/styles-compiled.css";
import BackBtn from "../components/BackBtn";
import CreditCard from "../components/CreditCard";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { resetCart, selectCartItems, selectCartTotal } from "../store/cartSlice";
import { formatPrice } from "../utils/price-utils";
import { createOrderId } from "../utils/order-utils";
import { createOrder } from "../store/orderSlice";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const cartItems = useAppSelector(selectCartItems);
  const cartTotal = useAppSelector(selectCartTotal);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div className="my-6">
      <BackBtn to={"/cart"}>Back to Cart</BackBtn>
      <h2 className="text-center text-3xl my-4">Checkout</h2>
      {cartItems.length ? <div className="grid grid-cols-1 my-4 p-4 md:grid-cols-2 gap-8 card bg-base-200 shadow-xl">
        <section className="">
          <h2 className="text-2xl mb-4 card-title w-full block text-center">
            Payment Details
          </h2>
          <CreditCard submitHandler={(state) => {
            const orderId = createOrderId()
            dispatch(createOrder({
              id: orderId,
              items: cartItems,
              total: cartTotal,
              creditCardNumber: state.number,
              state: 'pending'
            }))
            dispatch(resetCart())
            navigate(`/order/${orderId}`)
          }} />
        </section>

        <section>
          <h2 className="text-2xl w-full text-center mb-4 card-title block">
            Order Summary
          </h2>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {
                  cartItems.map(item => {
                    return (
                      <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>{item.quantity}</td>
                        <td>{formatPrice(item.quantity * item.price)}</td>
                      </tr>
                    )
                  })
                }
                <tr className="font-semibold">
                  <td>Subtotal: </td>
                  <td></td>
                  <td>€{cartTotal}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div> : <h3 className="text-2xl text-center">No items in the cart</h3>
      }

    </div>
  );
};

export default Checkout;
