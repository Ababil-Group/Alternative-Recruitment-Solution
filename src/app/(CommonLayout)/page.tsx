"use client";
import Hero from "@/components/Home/Hero";
import RecruitingPlatform from "@/components/Home/RecruitingPlatform";
import BusinessGrow from "@/components/Home/Businessgrow";
import MobileApp from "@/components/Home/MobileApp";
import CaseStudies from "@/components/Home/CaseStudies";

export default function Home() {
  return (
    <main>
      <Hero />
      <RecruitingPlatform />
      <BusinessGrow />
      <MobileApp />
      <CaseStudies/>
    </main>
  );
}
