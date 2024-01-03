import { useState, useEffect, useCallback, useContext } from "react";
import axios from "axios";
import RestuarantCard, { withPromotedLabel } from "./RestaurantCard";
// import FoodCarousel from "./FoodCarousel";
import { SWIGGY_URL } from "../utils/constants";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import useOnlineStatus from "./../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const onlineStatus = useOnlineStatus();
  const RestaurantCardWithPromoted = withPromotedLabel(RestuarantCard);
  const { setUserInfo, loggedInUser } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(SWIGGY_URL);
      console.log("res..", res?.data?.data?.cards[3]);
      setRestaurants(
        res?.data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        res?.data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    };
    fetchData();
  }, []);

  const getTopRatedRestaurants = (event) => {
    console.log(event);
    setRestaurants(restaurants.slice(0, 4));
  };

  const getSearchResults = () => {
    const filteredResult = restaurants.filter((el) =>
      el.info.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    console.log("filteredRestaurants", filteredResult);
    setFilteredRestaurants(filteredResult);
  };
  if (!onlineStatus) {
    return <h1> Look like your offline!..Please check internet connection!</h1>;
  }
  console.log("render");
  return (
    <div className="body-container">
      <div className="flex">
        <input
          type="text"
          className="m-2 p-2 border border-solid border-black"
          value={searchInput}
          placeholder="Restaurants.."
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <button
          onClick={getSearchResults}
          className="px-4 py-2 bg-green-200 m-4"
        >
          Search
        </button>
        <button
          onClick={getTopRatedRestaurants}
          className="px-4 py-2 bg-green-300 m-4"
        >
          Top Rated Restaurants
        </button>
        <input
          type="text"
          className="m-2 p-2 border border-solid border-black"
          value={loggedInUser}
          placeholder="User Name"
          onChange={(event) => setUserInfo(event.target.value)}
        />
        <button>click</button>
      </div>
      {filteredRestaurants?.length > 0 && (
        <div className="flex flex-wrap">
          {filteredRestaurants.map((rest, index) => (
            <Link to={"/restaurant/" + rest.info.id}>
              {rest?.info?.promoted ? (
                <RestaurantCardWithPromoted restaurant={rest.info} />
              ) : (
                <RestuarantCard restaurant={rest.info} />
              )}
            </Link>
          ))}
        </div>
      )}
      {filteredRestaurants?.length === 0 && <ShimmerUi />}
    </div>
  );
};
export default Body;
