import { useState } from "react";
const FoodCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [food, setFood] = useState([
    "savitha",
    "rajitha",
    "kavitha",
    "rajani",
    "ricky",
    "chitty",
  ]);

  const navigateLeft = () => {
    setCurrentIndex(currentIndex - 2);
  };
  const navigateRight = () => {
    setCurrentIndex(currentIndex + 2);
  };
  return (
    <div className="carousel-container">
      <div>
        <span onClick={navigateLeft} disabled={!currentIndex}>
          left
        </span>
        <span onClick={navigateRight}>right</span>
      </div>
      <div className="carousel">
        {food.map((item) => {
          return <div>{item}</div>;
        })}
      </div>
    </div>
  );
};
export default FoodCarousel;
