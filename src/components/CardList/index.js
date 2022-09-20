import React from "react";
import "../../assets/css/components/CardList/style.css";
import Card from "./Card";
export default function CardList() {
  const cardDetail =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, non eaque adipisci sed ipsam aperiam repellendus in tempora dicta nostrum.";

  return (
    <section className="card-wrapper d-flex align-items-center">
      <div className="container">
        <div className="card-list d-flex">
          <Card text={cardDetail} />
          <Card text={cardDetail} />
          <Card text={cardDetail} />
        </div>
      </div>
    </section>
  );
}
