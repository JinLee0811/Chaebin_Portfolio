"use client";

import React, { useState } from "react";
import Image from "next/image";
import chaebin_main from "../../public/chaebin_main.webp";
import mrchristmas from "../../public/album/mrchristmas.jpg";
import song3 from "../../public/album/song3.jpg";
import Wouldu from "../../public/album/Wouldu.png";
import Miracle from "../../public/album/Miracle.jpg";
import Comingsoon from "../../public/comingsoon.webp";

const songs = [
  { id: 1, title: "지금처럼만 날 사랑해 줘", artist: "이채빈", thumbnail: chaebin_main },
  { id: 2, title: "Mr.Christmas", artist: "이채빈", thumbnail: mrchristmas },
  { id: 3, title: "나만 좋아하는 거 아니지", artist: "이채빈", thumbnail: song3 },
  { id: 4, title: "Would U : 우주", artist: "이채빈", thumbnail: Wouldu },
  { id: 5, title: "미라클", artist: "이채빈", thumbnail: Miracle },
];

const albums = [
  { id: 1, title: "Merry PIG-mas", artist: "DOKO(도코), 차우 (Chawoo)", thumbnail: mrchristmas },
  { id: 2, title: "Would U : 우주", artist: "이채빈", thumbnail: Wouldu },
  { id: 3, title: "지금처럼만 날 사랑해 줘", artist: "이채빈", thumbnail: chaebin_main },
  { id: 4, title: "나만 좋아하는 거 아니지", artist: "이채빈", thumbnail: song3 },
  { id: 5, title: "Miracle", artist: "이채빈", thumbnail: Miracle },
  { id: 6, title: "Coming Soon...", artist: "이채빈", thumbnail: Comingsoon },
];

const MusicComponent: React.FC = () => {
  const [showMoreSongs, setShowMoreSongs] = useState(false);
  const [showMoreAlbums, setShowMoreAlbums] = useState(false);

  return (
    <div className="text-white px-8 py-12 font-notcourier">
      {/* 노래 섹션 */}
      <div className="mb-12 p-10 rounded-3xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Song</h2>
          <button
            className="text-gray-400 hover:text-white text-sm"
            onClick={() => setShowMoreSongs(!showMoreSongs)}>
            {showMoreSongs ? "Less" : "More"}
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {(showMoreSongs ? songs : songs.slice(0, 4)).map((song) => (
            <div
              key={song.id}
              className="flex items-center justify-between bg-gray-700 rounded-xl p-3">
              <div className="flex items-center space-x-4">
                <Image
                  src={song.thumbnail}
                  alt={song.title}
                  width={50}
                  height={50}
                  className="rounded-lg"
                />
                <div>
                  <p className="text-sm font-medium">{song.title}</p>
                  <p className="text-xs text-gray-400">{song.artist}</p>
                </div>
              </div>
              <button className="text-gray-300 font-cute hover:text-white">···</button>
            </div>
          ))}
        </div>
      </div>

      {/* 앨범 섹션 */}
      <div>
        <div className="flex justify-between items-center px-10 mb-4">
          <h2 className="text-2xl font-bold">Album</h2>
          <button
            className="text-gray-400 hover:text-white text-sm"
            onClick={() => setShowMoreAlbums(!showMoreAlbums)}>
            {showMoreAlbums ? "Less" : "More"}
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 px-10">
          {(showMoreAlbums ? albums : albums.slice(0, 5)).map((album) => (
            <div key={album.id} className="flex flex-col items-center mb-5">
              <Image
                src={album.thumbnail}
                alt={album.title}
                width={230}
                height={120}
                className="rounded-lg"
              />
              <p className="mt-2 text-sm font-medium text-center">{album.title}</p>
              <p className="text-xs text-gray-400 text-center">{album.artist}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MusicComponent;
