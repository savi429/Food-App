import { useState } from "react";
import ItemList from "./ItemList";
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
      className="w-9/12 mx-auto my-4 bg-gray-50 shadow-lg p-2 border dark:bg-slate-800"
      data-testid="food-category"
    >
      <div className="flex justify-between" onClick={hadleClick}>
        <span className="font-bold text-lg p-2 m-2">
          {category.title} ({category?.itemCards.length})
        </span>
        <span>{showItems ? "-" : "+"}</span>
      </div>
      {showItems && <ItemList items={category.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
