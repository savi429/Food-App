import RestuarantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import RestuarantCard, { withPromotedLabel } from "./RestaurantCard";

const RestaurantsList = ({ cardInfo }) => {
  //   const { gridElements } = cardInfo.gridElements;
  const RestaurantCardWithPromoted = withPromotedLabel(RestuarantCard);

  return (
    <div className="overflow-hidden">
      {/* <h2>{cardInfo.header.title}</h2> */}
      <div className="flex flex-col flex-wrap my-4 gap-5 sm:flex-row sm:flex-wrap">
        {cardInfo?.gridElements?.infoWithStyle?.restaurants?.map(
          (rest, index) => (
            <Link to={"/restaurant/" + rest.info.id} key={rest.info.id}>
              {rest?.info?.promoted ? (
                <RestaurantCardWithPromoted restaurant={rest.info} />
              ) : (
                <RestuarantCard restaurant={rest.info} />
              )}
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default RestaurantsList;
