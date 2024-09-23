import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ShoppingCart, XCircle } from "lucide-react"; // Import close icon

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
    slidesToSlide: 1, // Moves one item at a time
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const HomePage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalToggle = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Discover Our Plant Collection
      </h1>

      {/* Contact Info Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={handleModalToggle}
          className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition-colors duration-300"
        >
          ติดต่อเรา
        </button>
      </div>

      {/* Modal for Contact Info */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 w-80 relative shadow-lg">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              onClick={handleModalToggle}
            >
              <XCircle className="w-6 h-6" />
            </button>
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Line:</strong> @yourlineid
              </li>
              <li>
                <strong>Facebook:</strong>{" "}
                <Link href="https://facebook.com/yourpage">facebook.com/yourpage</Link>
              </li>
              <li>
                <strong>Phone:</strong> +123-456-7890
              </li>
            </ul>
            <button
              onClick={handleModalToggle}
              className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300 w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Carousel */}
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        customTransition="all 1s"
        containerClass="carousel-container"
        itemClass="carousel-item"
        renderDotsOutside={true}
        className="pb-12"
      >
        {plants.map((plant, index) => (
          <div
            key={index}
            className="text-center px-4 transform transition-all hover:scale-105 duration-300 opacity-50 hover:opacity-100 relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src={plant.image}
                alt={plant.name}
                width={400}
                height={320}
                className="mx-auto object-cover"
              />

              {/* Add the SOLD OUT ribbon for specific plant (e.g., Sunny Succulent) */}
              {plant.name === "Sunny Succulent" && (
                <div className="absolute top-12 right-0 bg-red-600 text-white text-sm font-bold px-2 py-1 transform rotate-50 origin-top-right">
                  SOLD OUT
                </div>
              )}
            </div>
            <p className="mt-4 text-lg font-medium text-gray-700">{plant.name}</p>
            <p className="font-bold text-lg text-green-600">${plant.price.toFixed(2)}</p>
            <p className="text-gray-500 line-through text-sm">
              ${plant.oldPrice.toFixed(2)}
            </p>
            <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300">
              <ShoppingCart className="inline-block mr-2" /> Add to Cart
            </button>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomePage;
