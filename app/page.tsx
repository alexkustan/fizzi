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
    </div>
  );
};

export default Home;
