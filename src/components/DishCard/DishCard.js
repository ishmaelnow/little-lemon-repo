import React from "react";
import "./DishCard.css"; // Import styles

const DishCard = ({ name, price, description, image }) => {
  // Generate a unique class based on the dish name
  const imageClass = name.toLowerCase().replace(/\s+/g, "-"); // Converts "Greek Salad" to "greek-salad"

  return (
    <div className="dish-card">
      <img src={image} alt={name} className={`dish-image ${imageClass}`} />
      <h2 className="dish-name">{name}</h2>
      <p className="dish-price">${price}</p>
      <p className="dish-description">{description}</p>
      <button className="order-button">Order a delivery</button>
    </div>
  );
};

export default DishCard;
