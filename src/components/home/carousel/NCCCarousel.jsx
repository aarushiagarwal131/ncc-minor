import React, { useState } from "react";
import { carousel1, carousel2, carousel3 } from "./import";
const NCCCarousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide carousel-home"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={carousel1} class="d-block w-100" alt="image-1" />
        </div>
        <div class="carousel-item">
          <img src={carousel2} class="d-block w-100" alt="image-2" />
        </div>
        <div class="carousel-item">
          <img src={carousel3} class="d-block w-100" alt="image-3" />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default NCCCarousel;
