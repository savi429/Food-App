import { useEffect } from "react";

const Filters = ({ cardInfo }) => {
  console.log("cardInfo", cardInfo);
  const { sortConfigs, facetList } = cardInfo;
  useEffect(() => {}, []);

  return <div>Hello Hi how are you</div>;
};

export default Filters;
