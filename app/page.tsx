import { AlternatingText } from "@/shared/components/AlternatingText";
import { BigText } from "@/shared/components/BigText";
import { Caurousel } from "@/shared/components/Carousel";
import Footer from "@/shared/components/Footer";
import { Hero } from "@/shared/components/Hero";
import { SkyDive } from "@/shared/components/SkyDive";
import React from "react";

interface Props {
  className?: string;
}
const Home: React.FC<Props> = () => {
  return (
    <div>
      <Hero />
      <SkyDive />
      <Caurousel />
      <AlternatingText />
      <BigText />
      <Footer />
    </div>
  );
};

export default Home;
