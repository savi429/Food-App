import { useState, useEffect, useContext } from "react";
import axios from "axios";
import RestuarantCard, { withPromotedLabel } from "./RestaurantCard";
import { SWIGGY_URL, TYPES, WIDGET_CONFIG } from "../utils/constants";
import ShimmerUi from "./ShimmerUi";
import useOnlineStatus from "./../utils/useOnlineStatus";
import BannerCarousel from "./BannerCarousel";
import TopRestaurants from "./TopRestaurants";
import RestaurantsList from "./RestaurantsList";
import UserContext from "../utils/UserContext";
import { useDispatch } from "react-redux";
import { fetchAPIData } from "../redux/userSlice";
import Filters from "./Filters";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const onlineStatus = useOnlineStatus();
  const RestaurantCardWithPromoted = withPromotedLabel(RestuarantCard);
  const [homePageData, setHomePageData] = useState([]);
  const { userName, setUserName } = useContext(UserContext);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
    dispatch(fetchAPIData("hello"));
  }, []);
  const fetchData = async () => {
    try {
      const res = await axios.get(SWIGGY_URL);
      setHomePageData(res?.data?.data?.cards);
      // setRestaurants(
      //   res?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
      //     ?.restaurants
      // );
      // setFilteredRestaurants(
      //   res?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
      //     ?.restaurants
      // );
    } catch (err) {
      console.log("err", err);
    }
  };

  const getTopRatedRestaurants = () => {
    setFilteredRestaurants(restaurants.slice(0, 4));
  };

  if (!onlineStatus) {
    return <h1> Look like your offline!..Please check internet connection!</h1>;
  }
  const getWidgetUI = (type, cardData) => {
    const id = cardData?.id;
    switch (type) {
      case TYPES.WIDGET:
        switch (id) {
          case "whats_on_your_mind":
            return <BannerCarousel cardInfo={cardData} />;
          case "top_brands_for_you":
            return <TopRestaurants cardInfo={cardData} />;
          case "restaurant_grid_listing":
            return <RestaurantsList cardInfo={cardData} />;
          default:
            return;
        }
      case TYPES.CONTENT:
        return <h1 className="font-bold text-lg">{cardData.title}</h1>;
      case TYPES.FILTERS:
        return <Filters cardInfo={cardData} />;
    }
  };
  const getCorrespondigUI = (data) => {
    const type = data?.card?.card?.["@type"];
    const cardData = data?.card?.card;

    return getWidgetUI(type, cardData);
  };

  console.log("render");

  return homePageData?.length === 0 ? (
    <ShimmerUi />
  ) : (
    <>
      {/* <input
        type="text"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
      /> */}
      {homePageData.length > 0 &&
        homePageData.map((widgets) => {
          return getCorrespondigUI(widgets);
        })}
      {/* <div className="flex">
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
        <button
          onClick={getTopRatedRestaurants}
          className="text-xs sm:px-4 py-2 bg-green-300 m-4"
          data-testid="topRated"
        >
          Top Rated Restaurants
        </button>
      </div> */}
      {/* {filteredRestaurants?.length > 0 && (
        <div className="flex flex-col flex-wrap my-4 gap-5 sm:flex-row sm:flex-wrap">
          {filteredRestaurants.map((rest, index) => (
            <Link to={"/restaurant/" + rest.info.id} key={rest.info.id}>
              {rest?.info?.promoted ? (
                <RestaurantCardWithPromoted restaurant={rest.info} />
              ) : (
                <RestuarantCard restaurant={rest.info} />
              )}
            </Link>
          ))}
        </div>
      )} */}
    </>
  );
};
export default Body;
