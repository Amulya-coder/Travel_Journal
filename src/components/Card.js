import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img
        className="card--image"
        src={`../images/${props.item.image}`}
        alt="travel_images"
      ></img>
      <div className="card--info">
        <div className="card--items">
          <img src="../images/Fill.png" alt=""></img>
          <span className="card--location">{props.item.location}</span>
          <a href={props.item.googleMapsUrl} alt="" className="card--map">
            View on Google maps
          </a>
        </div>
        <h3 className="card--title">{props.item.title}</h3>
        <h5 className="card--date">
          {props.item.startDate} - {props.item.endDate}
        </h5>
        <p className="card--description">{props.item.description}</p>
      </div>
    </div>
  );
}
