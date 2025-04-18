"use client";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/images/hero/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black bg-opacity-60" />

      {/* Hero Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center space-y-6 px-6 text-center">
        {/* Car Brand Logos */}
        <div className="mb-6 flex flex-wrap items-center justify-center gap-10">
          <Image
            src="/images/logo/Porsche-Logo.png"
            alt="Porsche"
            width={80}
            height={80}
          />
          <Image
            src="/images/logo/Rolls-Royce-Logo.png"
            alt="Rolls Royce"
            width={80}
            height={80}
          />
          <Image
            src="/images/logo/maybach-noir.png"
            alt="Maybach"
            width={80}
            height={80}
          />
        </div>
        {/* Heading */}
        <h1 className="font-playfair text-4xl font-semibold uppercase leading-tight tracking-wide text-white sm:text-6xl md:text-7xl">
  choissisez l&apos;élégance pour <br /> vos futurs événements
</h1>

{/* Subheading */}
<p className="font-lora mt-4 text-xl italic tracking-wider text-white">
  Louer votre moment
</p>

{/* CTA Button */}
<button className="font-playfair rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200">
  réserver une voiture
</button>

      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 z-30 -translate-x-1/2 transform">
        <div className="flex h-10 w-6 animate-bounce items-start justify-center rounded-full border-2 border-white p-1">
          <div className="h-1 w-1 rounded-full bg-white" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
