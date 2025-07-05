"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "../components/common/Navbar";
import { Footer } from "../components/common/Footer";
import { HomeHero } from "../components/homepage/HomeHero"
import { Features } from "../components/homepage/Features"
import { BuiltWith } from "../components/homepage/BuiltWith"
import { HowItWorks } from "../components/homepage/HowItWorks"
 
export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HomeHero />
        <Features />
        <HowItWorks />
        <BuiltWith />
      </main>
      <Footer />
    </div>
  );
}