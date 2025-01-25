"use client";

import React, { useState } from "react";
import YouTube from "react-youtube";
import Image from "next/image";

const videos = [
  {
    id: "video1",
    title: "2024 Chaebin Live Stage in Vietnam", // 제목을 원하는대로 수정하세요
    thumbnail: "https://img.youtube.com/vi/RJ6cM0VkU9I/maxresdefault.jpg",
    videoId: "RJ6cM0VkU9I",
  },
  {
    id: "video2",
    title: "추운 겨울에는 시티팝이지🎅🏻🎄 박혜경 - Loving U ✱chaebin cover✱", // 제목을 원하는대로 수정하세요
    thumbnail: "https://img.youtube.com/vi/xy8rTXRBOEg/maxresdefault.jpg",
    videoId: "xy8rTXRBOEg",
  },
  {
    id: "video3",
    title: "정국(Jung Kuk) - 3D(feat. Jack Harlow) ✱chaebin cover✱", // 제목을 원하는대로 수정하세요
    thumbnail: "https://img.youtube.com/vi/lpq_Sp0yTN8/maxresdefault.jpg",
    videoId: "lpq_Sp0yTN8",
  },
  {
    id: "video4",
    title: "[MV] 이채빈(Chaebin) - Would U :우주", // 제목을 원하는대로 수정하세요
    thumbnail: "https://img.youtube.com/vi/KzpHhjRR_zs/maxresdefault.jpg",
    videoId: "KzpHhjRR_zs",
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
    <div className="relative w-full py-24">
      <div className="flex justify-center items-center gap-12 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">Videos</h2>
        <p className="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
          These are my latest YouTube videos and song cover performances. For more videos, please
          visit my YouTube channel.
        </p>
      </div>
      {/* Carousel */}
      <div className="relative flex items-center justify-center">
        {/* Previous Button */}
        <button
          className="absolute left-4 md:left-8 lg:left-12 bg-white p-2 rounded-full shadow-lg hover:bg-gray-300 z-10 transition-transform duration-300 hover:scale-110"
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
        <div className="w-full max-w-[90%] md:max-w-[70%] lg:max-w-[70%] h-auto rounded-3xl overflow-hidden flex-shrink-0 ">
          <div
            className="relative w-full h-0 pb-[56.25%] cursor-pointer border-2 border-white dark:border-white rounded-3xl"
            onClick={() => handleVideoClick(videos[currentIndex].videoId)}>
            <Image
              src={videos[currentIndex].thumbnail}
              alt={videos[currentIndex].title}
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
            <div className="absolute inset-0 bg-black rounded-3xl bg-opacity-40 flex items-center justify-center hover:opacity-50 transition-opacity duration-300">
              <button className="bg-white p-4 rounded-full shadow-lg">
                <svg
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 15 15"
                  width="24px"
                  height="24px">
                  <path
                    fill="#000000"
                    fill-rule="evenodd"
                    d="M3.242 2.322a.5.5 0 0 1 .491-.014l9 4.75a.5.5 0 0 1 0 .884l-9 4.75A.5.5 0 0 1 3 12.25v-9.5a.5.5 0 0 1 .242-.428M4 3.579v7.842L11.429 7.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <p className="mt-4 text-lg font-semibold text-center text-gray-700 dark:text-gray-300">
            {videos[currentIndex].title}
          </p>
        </div>

        {/* Next Button */}
        <button
          className="absolute right-4 md:right-8 lg:right-12 bg-white p-2 rounded-full shadow-lg hover:bg-gray-300 z-10 transition-transform duration-300 hover:scale-110"
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
        <div className="fixed w-full h-full inset-0 bg-black bg-opacity-95 flex items-center justify-center z-60">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 md:top-8 md:right-8 text-gray-800 text-xl bg-white px-3 py-2 rounded shadow-lg z-20"
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
