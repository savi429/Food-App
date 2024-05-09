import RestuarantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

const TopRestaurants = ({ cardInfo }) => {
  // const { gridElements } = cardInfo.gridElements;
  return (
    <div className="overflow-hidden">
      <h1 className="font-bold text-lg">{cardInfo.header.title}</h1>
      <div className="flex gap-4 snap-x snap-mandatory overflow-scroll">
        {cardInfo?.gridElements?.infoWithStyle?.restaurants?.map(
          (restaurant) => {
            return (
              <div key={restaurant.info.id} className="snap-start">
                <Link to={"/restaurant/" + restaurant.info.id}>
                  <RestuarantCard restaurant={restaurant.info} priority="low" />
                </Link>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default TopRestaurants;
