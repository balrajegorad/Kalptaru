import React, { useEffect, useRef, useState } from "react";
import "./ImageSlider.css";
import { useTranslation } from "react-i18next";

const images = [
  "/images/slider1.webp",
  "/images/slider2.webp",
  "/images/slider3.webp",
  "/images/slider4.webp",
  "/images/slider5.webp",
  "/images/slider6.webp",
];

export default function ImageSlider() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation();

  // Helper to calculate the width of one slide + the gap
  const getStepSize = () => {
    const container = sliderRef.current;
    if (!container) return 0;
    const slide = container.querySelector(".slide");
    if (!slide) return 0;
    
    // Get the gap from computed styles
    const gap = parseInt(window.getComputedStyle(container).gap) || 0;
    return slide.offsetWidth + gap;
  };

  // TRACK ACTIVE DOT
  const handleScroll = () => {
    const container = sliderRef.current;
    if (!container) return;

    const stepSize = getStepSize();
    if (stepSize === 0) return;

    // Calculate index based on how many "steps" we have scrolled
    const index = Math.round(container.scrollLeft / stepSize);
    
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  // AUTO SCROLL
  useEffect(() => {
    const interval = setInterval(() => {
      const container = sliderRef.current;
      if (!container) return;

      const isAtEnd = container.scrollLeft + container.offsetWidth >= container.scrollWidth - 10;

      if (isAtEnd) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        // Move by one full container view
        container.scrollBy({ left: container.offsetWidth, behavior: "smooth" });
      }
    }, 7000);

    return () => clearInterval(interval);
  }, [activeIndex]); // Re-run if index changes to keep timing fresh

  // ARROWS
  const scroll = (direction) => {
    const container = sliderRef.current;
    if (!container) return;

    // Scrolling by container.offsetWidth keeps things aligned with the viewport
    const amount = direction === "left" ? -container.offsetWidth : container.offsetWidth;
    container.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="image-slider-section">
      <div className="slider-title-wrapper container">
        <span className="line"></span>
        <h2 className="slider-title">{t("slider.title")}</h2>
        <span className="line"></span>
      </div>

      <div className="slider-wrapper container">
        <button className="arrow left" onClick={() => scroll("left")} aria-label="Previous">❮</button>

        <div className="slider-container" ref={sliderRef} onScroll={handleScroll}>
          {images.map((img, index) => (
            <div className="slide" key={index}>
              <img src={img} alt={`Slide ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={() => scroll("right")} aria-label="Next">❯</button>
      </div>

      <div className="dots container">
        {images.map((_, i) => (
          <span key={i} className={`dot ${i === activeIndex ? "active" : ""}`} />
        ))}
      </div>
    </section>
  );
}