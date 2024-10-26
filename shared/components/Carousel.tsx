"use client";

import { Center, Environment, View } from "@react-three/drei";
import FloatingCan from "./FloatingCan";
import React from "react";
import { SodaCanProps } from "./SodaCan";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { WavyCircles } from "./WavyCircles";
import { Group } from "three";
import gsap from "gsap";

const SPINS_ON_CHANGE = 15;

const FLAVORS: {
  flavor: SodaCanProps["flavor"];
  color: string;
  name: string;
}[] = [
  { flavor: "blackCherry", color: "#710523", name: "Black Cherry" },
  { flavor: "grape", color: "#572981", name: "Grape Goodness" },
  { flavor: "lemonLime", color: "#164405", name: "Lemon Lime" },
  {
    flavor: "strawberryLemonade",
    color: "#690B3D",
    name: "Strawberry Lemonade",
  },
  { flavor: "watermelon", color: "#4B7002", name: "Watermelon Crush" },
];

export const Caurousel: React.FC = () => {
  const [currentFlavorIndex, setCurrentFlavorIndex] = React.useState(0);
  const sodaCanRef = React.useRef<Group>(null);

  function changeFlavor(index: number) {
    if (!sodaCanRef.current) return;
    const nextIndex = (index + FLAVORS.length) % FLAVORS.length;
    const tl = gsap.timeline();

    tl.to(
      sodaCanRef.current.rotation,
      {
        y:
          index > currentFlavorIndex
            ? `-=${Math.PI * 2 * SPINS_ON_CHANGE}`
            : `+=${Math.PI * 2 * SPINS_ON_CHANGE}`,
        ease: "power2.inOut",
        duration: 1,
      },
      0
    )
      .to(
        ".background, .wavy-circles-outer, .wavy-circles-inner",
        {
          backgroundColor: FLAVORS[nextIndex].color,
          fill: FLAVORS[nextIndex].color,
          ease: "power2.inOut",
          duration: 1,
        },
        0
      )
      .to(".text-wrapper", { duration: 0.2, y: -10, opacity: 0 }, 0)
      .to({}, { onStart: () => setCurrentFlavorIndex(nextIndex) }, 0.5)
      .to(".text-wrapper", { duration: 0.2, y: 0, opacity: 1 }, 0.7);
  }
  return (
    <section className="Caurousel h-screen relative grid grid-rows-[auto,4fr,auto] justify-center overflow-hidden py-12 bg-white">
      <div className="background pointer-events-none absolute inset-0 bg-[#710523] opacity-50" />
      <WavyCircles className="absolute left-1/2 top-1/2 h-[120vmin] -translate-x-1/2 -translate-y-1/2 text-[#710523] " />
      <h2 className="relative text-center text-5xl font-bold text-white">
        Choose Your Flavor
      </h2>
      <div className="grid grid-cols-[auto,auto,auto] items-center">
        {/* Left */}
        <button
          onClick={() => changeFlavor(currentFlavorIndex + 1)}
          className="flex items-center rounded-full border-2 border-white bg-white/10 p-3 opacity-85 focus:outline-none focus-visible:opacity-100 focus-visible:ring-4 md:size-20"
        >
          <ChevronLeft size={50} strokeWidth={4} color="white" />
        </button>
        {/* can */}
        <View className="aspect-square h-[70vmin]">
          <Center position={[0, 0, 1.5]}>
            <FloatingCan
              floatIntensity={0.3}
              rotationIntensity={1}
              flavor={FLAVORS[currentFlavorIndex].flavor}
              ref={sodaCanRef}
            />
          </Center>
          <Environment
            files="/hdrs/lobby.hdr"
            environmentIntensity={0.6}
            environmentRotation={[0, 3, 0]}
          />
          <directionalLight intensity={6} position={[0, 1, 1]} />
        </View>
        {/* right */}
        <button
          onClick={() => changeFlavor(currentFlavorIndex - 1)}
          className="flex items-center rounded-full border-2 border-white bg-white/10 p-3 opacity-85 focus:outline-none focus-visible:opacity-100 focus-visible:ring-4 md:size-20"
        >
          <ChevronRight size={50} strokeWidth={4} color="white" />
        </button>
      </div>
      <div className="text-area relative mx-auto text-center text-white">
        <div className="text-wrapper text-4xl font-medium">
          <p>{FLAVORS[currentFlavorIndex].name}</p>
        </div>
        <div className="text-2xl mt-2 font-normal opacity-90">
          <p>12 cans - $35.99</p>
        </div>
      </div>
    </section>
  );
};
