import { useEffect, useState } from "react";
import axios from "axios";
const useRestaurantsList = () => {
  const [restaurants, setRestaurants] = useState(null);

  useEffect(() => {
    getRestaurantsList();
  }, []);

  const getRestaurantsList = async () => {
    try {
      const res = await axios.get("");
      setRestaurants(res);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  return restaurants;
};
export default useRestaurantsList;
