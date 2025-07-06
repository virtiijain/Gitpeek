import { Intro } from "../../components/about/Intro";
import { Audience } from "../../components/about/Audience";
import { BuiltWith } from "../../components/homepage/BuiltWith";
import { CTA } from "../../components/about/CTA";
import { Features } from "../../components/about/Features";
import { HowItWorks } from "../../components/homepage/HowItWorks";

export default function AboutPage() {
  return (
    <>
      <Intro />
      <Audience />
      <HowItWorks />
      <Features />
      <BuiltWith />
      <CTA />
    </>
  );
}
