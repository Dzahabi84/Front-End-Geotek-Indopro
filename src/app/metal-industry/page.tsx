
import React from 'react'
import SidebarHeader from '@/components/header/SidebarHeader'
import FooterTopSection from '@/components/metal-industry-homepage/FooterTopSection'
import HomeAboutSection from '@/components/metal-industry-homepage/HomeAboutSection'
import HomeBannerSection from '@/components/metal-industry-homepage/HomeBannerSection'
import HomeBlogSection from '@/components/metal-industry-homepage/HomeBlogSection'
import HomeCareerSection from '@/components/metal-industry-homepage/HomeCareerSection'
import HomeContactSection from '@/components/metal-industry-homepage/HomeContactSection'
import HomeCounterSection from '@/components/metal-industry-homepage/HomeCounterSection'
import HomeProcessSection from '@/components/metal-industry-homepage/HomeProcessSection'
import HomeProductSection from '@/components/metal-industry-homepage/HomeProductSection'
import HomeProjectSection from '@/components/metal-industry-homepage/HomeProjectSection'
import HomeServiceSection from '@/components/metal-industry-homepage/HomeServiceSection'
import HomeTestimonialSection from '@/components/metal-industry-homepage/HomeTestimonialSection'
import Footer4 from '@/components/footers/Footer4'


const MetalIndustryPage = () => {
    
    return (
        <>
            <div className="main-container">
                <div className="main-content">
                    <SidebarHeader />
                    <HomeBannerSection />
                    <HomeAboutSection />
                    <HomeServiceSection />
                    <HomeProcessSection />
                    <HomeTestimonialSection />
                    <HomeCareerSection />
                    <HomeCounterSection />
                    <HomeProductSection />
                    <HomeContactSection />
                    <HomeBlogSection />
                    <FooterTopSection />
                    <Footer4 />
                </div>

            </div>
        </>
    )
}

export default MetalIndustryPage
