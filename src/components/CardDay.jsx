import React from "react";

function CardDay(props) {
  return (
    <div className="note">
      <h1>{props.day}</h1>
      <p>SEC Meeting (8:15pm)</p>
    </div>
  );
}

export default CardDay;
