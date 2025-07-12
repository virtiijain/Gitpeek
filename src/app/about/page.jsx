import dynamic from "next/dynamic";
import LazyLoadWrapper from "../../common/LazyLoadWrapper";

const Intro = dynamic(() => import("../../components/about/Intro"));
const Audience = dynamic(() => import("../../components/about/Audience"));
const HowItWorks = dynamic(() =>
  import("../../components/home/HowItWorks")
);
const Features = dynamic(() => import("../../components/about/Features"));
const BuiltWith = dynamic(() => import("../../components/home/BuiltWith"));
const CTA = dynamic(() => import("../../components/about/CTA"));

export const metadata = {
  title: "About | GitPeek",
  description:
    "Discover how GitPeek analyzes GitHub profiles to provide developer insights, activity stats, and language trends.",
};


export default function AboutPage() {
  return (
    <>
      <Intro />
      <LazyLoadWrapper>
        <Audience />
      </LazyLoadWrapper>

      <LazyLoadWrapper>
        <HowItWorks />
      </LazyLoadWrapper>

      <LazyLoadWrapper>
        <Features />
      </LazyLoadWrapper>

      <LazyLoadWrapper>
        <BuiltWith />
      </LazyLoadWrapper>

      <CTA />
    </>
  );
}
