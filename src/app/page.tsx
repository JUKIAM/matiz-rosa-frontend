import Footer from "@/components/utilities/Footer";
import HeroSection from "@/components/utilities/HeroSection";
import Navbar from "@/components/utilities/Nabvar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Footer></Footer>
    </div>
  );
}
