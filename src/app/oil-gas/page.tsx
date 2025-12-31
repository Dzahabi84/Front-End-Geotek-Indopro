
import React from 'react'
import Footer3 from '@/components/footers/Footer3'
import Header3 from '@/components/header/Header3'
import HomeAboutSection from '@/components/oil-gas-homepage/HomeAboutSection'
import HomeBannerSection from '@/components/oil-gas-homepage/HomeBannerSection'
import HomeBlogSection from '@/components/oil-gas-homepage/HomeBlogSection'
import HomeCareerOpportunitySection from '@/components/oil-gas-homepage/HomeCareerOpportunitySection'
import HomeCompanyInfoSection from '@/components/oil-gas-homepage/HomeCompanyInfoSection'
import HomeIndustryLocationSection from '@/components/oil-gas-homepage/HomeIndustryLocationSection'
import HomeLogoSection from '@/components/oil-gas-homepage/HomeLogoSection'
import HomeProcessSection from '@/components/oil-gas-homepage/HomeProcessSection'
import HomeProjectSection from '@/components/oil-gas-homepage/HomeProjectSection'
import HomeServiceSection from '@/components/oil-gas-homepage/HomeServiceSection'
import HomeTeamSection from '@/components/oil-gas-homepage/HomeTeamSection'
import HomeTestimonialSection from '@/components/oil-gas-homepage/HomeTestimonialSection'
import HomeVideoSection from '@/components/oil-gas-homepage/HomeVideoSection'

const OilGasHomePage = () => {

    return (
        <>
            <Header3 />
            <HomeBannerSection />
            <HomeAboutSection />
            <HomeServiceSection />
            <HomeIndustryLocationSection />
            <HomeProcessSection />
            <HomeProjectSection />
            <HomeVideoSection />
            <HomeCompanyInfoSection />
            <HomeTeamSection />
            <HomeBlogSection />
            <HomeTestimonialSection />
            <HomeCareerOpportunitySection />
            <HomeLogoSection />
            <Footer3 />
        </>
    )
}

export default OilGasHomePage
