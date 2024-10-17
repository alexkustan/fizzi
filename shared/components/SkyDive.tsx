"use client";

import { Bounded } from "@/shared/components/Bounded";
import { View } from "@react-three/drei";
import SkiDiveScene from "./SkiDiveScene";

export const SkyDive: React.FC = () => {
  return (
    <Bounded className="skydive h-screen">
      <h2 className="sr-only"></h2>
      <View className="h-screen w-screen">
        <SkiDiveScene sentence="dive into better health" flavor="" />
      </View>
    </Bounded>
  );
};
