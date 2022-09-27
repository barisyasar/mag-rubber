import React from 'react';
import SwipeButton from '../SwipeButton';
import '../../assets/css/components/Slider/style.css';
import Video from '../Video';

export default function Slider() {
  const x = 'Experience\nLeads To\n Excellence';
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride={false}
      >
        <div className="carousel-indicators mag-rubber-carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active rounded-circle circle-button"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            className="rounded-circle circle-button"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            className="rounded-circle circle-button "
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            className="rounded-circle  circle-button "
            aria-label="Slide 4"
          ></button>
          <p className="slide-text">SCROLL DOWN </p>
          <SwipeButton />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-item-text">
              <h1>
                <q className="text-content">Experience Leads To Excellence</q>
              </h1>
            </div>
            <img
              src="/assets/images/product1.png"
              alt=".."
              className="second-image"
            />
            <img
              src="/assets/images/slider-background.png"
              alt="slider-backgorund"
              width="100%"
            />
          </div>
          <div className="carousel-item ">
            <div className="carousel-item-text">
              <h1>
                <q className="carousel-caption-white text-content">
                  Experience Leads To Excellence
                </q>
              </h1>
            </div>

            <Video />
          </div>
          <div className="carousel-item ">
            <div className="carousel-item-text">
              <h1>
                <q className="text-content carousel-caption-white ">
                  Experience Leads To Excellence
                </q>
              </h1>
            </div>
            <img
              src="/assets/images/slider2.jpg"
              alt="slider-backgorund"
              width="100%"
            />
          </div>
          <div className="carousel-item ">
            <div className="carousel-item-text">
              <h1>
                <q className="text-content carousel-caption-white ">
                  Experience Leads To Excellence
                </q>
              </h1>
            </div>
            <img
              src="/assets/images/slider3.jpg"
              alt="slider-backgorund"
              width="100%"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon  mag-rubber-prev-icon "
            aria-hidden="true"
          >
            <img src="/assets/images/left.svg" alt="left" />
          </span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next "
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon mag-rubber-next-icon"
            aria-hidden="true"
          >
            <img src="/assets/images/right.svg" alt="right" />
          </span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="to" id="to"></div>
    </div>
  );
}
