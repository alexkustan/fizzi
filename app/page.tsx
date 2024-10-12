import { Hero } from "@/shared/components/Hero";
import React from "react";

interface Props {
  className?: string;
}
const Home: React.FC<Props> = () => {
  return (
    <div>
      <Hero />
    </div>
  );
};

export default Home;
