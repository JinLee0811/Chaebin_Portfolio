import Gallery from "@/components/Gallery";
import MainHeader from "../components/MainHeader";
import VideoCarousel from "../components/videoSlider";

export default function Home() {
  return (
    <div>
      <MainHeader />
      <Gallery />
      <VideoCarousel />
    </div>
  );
}
