import ItemList from "./ItemList";
import { useSelector } from "react-redux";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <div className="text-center w-9/12 m-auto">
      <h3>Cart</h3>
      {cartItems.length === 0 ? (
        <h3>Add Items to your Cart</h3>
      ) : (
        <ItemList items={cartItems} />
      )}
    </div>
  );
};
export default Cart;
