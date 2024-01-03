import { CDN_URL } from "../utils/constants";
import { addItem } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border border-gray-400 border-b-1 text-left"
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
            <div className="w-2/12 p-4">
              <div className="absolute">
                <button
                  className="p-1 mx-14 bg-white shadow-lg "
                  onClick={() => handleAddItem(item)}
                >
                  Add +
                </button>
              </div>
              <img src={CDN_URL + item.card.info.imageId} className="w-full" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
