"use client";
import Analytics from "@/components/Solution/Analytics";
import Financial from "@/components/Solution/Financial";
import Relationships from "@/components/Solution/Relationships";
import Reliableon from "@/components/Solution/Reliableon";
import SolutionHero from "@/components/Solution/SolutionHero";
import Solutionapplic from "@/components/Solution/Solutionapplic";
import Synchroniztion from "@/components/Solution/Synchroniztion";
export default function Page() {
  return (
    <main>
      <SolutionHero />
      <Solutionapplic />
      <Relationships />
      <Reliableon />
      <Financial />
      <Synchroniztion />
      <Analytics />
    </main>
  );
}
