import React from 'react';
import Card from './Card';
import '../../assets/css/components/AbleToDo/ableToDo.css';

export default function AbleToDo() {
  return (
    <section className="able-to-do">
      <h2 className="able-to-do-heading text-center">
        Things We Are Able To Do
      </h2>
      <div className="card-container d-flex justify-content-center">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}
