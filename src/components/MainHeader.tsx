"use client";

import { motion } from "framer-motion";

import Image from "next/image";
import chaebin_main from "../../public/chaebin_main.webp";
import Navbar from "./Navbar";

const MainHeader = () => {
  return (
    <div className="relative h-screen text-white overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600">
      {/* Navbar */}
      <div className="absolute top-0 left-0 right-0 z-30">
        <Navbar />
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-20">
        <Image
          src={chaebin_main}
          alt="Background Image"
          fill
          className="object-cover object-[50%_27%]"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center">
        <motion.h1
          className="font-serif text-3xl font-bold leading-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          안녕하세요! 싱어송라이터 가수 채빈입니다.
        </motion.h1>
        <motion.p
          className="font-notcourier text-xl text-white mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}>
          Hi! I&apos;m Chaebin, a singer-songwriter from South Korea.
        </motion.p>
        <motion.p
          className="font-notcourier text-xl text-white mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}>
          こんにちは！韓国のシンガーソングライター、チェビンです。
        </motion.p>
        <motion.p
          className="font-notcourier text-xl text-white mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}>
          你好！我是来自韩国的创作型歌手，Chaebin。
        </motion.p>
      </div>
    </div>
  );
};

export default MainHeader;
