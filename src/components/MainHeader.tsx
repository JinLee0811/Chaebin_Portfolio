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
      <div className="absolute inset-0 z-10">
        <Image
          src={chaebin_main}
          alt="Background Image"
          fill
          className="object-cover object-[50%_37%]"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-3xl font-bold leading-tight mb-4">안녕하세요 채빈입니다.</h1>
        <p className="text-lg text-gray-300 mb-8">
          Discover amazing features and services that await you.
        </p>
        <a
          href="#"
          className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default MainHeader;
