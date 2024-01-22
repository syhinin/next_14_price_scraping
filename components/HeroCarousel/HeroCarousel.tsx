"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const heroImages = [
  {
    src: "/assets/images/hero-1.svg",
    alt: "smartwatch",
  },
  {
    src: "/assets/images/hero-2.svg",
    alt: "bag",
  },
  {
    src: "/assets/images/hero-3.svg",
    alt: "lamp",
  },
  {
    src: "/assets/images/hero-4.svg",
    alt: "air fryer",
  },
  {
    src: "/assets/images/hero-5.svg",
    alt: "chair",
  },
];

export const HeroCarousel = () => {
  return (
    <div className="hero-carousel">
      <Carousel
        showThumbs={false}
        // autoPlay
        infiniteLoop
        // interval={2000}
        showArrows={false}
        showStatus={false}
      >
        {heroImages.map(({ src, alt }) => (
          <Image
            key={alt}
            src={src}
            alt={alt}
            width="484"
            height="484"
            className="object-contain"
          />
        ))}
      </Carousel>

      <Image
        className="max-xl:hidden absolute -left-[15%] bottom-0"
        src="/assets/icons/hand-drawn-arrow.svg"
        width={175}
        height={175}
        alt="arrow"
      />
    </div>
  );
};
