import React from "react";
import data from "../../data.json";

const Card = (props) => {
  const defaultImage = data.defaultImage;
  return (
    <div className="card">
      <div className="card-body">
        <div
          className="card-image"
          style={{ backgroundImage: `url(${props.image ? props.image : defaultImage})` }}
        ></div>
        <h2 className="card-title">{props.title === "Nikola Mirilo" ? "Nikola Mirilo" : "Pera Peric"}</h2>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
