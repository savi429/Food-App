import ItemList from "./ItemList";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";
const Cart = () => {
  const cartItems = useSelector((state) => state.reducer.cart.items);
  const dispatch = useDispatch();
  return (
    <div className="text-center w-9/12 m-auto">
      <h3>Cart</h3>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
      {cartItems.length === 0 ? (
        <>
          <h3>Add Items to your Cart</h3>
          <Link to={"/"}>
            <button>Contine Shopping</button>
          </Link>
        </>
      ) : (
        <ItemList items={cartItems} />
        // <></>
      )}
    </div>
  );
};
export default Cart;
