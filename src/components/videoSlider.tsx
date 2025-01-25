"use client";

import React, { useState } from "react";
import YouTube from "react-youtube";
import Image from "next/image";

const videos = [
  {
    id: "video1",
    title: "The Boy is Mine",
    thumbnail: "https://img.youtube.com/vi/QW0i1U4u0KE/maxresdefault.jpg",
    videoId: "QW0i1U4u0KE",
  },
  {
    id: "video2",
    title: "Positions",
    thumbnail: "https://img.youtube.com/vi/tQ0yjYUFKAE/maxresdefault.jpg",
    videoId: "tQ0yjYUFKAE",
  },
  {
    id: "video3",
    title: "Thank U, Next",
    thumbnail: "https://img.youtube.com/vi/gl1aHhXnN1k/maxresdefault.jpg",
    videoId: "gl1aHhXnN1k",
  },
];

const VideoCarousel: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleVideoClick = (videoId: string) => {
    setCurrentVideoId(videoId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentVideoId(null);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative w-full py-24 bg-gray-600">
      <h2 className="text-5xl font-bold text-white mb-6 text-center">Videos</h2>

      {/* Carousel */}
      <div className="relative flex items-center justify-center">
        {/* Previous Button */}
        <button
          className="absolute left-52 bg-white p-2 rounded-full shadow-lg hover:bg-gray-300"
          onClick={handlePrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Video Thumbnail */}
        <div className="w-[800px] h-max rounded-3xl overflow-hidden flex-shrink-0">
          <div
            className="relative w-full h-full cursor-pointer"
            onClick={() => handleVideoClick(videos[currentIndex].videoId)}>
            <div className="relative w-full h-0 pb-[56.25%]">
              {" "}
              {/* 16:9 비율 유지 */}
              <Image
                src={videos[currentIndex].thumbnail}
                alt={videos[currentIndex].title}
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <button className="bg-white p-4 rounded-full shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.752 11.168l-4.586-2.753A1 1 0 009 9.21v5.578a1 1 0 001.166.986l4.586-1.372a1 1 0 00.666-.934v-2.492a1 1 0 00-.666-.934z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Next Button */}
        <button
          className="absolute right-52 bg-white p-2 rounded-full shadow-lg hover:bg-gray-300"
          onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && currentVideoId && (
        <div className="fixed w-full h-full inset-0 bg-black bg-opacity-75 flex items-center justify-center z-60">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-black text-2xl bg-white p-5 rounded-full"
            onClick={closeModal}>
            &times;
          </button>
          <div className="relative bg-white rounded-lg overflow-hidden h-auto w-full max-w-6xl">
            {/* YouTube Player */}
            <YouTube
              videoId={currentVideoId}
              opts={{
                width: "100%",
                height: "650",
                playerVars: {
                  autoplay: 1,
                },
              }}
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoCarousel;
