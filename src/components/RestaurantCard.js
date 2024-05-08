import { CDN_URL } from "../utils/constants";
import { MdOutlineStarBorder } from "react-icons/md";

const RestuarantCard = (props) => {
  const { name, cuisines, avgRating, totalFee, cloudinaryImageId, areaName } =
    props.restaurant;
  return (
    <div
      className="w-full h-50 sm:w-[250px] sm:h-65 flex-row md:w-[300px] md:h-80 flex md:flex-col gap-3 hover:scale-95"
      data-testid="restCard"
    >
      <div className="bg-gradient-to-t from-black via-transparent to-transparent rounded-lg relative">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="Product Name"
          className="relative w-[150px] h-[100px] md:h-40 md:w-full object-cover transition-all border rounded-lg -z-10"
        />
        <span className="absolute left-3 bottom-0 uppercase text-xl break-words text-white font-bold z-20 pb-2">
          50% OFF
        </span>
      </div>
      <div className="flex flex-col gap-0 leading-3 w-2/3 md:w-full">
        <h2 className="font-bold text-base py-2 md:text-lg">{name}</h2>
        <div className="flex gap-2 items-center">
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <MdOutlineStarBorder
              style={{ width: "20px", color: "white" }}
              className="text-white text-2xl z-1000"
            />
          </div>
          <h2 className="font-bold">{avgRating}</h2>
        </div>
        <p className="py-2 text-ellipsis whitespace-nowrap overflow-hidden">
          {cuisines.join(", ")}
        </p>
        <p>{areaName}</p>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white rounded-lg z-10">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestuarantCard;
