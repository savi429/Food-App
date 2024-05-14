import { useEffect } from "react";

const Filters = ({ cardInfo }) => {
  console.log("cardInfo", cardInfo);
  const { sortConfigs, facetList } = cardInfo;
  useEffect(() => {}, []);

  return (
    <div>
      <button>Hello</button>
      <button>Hi</button>
    </div>
  );
};

export default Filters;
