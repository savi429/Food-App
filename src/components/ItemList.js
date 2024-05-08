import { CDN_URL } from "../utils/constants";
import { addItem } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
    // toast("Item added to cart!");
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2  border-b-1 text-left  dark:bg-slate-800"
          data-testid="food-items"
        >
          <div className="flex justify-between">
            <div className="w-10/12">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-2/12 p-4 relative">
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-full h-auto "
              />
              <button
                className="absolute px-4 py-1 bottom-0 left-1/4 bg-white text-green p-2 border border-1 text-sm"
                onClick={() => handleAddItem(item)}
              >
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
