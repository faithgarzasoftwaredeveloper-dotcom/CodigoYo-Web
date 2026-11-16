import { EarlyStageMessage } from "@/components/EarlyStageMessage";
import { FeaturedExperiences } from "@/components/FeaturedExperiences";
import { FinalCTA } from "@/components/FinalCTA";
import { Hero } from "@/components/Hero";
import { JourneySection } from "@/components/JourneySection";
import { ProductEcosystem } from "@/components/ProductEcosystem";
import { WhyCodigoYo } from "@/components/WhyCodigoYo";

export default function Home() {
  return (
    <main id="main" tabIndex={-1}>
      <Hero />
      <ProductEcosystem />
      <JourneySection />
      <WhyCodigoYo />
      <FeaturedExperiences />
      <EarlyStageMessage />
      <FinalCTA />
    </main>
  );
}
