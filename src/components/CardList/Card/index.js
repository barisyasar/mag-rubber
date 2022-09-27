import React from "react";

export default function Card(props) {
  const { text } = props;
  return (
    <div className="card d-flex justify-content-center">
      <div className="triangle"></div>
      <div className="triangle"></div>
      <div className="triangle"></div>
      <p className="card-text">{text}</p>
    </div>
  );
}
