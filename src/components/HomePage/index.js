import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ShoppingCart } from "lucide-react";

const plants = [
  {
    name: "House Shape Close",
    price: 350.0,
    image: "/assets/1.jpg",
    oldPrice: 400.0,
  },
  {
    name: "Tropical Delight",
    price: 280.0,
    image: "/assets/2.jpg",
    oldPrice: 320.0,
  },
  {
    name: "Sunny Succulent",
    price: 180.0,
    image: "/assets/3.jpg",
    oldPrice: 200.0,
  },
  {
    name: "Leafy Wonder",
    price: 220.0,
    image: "/assets/4.jpg",
    oldPrice: 250.0,
  },
  {
    name: "Cactus Dream",
    price: 150.0,
    image: "/assets/5.jpg",
    oldPrice: 180.0,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Carousel */}
      <Carousel
        responsive={responsive}
        infinite={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        className="pb-12"
      >
        {plants.map((plant, index) => (
          <div key={index} className="text-center px-4">
            <div className="relative">
              <Image
                src={plant.image}
                alt={plant.name}
                width={400}
                height={320}
                className="mx-auto"
              />
            </div>
            <p className="mt-2 text-lg">{plant.name}</p>
            <p className="font-bold text-lg">${plant.price.toFixed(2)}</p>
            <p className="text-gray-500 line-through text-sm">
              ${plant.oldPrice.toFixed(2)}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomePage;
