import React, { useState } from "react";
import "./star.css";

const Star = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="wrapper">
      {/* &#x2605; */}
      <div className="star-container">
        {[...Array(5)].map((star, ind) => {
          ind += 1;
          return (
            <button
              key={ind}
              className={ind <= (hover || rating) ? "on" : "off"}
              style={{
                fontSize: "50px",
                marginTop: "50px",
                marginLeft: "10px",
                backgroundColor: "transparent",
                border: "none",
                outline: "none",
                cursor: "pointer",
              }}
              onClick={() => setRating(ind)}
              onMouseEnter={() => setHover(ind)}
              onMouseLeave={() => setHover(rating)}
            >
              &#9733;
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Star;
