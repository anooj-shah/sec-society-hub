import React from "react";

function CardDay(props) {
  return (
    <div className="note">
      <h1>{props.day}</h1>
      <p>{props.agenda}</p>
      <p>at <i>{props.time}</i></p>
    </div>
  );
}

export default CardDay;
