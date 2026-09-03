import Hero from "@/components/home/Hero";
import TrustSection from "@/components/home/TrustSection";
import FeaturedCollection from "@/components/home/FeaturedCollection";
import ApplicationsPreview from "@/components/home/ApplicationsPreview";
import AboutPreview from "@/components/home/AboutPreview";
import GroupFirmsSection from "@/components/home/GroupFirmsSection";
import CraftPreview from "@/components/home/CraftPreview";
import StoneGallery from "@/components/home/StoneGallery";
import FaqSection from "@/components/home/FaqSection";
import ShowroomPreview from "@/components/home/ShowroomPreview";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      {/* 1. HERO */}
      <Hero />

      {/* 2. TRUST / EXPERIENCE */}
      <TrustSection />

      {/* 3. FEATURED COLLECTION */}
      <FeaturedCollection />

      {/* 4. EXPLORE BY APPLICATION */}
      <ApplicationsPreview />

      {/* 5. ABOUT ABC STONES INDIA PVT. LTD. */}
      <AboutPreview />

      {/* 6. ASSOCIATE FIRMS & MINING INFRASTRUCTURE */}
      <GroupFirmsSection />

      {/* 7. CRAFT & PROCESS */}
      <CraftPreview />

      {/* 7. STONE VISUAL GALLERY */}
      <StoneGallery />

      {/* 8. FAQ */}
      <FaqSection />

      {/* 9. SHOWROOM / LOCATION */}
      <ShowroomPreview />

      {/* 10. FINAL ENQUIRY CTA */}
      <FinalCTA />

      {/* 11. FOOTER is rendered in RootLayout */}
    </>
  );
}
