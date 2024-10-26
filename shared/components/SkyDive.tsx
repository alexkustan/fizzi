"use client";

import { Bounded } from "@/shared/components/Bounded";
import { View } from "@react-three/drei";
import SkiDiveScene from "./SkiDiveScene";

export const SkyDive: React.FC = () => {
  return (
    <Bounded className="skydive h-screen">
      <View className="h-screen w-screen">
        <SkiDiveScene sentence="dive into better health" />
      </View>
    </Bounded>
  );
};
