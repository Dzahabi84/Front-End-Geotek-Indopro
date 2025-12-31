// about/page.tsx
import React from "react";
import InnerPageHeader from "@/components/header/InnerPageHeader";
import HomePageAboutSection from "@/components/factory-homepage/HomePageAboutSection";
import HomeWhyChooseUsSection from "@/components/industry-homepage/HomeWhyChooseUsSection";
import HomePageFeatureSection from "@/components/factory-homepage/HomePageFeatureSection";
import HomaPageVideoSection from "@/components/factory-homepage/HomaPageVideoSection";
import HomePageCounterSection from "@/components/factory-homepage/HomePageCounterSection";
import HomePageTeamSection from "@/components/factory-homepage/HomePageTeamSection";
import HomepageBlogSection from "@/components/factory-homepage/HomepageBlogSection";
import FooterTop from "@/components/factory-homepage/FooterTop";
import Footer1 from "@/components/footers/Footer1";
import Breadcrumb from "@/components/common/Breadcrumb";


const AboutPage: React.FC = () => {
  return (
    <>
      <InnerPageHeader />
      <Breadcrumb title="About Us" subtitle="Our Story of Manufacturing Excellence Built on." />
      <HomePageAboutSection pt="pt-120" />
      <HomeWhyChooseUsSection />
      <HomePageFeatureSection />
      <HomaPageVideoSection />
      <HomePageCounterSection />
      <HomePageTeamSection />
      <HomepageBlogSection />
      <FooterTop />
      <Footer1 />
    </>
  );
};

export default AboutPage;
