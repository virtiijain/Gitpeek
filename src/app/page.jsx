import { HomeHero } from "../components/homepage/HomeHero";
import { Features } from "../components/homepage/Features";
import { BuiltWith } from "../components/homepage/BuiltWith";
import { HowItWorks } from "../components/homepage/HowItWorks";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HomeHero />
      <Features />
      <HowItWorks />
      <BuiltWith />
    </div>
  );
}
