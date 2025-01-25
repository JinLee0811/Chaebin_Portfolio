import Gallery from "@/components/Gallery";
import MainHeader from "../components/MainHeader";
import VideoCarousel from "../components/videoSlider";
import MusicComponent from "../components/MusicSection";

export default function Home() {
  return (
    <div>
      <MainHeader />
      <Gallery />
      <MusicComponent />
      <VideoCarousel />
    </div>
  );
}
