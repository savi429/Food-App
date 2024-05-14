import { CDN_URL } from "../utils/constants";
import { addItem } from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.reducer.cart.items);
  const handleAddItem = (item) => {
    dispatch(addItem(item));
    // toast("Item added to cart!");
  };
  // const checkItemsInCart = (id) => {
  //   const item = cartItems.filter((prod) => prod.card.info.id === id);
  //   return item;
  // };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.info?.id}
          className="p-4 m-4 border-b-1 text-left  dark:bg-slate-800 "
          data-testid="food-items"
        >
          <div className="flex justify-between mb-4">
            <div className="w-10/12">
              <h2 className="font-bold">{item?.card?.info?.name}</h2>
              <p className="font-semibold">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </p>
              <p className="text-base line-clamp-2 whitespace-wrap overflow-hidden text-ellipsis">
                {item.card.info.description}
              </p>
            </div>
            <div className="w-2/12 relative ">
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-[120px] h-[120px] rounded-lg"
              />
              <button
                className="absolute px-4 py-1 bottom-0 left-1/4 bg-white text-green p-2 border border-1 text-sm"
                onClick={() => handleAddItem(item)}
              >
                {/* {checkItemsInCart(item.card.info.id).length > 0
                  ? "view"
                  : "ADD"} */}
                ADD
              </button>
            </div>
          </div>
          <hr />
        </div>
      ))}
      {/* <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      /> */}
    </div>
  );
};
export default ItemList;
