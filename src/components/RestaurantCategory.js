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
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-2  border ">
      <div className="flex justify-between">
        <span className="font-bold text-lg">
          {category.title} ({category?.itemCards.length})
        </span>
        <span onClick={hadleClick}>{showItems ? "-" : "+"}</span>
      </div>
      {showItems && <ItemList items={category.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
