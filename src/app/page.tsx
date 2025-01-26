"use client";

import Gallery from "@/components/Gallery";
import MainHeader from "../components/MainHeader";
import VideoCarousel from "../components/videoSlider";
import MusicComponent from "../components/MusicSection";
import { motion } from "framer-motion";

export default function Home() {
  // MainHeader 제외 섹션 애니메이션 (더 부드럽게)
  const smoothVariants = {
    hidden: { opacity: 0, y: 50 }, // 아래로 약간 이동한 상태에서 시작
    visible: { opacity: 1, y: 0 }, // 제자리로 이동하며 보이기
  };

  return (
    <div>
      {/* MainHeader */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.9 }}
        variants={{
          hidden: { opacity: 0, y: 0 },
          visible: { opacity: 1, y: 0 },
        }}>
        <MainHeader />
      </motion.div>

      {/* Gallery */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.46, 0.45, 0.94], // 부드러운 ease-in-out 효과
        }}
        variants={smoothVariants}>
        <Gallery />
      </motion.div>

      {/* MusicComponent */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 1.3,
          ease: "easeInOut", // 더 부드러운 애니메이션
        }}
        variants={smoothVariants}>
        <MusicComponent />
      </motion.div>

      {/* VideoCarousel */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1], // 더 부드러운 cubic-bezier 효과
        }}
        variants={smoothVariants}>
        <VideoCarousel />
      </motion.div>
    </div>
  );
}
