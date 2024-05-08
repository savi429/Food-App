import RestuarantCard from "./RestaurantCard";

const TopRestaurants = ({ cardInfo }) => {
  const { gridElements } = cardInfo.gridElements;
  return (
    <div className="overflow-hidden">
      <h2>{cardInfo.header.title}</h2>
      <div className="flex gap-4 snap-x snap-mandatory overflow-scroll">
        {cardInfo?.gridElements?.infoWithStyle?.restaurants?.map(
          (restaurant) => {
            return (
              <div key={restaurant.info.id} className="snap-start">
                <RestuarantCard restaurant={restaurant.info} />
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default TopRestaurants;
