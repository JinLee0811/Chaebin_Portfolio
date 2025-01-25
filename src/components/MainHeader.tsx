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
          className="object-cover object-[50%_37%]"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-3xl font-bold leading-tight mb-4">
          안녕하세요! 싱어송라이터 가수 채빈입니다.
        </h1>
        <p className="text-xl text-gray-300 mb-2">
          Hi! I&apos;m Chaebin, a singer-songwriter from South Korea.
        </p>
        <p className="text-xl text-gray-300 mb-2">
          こんにちは！韓国のシンガーソングライター、チェビンです。
        </p>
        <p className="text-xl text-gray-300 mb-2">你好！我是来自韩国的创作型歌手，Chaebin。</p>
      </div>
    </div>
  );
};

export default MainHeader;
