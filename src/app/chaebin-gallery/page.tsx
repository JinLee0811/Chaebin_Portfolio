"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

// 이미지 리스트
import image1 from "../../../public/photo/image1.jpeg";
import image2 from "../../../public/photo/image2.jpeg";
import image3 from "../../../public/photo/image3.jpeg";
import image4 from "../../../public/photo/image4.jpeg";
import image5 from "../../../public/photo/image5.jpeg";
import image6 from "../../../public/photo/image6.jpeg";
import image7 from "../../../public/photo/image7.jpeg";
import image8 from "../../../public/photo/image8.jpeg";

const images = [image1, image2, image3, image4, image5, image6, image7, image8];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <Navbar />
      <div className="mt-10 p-14 font-notcourier">
        <h1 className="text-3xl text-white font-bold mb-4">This is Chaebin Gallery</h1>
        <p className="mb-8 text-white text-lg">
          I am a passionate singer who loves to perform and connect with audiences around the world.
          Explore my journey and achievements.
        </p>

        {/* Masonry Layout */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid cursor-pointer overflow-hidden rounded-lg shadow-lg"
              onClick={() => handleImageClick(image.src)}>
              <Image
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="object-cover hover:scale-110 transition-transform duration-300 rounded-lg"
                width={400}
                height={300} // 동적 크기 조정
              />
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center">
            <button
              className="absolute top-10 right-10 hover:bg-gray-500 text-black text-2xl px-3 font-bold bg-white bg-opacity-50 rounded-full"
              onClick={closeModal}>
              &times;
            </button>
            <div className="relative max-w-[90vw] max-h-[90vh]">
              <Image
                src={selectedImage}
                alt="Selected Image"
                className="object-contain rounded-lg"
                layout="intrinsic"
                width={800}
                height={600}
                style={{
                  maxWidth: "100%",
                  maxHeight: "calc(100vh - 80px)", // 모달의 최대 높이를 제한
                }}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
