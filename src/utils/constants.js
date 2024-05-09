export const endPoint = {
  BaseUrl: "http://127.0.0.1:3000/",
  endpoint: "/api/v1",
  getAllTours: "/tours",
};
export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export const SWIGGY_URL = `https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.692345&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;
export const REST_MENU = `https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=`;
export const REST_ITEM_CATEGORY = `type.googleapis.com/swiggy.presentation.food.v2.ItemCategory`;
export const WIDGET_CONFIG = `type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget`;
export const UPDATE_URL = "https://www.swiggy.com/dapi/restaurants/list/update";
export const MEDIA_ASSET_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360";
export const TYPES = {
  WIDGET: "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
  CONTENT: "type.googleapis.com/swiggy.seo.widgets.v1.BasicContent",
  FILTERS:
    "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
  SHOW_MORE_BUTTON: "type.googleapis.com/swiggy.seo.widgets.v1.ShowMoreButton",
  BRANDS: "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
  FOOD: "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
  FAVOURITE_RESTAURANT:
    "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
};

// export const IDS ={
//   WHATS_ON_YOUR_MIND: "whats_on_your_mind",
//   top_brands_for_you",
//   popular_restaurants_title"
//   "restaurant_grid_listing",
//   "show_more_button"
//   "restaurant_near_me_links"
//   app_install_links"

// }
