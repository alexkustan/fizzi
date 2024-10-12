"use client";

import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { TextSplitter } from "./TextSplitter";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface Props {
  className?: string;
}

export const Hero: React.FC<Props> = () => {
  useGSAP(() => {
    const itroTl = gsap.timeline();

    itroTl
      .set(".hero", { opacity: 1 })
      .from(".hero-header-word", {
        scale: 3,
        opacity: 0,
        ease: "power4.in",
        delay: 0.3,
        stagger: 1,
      })
      .from(
        ".hero-subheading",
        {
          opacity: 0,
          y: 30,
        },
        "+=.8"
      )
      .from(".hero-body", {
        opacity: 0,
        y: 10,
      })
      .from(".hero-button", {
        opacity: 0,
        y: 10,
      });

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      },
    });
    scrollTl
      .fromTo(
        "body",
        { backgroundColor: "#FDE047" },
        { backgroundColor: "#D9F99D", overwrite: "auto" },
        1
      )
      .from(".text-side-heading .split-char", {
        scale: 1.3,
        y: 40,
        rotate: -25,
        opacity: 0,
        stagger: 0.1,
        ease: "back.out(3)",
        duration: 0.5,
      })
      .from(".text-side-body", {
        y: 20,
        opacity: 0,
      });
  });
  return (
    <div className="grid hero opacity-0">
      <div className="grid h-screen place-items-center">
        <div className="grid auto-rows-min place-items-center text-center">
          <h1 className="text-orange-500 text-7xl font-black uppercase md:text-[9rem] lg:text-[13rem] flex-row">
            <p className="hero-header-word">live</p>
            <p className="hero-header-word -mt-8">Gutsy</p>
          </h1>
          <div className="mt-12 text-5xl font-semibold text-sky-950 lg:text-6xl hero-subheading">
            <p>Soda Perfected</p>
          </div>
          <div className="text-2xl font-normal text-sky-950 hero-body">
            <p>3-5g sugar. 9g fiber. 5 delicious flavors.</p>
          </div>
          <Button className="hero-button h-16 rounded-xl bg-orange-600 px-5 py-4 text-center text-xl font-bold uppercase tracking-wide text-white transition-colors duration-150 hover:bg-orange-700 md:text-2xl hero-button mt-12">
            shop now
          </Button>
        </div>
      </div>
      <div className="relative z-[80] grid h-screen items-center gap-4 md:grid-cols-2">
        <div>
          <h1 className="text-side-heading text-sky-950 font-black text-5xl lg:text-[6rem] uppercase">
            <TextSplitter text={"Try all five flavors"} />
          </h1>
          <div className="font-normal">
            <p className="text-side-body">
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
