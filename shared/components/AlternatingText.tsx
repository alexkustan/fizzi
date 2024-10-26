"use client";

import React from "react";
import { Bounded } from "./Bounded";
import { View } from "@react-three/drei";
import AlternatingTextScene from "./AlternatingTextScene";

export const AlternatingText: React.FC = () => {
  return (
    <Bounded className="alternating-text-container relative bg-yellow-300 text-sky-950">
      <div className="relative z-[100] grid">
        <View className="alternating-text-view absolute left-0 top-0 h-screen w-full">
          <AlternatingTextScene />
        </View>
        <div className="relative grid">
          {/* Section 1 (Text in normal order: left side) */}
          <div className="alternating-section grid h-screen place-items-center gap-x-12 md:grid-cols-2">
            <div>
              <h1 className="text-balance text-6xl font-bold">
                Gut-Friendly Goodness
              </h1>
              <p className="mt-4 text-xl">
                Our soda is packed with prebiotics and 1 billion probiotics,
                giving your gut the love it deserves. Say goodbye to bloating
                and hello to a happy, healthy digestive system with every sip.
              </p>
            </div>
          </div>

          {/* Section 2 (Text in mirrored order: right side) */}
          <div className="alternating-section grid h-screen place-items-center gap-x-12 md:grid-cols-2">
            <div className="col-start-2">
              <h1 className="text-balance text-6xl font-bold">
                Light Calories, Big Flavor
              </h1>
              <p className="mt-4 text-xl">
                Indulge in bold, refreshing taste without the guilt. At just 20
                calories per can, you can enjoy all the flavor you crave with
                none of the compromise.
              </p>
            </div>
          </div>

          {/* Section 3 (Text in normal order: left side) */}
          <div className="alternating-section grid h-screen place-items-center gap-x-12 md:grid-cols-2">
            <div>
              <h1 className="text-balance text-6xl font-bold">
                Naturally Refreshing
              </h1>
              <p className="mt-4 text-xl">
                Made with only the best natural ingredients, our soda is free
                from artificial sweeteners and flavors. It’s a crisp, clean
                taste that feels as good as it tastes, giving you a boost of
                real, natural refreshment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Bounded>
  );
};
