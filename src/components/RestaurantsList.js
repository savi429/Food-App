import { Link } from "react-router-dom";
import RestuarantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import RestaurantHoc from "./RestaurantHoc";

const RestaurantsList = ({ cardInfo }) => {
  //   const { gridElements } = cardInfo.gridElements;
  const rests = cardInfo?.gridElements?.infoWithStyle?.restaurants;
  const [searchInput, setSearchInput] = useState("");

  const RestaurantCardWithPromoted = withPromotedLabel(RestuarantCard);
  const HOCWithProps = RestaurantHoc({ name: "savi" })(RestuarantCard);
  const [restaurants, setRestaurants] = useState(rests);
  const [filteredRestaurants, setFilteredRestaurants] = useState(rests);
  useEffect(() => {
    // addEventListener("scroll",()=>{
    //     if (window.innerHeight + document.
    // })
  }, []);
  const getSearchResults = () => {
    const filteredResult = restaurants.filter((el) =>
      el.info.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    console.log("filteredRestaurants", filteredResult);
    setFilteredRestaurants(filteredResult);
  };
  return (
    <div className="overflow-hidden">
      <div className="flex">
        <input
          type="text"
          className="m-2 p-2 border border-solid border-black"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <button
          onClick={getSearchResults}
          className="px-4 py-2 bg-green-200 m-4"
          data-testid="searchBtn"
        >
          Search
        </button>
        {/* <button
          onClick={getTopRatedRestaurants}
          className="text-xs sm:px-4 py-2 bg-green-300 m-4"
          data-testid="topRated"
        >
          Top Rated Restaurants
        </button> */}
      </div>
      {/* <h2>{cardInfo.header.title}</h2> */}
      <div className="flex flex-col flex-wrap my-4 gap-5 sm:flex-row sm:flex-wrap">
        {filteredRestaurants?.map((rest, index) => (
          <Link to={"/restaurant/" + rest.info.id} key={rest.info.id}>
            {rest?.info?.promoted ? (
              <RestaurantCardWithPromoted restaurant={rest.info} />
            ) : (
              <RestuarantCard restaurant={rest.info} />
              // <HOCWithProps restaurant={rest.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RestaurantsList;
