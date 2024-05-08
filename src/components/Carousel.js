import { useState } from "react";
// import { CDN_URL } from "./../utils/constants";

const Carousel = ({ slides }) => {
  const CDN_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    console.log(currentIndex);
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    console.log(currentIndex);
  };
  const prevSlide = () => {
    console.log(currentIndex);

    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    console.log(currentIndex);
  };
  const translateValue = `-${currentIndex * (100 / slides.length)}%`;

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex  h-[300px] w-full transition-transform duration-500 ease-in-out"
        style={{
          width: `${slides.length * 100}%`,
          transform: `translateX(${translateValue})`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={CDN_URL + slide.imageId}
              alt={`banner-${index + 1}`}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-l focus:outline-none"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-r focus:outline-none"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};
export default Carousel;
