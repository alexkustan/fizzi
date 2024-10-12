import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

interface Props {
  className?: string;
}

export const Hero: React.FC<Props> = () => {
  return (
    <div className="grid">
      <div className="grid h-screen place-items-center">
        <div className="grid auto-rows-min place-items-center text-center">
          <h1 className="text-orange-500 text-7xl font-black uppercase md:text-[9rem] lg:text-[13rem]">
            <p>live</p>
            <p>gutsy</p>
          </h1>
          <div className="mt-12 text-5xl font-semibold text-sky-950 lg:text-6xl">
            <p>Soda Perfected</p>
          </div>
          <div className="text-2xl font-normal text-sky-950">
            <p>3-5g sugar. 9g fiber. 5 delicious flavors.</p>
          </div>
          <Button className="h-16 rounded-xl bg-orange-600 px-5 py-4 text-center text-xl font-bold uppercase tracking-wide text-white transition-colors duration-150 hover:bg-orange-700 md:text-2xl hero-button mt-12">
            shop now
          </Button>
        </div>
      </div>
      <div className="relative z-[80] grid h-screen items-center gap-4 md:grid-cols-2">
        <div>
          <h1 className="text-sky-950 font-black text-5xl lg:text-[6rem] uppercase">
            <p>try all</p>
            <p>five</p>
            <p>flavors</p>
          </h1>
          <div className="font-normal">
            <p>
              Our soda is made with real fruit juice and a touch of cane sugar.
              We never use artificial sweeteners or high fructose corn syrup.
              Try all five flavors and find your favorite!
            </p>
          </div>
        </div>
        <div>
          <Image
            src="/public/images/all-cans-bunched.png"
            alt="all cans bunched"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};
