import React, { useState, useEffect } from "react";
import { MEDIA_ASSET_URL } from "../utils/constants";

const BannerCarousel = ({ cardInfo }) => {
  const { layout } = cardInfo.layout;
  const cards = cardInfo?.imageGridCards?.info;
  const [scrollPosition, setScrollPosition] = useState(0);
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);
  const cardWidth = 52 + 16;
  useEffect(() => {
    // Enable/disable navigation buttons based on scroll position
    setDisablePrev(scrollPosition <= 0);
    setDisableNext(scrollPosition >= (cards.length - 1) * cardWidth);
  }, [scrollPosition, cards.length, cardWidth]);

  const handlePrevClick = () => {
    if (scrollPosition > 0) {
      setScrollPosition(scrollPosition - cardWidth);
    }
  };
  const handleNextClick = () => {
    const maxScroll = (cards.length - 1) * cardWidth;
    const nextScrollPosition = scrollPosition + cardWidth;
    const maxValidScrollPosition = Math.min(maxScroll, nextScrollPosition);

    if (scrollPosition < maxScroll) {
      setScrollPosition(maxValidScrollPosition);
    }
  };
  return (
    <>
      <div className="flex justify-between py-2">
        <h1 className="font-bold text-lg">{cardInfo.header.title}</h1>
        <div>
          <button
            onClick={handlePrevClick}
            className="mr-2"
            disabled={disablePrev}
          >
            prev
          </button>
          &nbsp;
          <button onClick={handleNextClick} disabled={disableNext}>
            next
          </button>
        </div>
      </div>

      <div className="overflow-x-hidden relative whitespace-nowrap">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${scrollPosition}px)` }}
        >
          {cards?.map((image) => {
            return (
              <div key={image.id} className="w-52 mr-4 flex-shrink-0 ">
                <img
                  src={`${MEDIA_ASSET_URL}/${image.imageId}`}
                  alt={image.text}
                  className="w-52 h-52 rounded-full"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BannerCarousel;
