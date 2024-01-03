import { useParams } from "react-router-dom";
import useRestaurantMenu from "./../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { restId } = useParams();
  const [showIndex, setShowIndex] = useState(0);
  const restInfo = useRestaurantMenu(restId);
  console.log("resss->", restInfo);
  if (restInfo === null) {
    return <h1>Loading..</h1>;
  }
  const categories =
    restInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("items->", categories);
  return (
    <div className="text-center">
      <h2>Menu</h2>

      {categories?.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          category={category?.card?.card}
          showItems={index === showIndex ? true : false}
          showIndexHandler={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
