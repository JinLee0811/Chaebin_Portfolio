"use client";

import React, { useState } from "react";
import Image from "next/image";
import chaebin_main from "../../../public/chaebin_main.webp";
import comingsoon from "../../../public/comingsoon.webp";
import Navbar from "@/components/Navbar";

const images = [
  chaebin_main,
  chaebin_main,
  chaebin_main,
  comingsoon,
  chaebin_main,
  chaebin_main,
  comingsoon,
  chaebin_main,
  chaebin_main,
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof chaebin_main | null>(null);

  const handleImageClick = (image: typeof chaebin_main) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Navbar />
      <div className="mt-10 p-14 font-notcourier">
        <h1 className="text-3xl text-white font-bold mb-4">This is Chaebin Gallery</h1>
        <p className="mb-8 text-white text-lg">
          I am a passionate singer who loves to perform and connect with audiences around the world.
          Explore my journey and achievements.
        </p>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* 첫 번째 열 */}
          <div className="grid gap-4">
            <div
              className="cursor-pointer overflow-hidden rounded-lg"
              onClick={() => handleImageClick(images[0])}>
              <Image
                src={images[0]}
                alt="Gallery Image 1"
                className="object-cover hover:scale-110 transition-transform duration-300 rounded-lg"
                width={400}
                height={400}
              />
            </div>
            <div
              className="cursor-pointer overflow-hidden rounded-lg"
              onClick={() => handleImageClick(images[1])}>
              <Image
                src={images[1]}
                alt="Gallery Image 2"
                className="object-cover hover:scale-110 transition-transform duration-300 rounded-lg"
                width={400}
                height={400}
              />
            </div>
          </div>

          {/* 두 번째 열 */}
          <div className="grid gap-4">
            <div
              className="cursor-pointer overflow-hidden rounded-lg"
              onClick={() => handleImageClick(images[2])}>
              <Image
                src={images[2]}
                alt="Gallery Image 3"
                className="object-cover hover:scale-110 transition-transform duration-300 rounded-lg"
                width={400}
                height={400}
              />
            </div>
            <div
              className="cursor-pointer overflow-hidden rounded-lg"
              onClick={() => handleImageClick(images[3])}>
              <Image
                src={images[3]}
                alt="Gallery Image 4"
                className="object-cover hover:scale-110 transition-transform duration-300 rounded-lg"
                width={400}
                height={400}
              />
            </div>
          </div>

          {/* 세 번째 열 */}
          <div className="grid gap-4">
            <div
              className="cursor-pointer overflow-hidden rounded-lg"
              onClick={() => handleImageClick(images[4])}>
              <Image
                src={images[4]}
                alt="Gallery Image 5"
                className="object-cover hover:scale-110 transition-transform duration-300 rounded-lg"
                width={400}
                height={400}
              />
            </div>
            <div
              className="cursor-pointer overflow-hidden rounded-lg"
              onClick={() => handleImageClick(images[5])}>
              <Image
                src={images[5]}
                alt="Gallery Image 6"
                className="object-cover hover:scale-110 transition-transform duration-300 rounded-lg"
                width={400}
                height={400}
              />
            </div>
          </div>

          {/* 네 번째 열 */}
          <div className="grid gap-4">
            <div
              className="cursor-pointer overflow-hidden rounded-lg"
              onClick={() => handleImageClick(images[6])}>
              <Image
                src={images[6]}
                alt="Gallery Image 7"
                className="object-cover hover:scale-110 transition-transform duration-300 rounded-lg"
                width={400}
                height={400}
              />
            </div>
            <div
              className="cursor-pointer overflow-hidden rounded-lg"
              onClick={() => handleImageClick(images[7])}>
              <Image
                src={images[7]}
                alt="Gallery Image 8"
                className="object-cover hover:scale-110 transition-transform duration-300 rounded-lg"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center">
            <div className="relative">
              <button
                className="absolute top-4 right-4 text-white text-2xl font-bold"
                onClick={closeModal}>
                &times;
              </button>
              <Image
                src={selectedImage}
                alt="Selected Image"
                width={800}
                height={800}
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
