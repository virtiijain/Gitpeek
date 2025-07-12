import dynamic from "next/dynamic";
import LazyLoadWrapper from "../common/LazyLoadWrapper";

const HomeHero = dynamic(() => import("../components/home/Hero"));
const Features = dynamic(() => import("../components/home/Features"));
const HowItWorks = dynamic(() => import("../components/home/HowItWorks"));
const BuiltWith = dynamic(() => import("../components/home/BuiltWith"));

export const metadata = {
  title: "GitPeek - GitHub Profile Explorer",
  description: "Explore any GitHub profile effortlessly. Get insights on languages, contributions, activity, and repositories with GitPeek.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HomeHero />
      <LazyLoadWrapper>
        <Features />
      </LazyLoadWrapper>

      <LazyLoadWrapper>
        <HowItWorks />
      </LazyLoadWrapper>

      <LazyLoadWrapper>
        <BuiltWith />
      </LazyLoadWrapper>
    </div>
  );
}
