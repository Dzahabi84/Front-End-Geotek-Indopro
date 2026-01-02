"use client";

import { useEffect, useState } from "react";
import axios from "axios";

// --- Imports Components ---
import Banner from "@/components/factory-homepage/Banner";
import FooterTop from "@/components/factory-homepage/FooterTop";
import HomaPageVideoSection from "@/components/factory-homepage/HomaPageVideoSection";
import HomePageAboutSection from "@/components/factory-homepage/HomePageAboutSection";
import HomepageBlogSection from "@/components/factory-homepage/HomepageBlogSection";
import HomePageCounterSection from "@/components/factory-homepage/HomePageCounterSection";
import HomePageFaqSection from "@/components/factory-homepage/HomePageFaqSection";
import HomePageFeatureSection from "@/components/factory-homepage/HomePageFeatureSection";
import HomePageMapSection from "@/components/factory-homepage/HomePageMapSection";
import HomePageProcessSection from "@/components/factory-homepage/HomePageProcessSection";
import HomePageProjectSection from "@/components/factory-homepage/HomePageProjectSection";
import HomePageServiceSection from "@/components/factory-homepage/HomePageServiceSection";
import HomePageTeamSection from "@/components/factory-homepage/HomePageTeamSection";
import HomePageTestimonialSection from "@/components/factory-homepage/HomePageTestimonialSection";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/header/Header1";
import Loading from "@/components/common/Loading";

export default function Home() {
  // --- 2. State dengan Typing ---
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // --- 3. Fetching Data ---
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Ganti URL dengan endpoint asli Anda
        const response = await axios.get(
          "https://cms.intigeotekpratama.com/api/home-indopro?populate=*"
        );

        setData(response.data);
        console.log(response.data);
        setError(null);
      } catch (err: any) {
        console.error("Error fetching data:", err);
        setError(err.message || "Terjadi kesalahan saat mengambil data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // --- 4. Loading & Error UI ---
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500">
        <p>Error: {error}</p>
      </div>
    );
  }

  // --- 5. Render Components ---
  return (
    <>
      <Header1 />

      {/* Kirim data ke props component (pastikan komponen Banner menerima props ini) */}
      <Banner
        bgDesktop={`https://cms.intigeotekpratama.com${data.data.attributes.banner.data.attributes.url}`}
        bgSmall={`https://cms.intigeotekpratama.com${data.data.attributes.banner.data.attributes.formats.small.url}`}
        bgLarge={`https://cms.intigeotekpratama.com${data.data.attributes.banner.data.attributes.formats.large.url}`}
        bgMedium={`https://cms.intigeotekpratama.com${data.data.attributes.banner.data.attributes.formats.medium.url}`}
      />

      <HomePageAboutSection
        about={data.data.attributes.about}
        mission={data.data.attributes.mision}
      />

      {/* Contoh passing data: */}
      {/* <HomePageServiceSection services={data?.services} /> */}
      <HomePageServiceSection />

      <HomePageFeatureSection name="Product" />
      <HomePageProjectSection />
      <HomePageTeamSection />
      <HomaPageVideoSection />
      <HomePageCounterSection />
      <HomePageProcessSection />
      <HomePageTestimonialSection />
      <HomePageFaqSection />
      <HomePageMapSection />
      <HomepageBlogSection />
      <FooterTop />
      <Footer1 />
    </>
  );
}
