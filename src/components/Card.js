import React from "react";

const Card = ({ item }) => {
  const titleFormatted = item.title.slice(0, 20);
  const percentageDrop = (
    ((item.price_strikethrough - item.price) / item.price_strikethrough) *
    100
  ).toFixed(0);

  console.log(item);
  return (
    <div className="card">
      <div className="img-container">
        <img src={item.url_image} alt={item.title} />
      </div>
      <div className="text-container">
        <h5>{titleFormatted}...</h5>
        <p>
          Price Drops from {item.price_strikethrough} to {item.price}
        </p>
        <p>Rating:{item.rating}</p>
        <div className="info-container">
          <div className="circle">
            {percentageDrop}
            <a href={`https://www.amazon.in/${item.url}`}>Go to site</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
