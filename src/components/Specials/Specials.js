import React from "react";
import "./Specials.css";

const Specials = () => {
  return (
    <div className="specials">
      {/* Header with h2 above the first dish and button above the last dish */}
      <div className="specials-header">
        <h2>This week specials!</h2>
        <button className="online-menu-button">Order Now</button>
      </div>
      
      <div className="special-items">
        <div className="special">
          <img src="/images/greek-salad.png" alt="Greek Salad" />
          <h3>Greek Salad</h3>
          <p>$12.99</p>
          <p>The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
        </div>
        <div className="special">
          <img src="/images/bruschetta.png" alt="Bruschetta" />
          <h3>Bruschetta</h3>
          <p>$5.99</p>
          <p>Our Bruschetta is made from grilled bread smeared with garlic and seasoned with salt and olive oil.</p>
        </div>
        <div className="special">
          <img src="/images/lemon-dessert.png" alt="Lemon Dessert" />
          <h3>Lemon Dessert</h3>
          <p>$6.99</p>
          <p>A delightful lemon-infused dessert with a sweet and tangy flavor, topped with fresh whipped cream.</p>
        </div>
      </div>
    </div>
  );
};

export default Specials;
