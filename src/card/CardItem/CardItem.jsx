import React from "react";

const CardItem = (prpos) => {
  return (
    <div className="card-item">
      <h1>{prpos.title}</h1>
      <hr />
      <p>{prpos.body}</p>
    </div>
  );
};

export default CardItem;
