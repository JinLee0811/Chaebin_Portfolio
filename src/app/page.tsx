"use client";

import Gallery from "@/components/Gallery";
import MainHeader from "../components/MainHeader";
import VideoCarousel from "../components/videoSlider";
import MusicComponent from "../components/MusicSection";
import { motion } from "framer-motion";

export default function Home() {
  // 애니메이션 초기 및 종료 상태 정의
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 }, // 시작 상태: 투명하고 아래로 이동
    visible: { opacity: 1, y: 0 }, // 종료 상태: 보이고 제자리
  };

  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // 화면에 30% 보일 때 트리거
        transition={{ duration: 0.8 }} // 애니메이션 지속 시간
        variants={sectionVariants}>
        <MainHeader />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        variants={sectionVariants}>
        <Gallery />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        variants={sectionVariants}>
        <MusicComponent />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        variants={sectionVariants}>
        <VideoCarousel />
      </motion.div>
    </div>
  );
}
