import { Intro } from "../../components/about/Intro";
import { Mission } from "../../components/about/Mission";
import { HowItHelps } from "../../components/about/HowItHelps";
import { BuiltWith } from "../../components/homepage/BuiltWith";

export default function AboutPage() {
  return (
    <>
      <Intro />
      <Mission />
      <HowItHelps />
      <BuiltWith />
    </>
  );
}
