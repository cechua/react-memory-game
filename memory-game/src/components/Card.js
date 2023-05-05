import React from "react";

const Card = ({ imageSrc, imageName, onClickHandler }) => {
  return (
    <div className="card" onClick={onClickHandler}>
      <img src={imageSrc} alt={imageName} className="image" />
      <div className="container">
        <h4>
          <b>{imageName}</b>
        </h4>
      </div>
    </div>
  );
};

export default Card;
