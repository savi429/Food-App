export const endPoint = {
  getAllTours: "/tours",
};
export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export const SWIGGY_URL = `https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;
export const REST_MENU = `https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=`;
export const REST_ITEM_CATEGORY = `type.googleapis.com/swiggy.presentation.food.v2.ItemCategory`;
export const WIDGET_CONFIG = `type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget`;
export const TYPES = {
  MenuVegFilterAndBadge: "MenuVegFilterAndBadge",
  MenuCarousel: "MenuCarousel",
  ItemCategory: "ItemCategory",
  RestaurantAddress: "RestaurantAddress",
  RestaurantLicenseInfo: "RestaurantLicenseInfo",
  Restaurant: "Restaurant",
};
