import { useState, useEffect, useCallback, useContext } from "react";
import axios from "axios";
import RestuarantCard, { withPromotedLabel } from "./RestaurantCard";
import { SWIGGY_URL, TYPES, WIDGET_CONFIG } from "../utils/constants";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import useOnlineStatus from "./../utils/useOnlineStatus";
import Carousel from "./Carousel";
import { useAppContext } from "../utils/contextProvider";
import payload from "./../utils/payload.json";
import BannerCarousel from "./BannerCarousel";
import TopRestaurants from "./TopRestaurants";
import RestaurantsList from "./RestaurantsList";
const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const onlineStatus = useOnlineStatus();
  const RestaurantCardWithPromoted = withPromotedLabel(RestuarantCard);
  const [homePageData, setHomePageData] = useState([]);

  useEffect(() => {
    fetchData();
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
  const getWidgetUI = (cardData) => {
    // const widget = cardData?.gridElements?.infoWithStyle;
    const id = cardData?.id;
    switch (id) {
      case "whats_on_your_mind":
        return <BannerCarousel cardInfo={cardData} />;
      case "popular_restaurants_title":
        return <h1 className="font-bold text-lg">{cardData.title}</h1>;
      case "top_brands_for_you":
        return <TopRestaurants cardInfo={cardData} />;
      case "restaurant_grid_listing":
        return <RestaurantsList cardInfo={cardData} />;
      default:
        return null;
    }
  };
  const getCorrespondigUI = (data) => {
    const type = data?.card?.card?.["@type"];
    const cardData = data?.card?.card;
    switch (type) {
      case WIDGET_CONFIG:
        return getWidgetUI(cardData);
      default:
        null;
    }
  };

  console.log("render");

  return homePageData?.length === 0 ? (
    <ShimmerUi />
  ) : (
    <>
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
