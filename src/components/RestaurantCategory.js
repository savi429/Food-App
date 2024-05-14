import { useState } from "react";
import ItemList from "./ItemList";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const RestaurantCategory = ({
  category,
  showItems,
  showIndexHandler,
  index,
}) => {
  const hadleClick = () => {
    showIndexHandler();
  };
  return (
    <div
      className="w-9/12 mx-auto my-2 bg-gray-50 shadow-lg p-2 border dark:bg-slate-800"
      data-testid="food-category"
    >
      <div className="flex justify-between" onClick={hadleClick}>
        <div className="font-bold text-lg p-4">
          {category.title} ({category?.itemCards.length})
        </div>
        <div>{showItems ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
      </div>
      {showItems && <ItemList items={category.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
