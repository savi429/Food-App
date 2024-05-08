import axios from "axios";
import { useEffect, useState } from "react";
import { REST_MENU } from "./constants";

const useRestaurantMenu = (restId) => {
  const [restInfo, setRestInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `${REST_MENU}${restId}&catalog_qa=undefined&submitAction=ENTER`
      );
      console.log("resmenu", res);
      setRestInfo(res?.data?.data?.cards);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return restInfo;
};
export default useRestaurantMenu;
