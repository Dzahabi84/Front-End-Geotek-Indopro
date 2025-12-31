
import React from 'react'
import Header2 from '@/components/header/Header2'
import FooterTopBanner from '@/components/industry-homepage/FooterTopBanner'
import HomeAboutSection from '@/components/industry-homepage/HomeAboutSection'
import HomeBannerSection from '@/components/industry-homepage/HomeBannerSection'
import HomeBenefitSection from '@/components/industry-homepage/HomeBenefitSection'
import HomeBlogSection from '@/components/industry-homepage/HomeBlogSection'
import HomeCertificationSection from '@/components/industry-homepage/HomeCertificationSection'
import HomeContactSection from '@/components/industry-homepage/HomeContactSection'
import HomeProcessSection from '@/components/industry-homepage/HomeProcessSection'
import HomeProjectSection from '@/components/industry-homepage/HomeProjectSection'
import HomeServiceSection from '@/components/industry-homepage/HomeServiceSection'
import HomeTeamSection from '@/components/industry-homepage/HomeTeamSection'
import HomeTestimonialSection from '@/components/industry-homepage/HomeTestimonialSection'
import HomeVideoBannerSection from '@/components/industry-homepage/HomeVideoBannerSection'
import HomeWhyChooseUsSection from '@/components/industry-homepage/HomeWhyChooseUsSection'
import Footer2 from '@/components/footers/Footer2'


const IndestrtyHomePage = () => {

    return (
        <>
            <Header2 />
            <HomeBannerSection />
            <HomeServiceSection />
            <HomeBenefitSection />
            <HomeAboutSection />
            <HomeProjectSection />
            <HomeProcessSection />
            <HomeWhyChooseUsSection />
            <HomeTeamSection />
            <HomeVideoBannerSection />
            <HomeContactSection />
            <HomeTestimonialSection />
            <HomeBlogSection />
            <HomeCertificationSection />
            <FooterTopBanner />
            <Footer2 />
        </>
    )
}

export default IndestrtyHomePage
