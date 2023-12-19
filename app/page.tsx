"use client"
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Image from "next/image";
import AnimationAvion from "@/components/main/AnimationPlane";
export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <AnimationAvion/>
        <Projects />
      </div>
    </main>
  );
}
