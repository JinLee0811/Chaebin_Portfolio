"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

import bugs from "../../../public/bugs.png";
import FLO from "../../../public/FLO.png";
import genie from "../../../public/genie.png";
import melon from "../../../public/melon.png";
import vibe from "../../../public/vibe.png";
import chaebin from "../../../public/chaebin_main.webp";
import apple from "../../../public/apple.png";
import spotify from "../../../public/spotify.png";

const storeLinks = [
  {
    id: 9,
    name: "Apple Music",
    action: "Download",
    logo: apple, // 적절한 로고 이미지 경로 설정
    url: "#",
  },
  {
    id: 8,
    name: "Spotify",
    action: "Download",
    logo: spotify, // 적절한 로고 이미지 경로 설정
    url: "#",
  },
  {
    id: 1,
    name: "Bugs Music",
    action: "Download",
    logo: bugs, // 적절한 로고 이미지 경로 설정
    url: "#",
  },
  {
    id: 2,
    name: "FLO",
    action: "Play",
    logo: FLO, // 적절한 로고 이미지 경로 설정
    url: "#",
  },
  {
    id: 3,
    name: "Genie",
    action: "Pre-add",
    logo: genie, // 적절한 로고 이미지 경로 설정
    url: "#",
  },
  {
    id: 5,
    name: "Melon Music",
    action: "Go To",
    logo: melon, // 적절한 로고 이미지 경로 설정
    url: "#",
  },
  {
    id: 6,
    name: "Vibe Music",
    action: "Go To",
    logo: vibe, // 적절한 로고 이미지 경로 설정
    url: "#",
  },
];

export default function MusicService() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-40 p-8">
        {/* 상단 정보 */}
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <Image
              src={chaebin} // 앨범 이미지 경로
              alt="Album Cover"
              className="object-cover w-full h-54"
              width={300}
              height={300}
            />

            <button className="absolute inset-0 flex items-center justify-center text-white">
              <span className="text-5xl font-bold">▶</span>
            </button>
          </div>

          {/* 앨범 정보 */}
          <div className="p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900">Chaebin</h2>
            <p className="text-lg text-gray-700">eternal sunshine</p>
            <p className="text-sm text-gray-500 mt-2">Choose music service</p>
          </div>
        </div>

        {/* 스토어 리스트 */}
        <div className="max-w-md mx-auto bg-white mt-8 rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4">OFFICIAL STORE</h3>
          <ul className="divide-y divide-gray-200">
            {storeLinks.map((store) => (
              <li key={store.id} className="flex items-center justify-between py-4">
                <div className="flex items-center gap-4">
                  <Image
                    src={store.logo}
                    alt={`${store.name} Logo`}
                    className="w-10 h-10"
                    width={40}
                    height={40}
                  />
                  <span className="text-gray-900">{store.name}</span>
                </div>
                <a href={store.url} className="text-blue-600 hover:underline text-sm font-medium">
                  {store.action}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
