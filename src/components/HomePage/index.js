import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ShoppingCart, XCircle } from "lucide-react";

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
    slidesToSlide: 1,
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
      <Head>
        <title>Plant Collection</title>
      </Head>
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Discover Our Plant Collection
      </h1>

      {/* Contact Info Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={handleModalToggle}
          className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg"
        >
          ติดต่อเรา
        </button>
      </div>

      {/* Modal for Contact Info */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 w-80 relative shadow-xl">
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
                <Link href="https://facebook.com/yourpage" className="text-blue-500 hover:underline">
                  facebook.com/yourpage
                </Link>
              </li>
              <li>
                <strong>Phone:</strong> +123-456-7890
              </li>
            </ul>
            <button
              onClick={handleModalToggle}
              className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300 w-full"
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
            className="text-center px-4 transform transition-all hover:scale-105 duration-300"
          >
            <div className="relative rounded-lg overflow-hidden shadow-lg bg-white transition-shadow duration-300 hover:shadow-xl">
              <Image
                src={plant.image}
                alt={plant.name}
                width={400}
                height={320}
                className="mx-auto object-cover"
              />
              {plant.name === "Sunny Succulent" && (
                <div className="absolute top-12 right-0 bg-red-600 text-white text-sm font-bold px-2 py-1 transform rotate-45 origin-top-right">
                  SOLD OUT
                </div>
              )}
            </div>
            <p className="mt-4 text-lg font-medium text-gray-800">{plant.name}</p>
            <p className="font-bold text-lg text-green-600">${plant.price.toFixed(2)}</p>
            <p className="text-gray-500 line-through text-sm">
              ${plant.oldPrice.toFixed(2)}
            </p>
            <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors duration-300 flex items-center justify-center">
              <ShoppingCart className="inline-block mr-2" /> Add to Cart
            </button>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomePage;
