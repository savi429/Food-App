import { useLocation, useNavigate, useParams } from "react-router-dom";
import useRestaurantMenu from "./../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import ShimmerUi from "./ShimmerUi";

const RestaurantMenu = () => {
  const { restId } = useParams();
  const location = useLocation();
  console.log("location", location);
  const [showIndex, setShowIndex] = useState(0);
  const restInfo = useRestaurantMenu(restId);

  if (restInfo === null) {
    return <ShimmerUi />;
  }
  const categories =
    restInfo[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
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
