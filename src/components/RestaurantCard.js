import { CDN_URL } from "../utils/constants";
const RestuarantCard = (props) => {
  console.log(props);
  const { name, cuisines, avgRating, totalFee, cloudinaryImageId, areaName } =
    props.restaurant;
  return (
    <div className="m-4 p-4 w-[250px] border border-solid h-[300px]">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="Product Name"
        className="h-1/2 w-full object-fill transition-all hover:scale-105"
      />
      <h2 className="font-bold py-2">{name}</h2>
      <p className="product-description">{cuisines.join(", ")}</p>
      <p>{areaName}</p>
      <span class="product-price">{avgRating}</span>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestuarantCard;
