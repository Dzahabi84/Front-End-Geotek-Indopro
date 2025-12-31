
import React, { useEffect } from 'react'
import HomeAboutSection from '@/components/engineering--homepage/HomeAboutSection'
import HomeBannerSection from '@/components/engineering--homepage/HomeBannerSection'
import HomeBlogSection from '@/components/engineering--homepage/HomeBlogSection'
import HomeContactSection from '@/components/engineering--homepage/HomeContactSection'
import HomeFaqSection from '@/components/engineering--homepage/HomeFaqSection'
import HomeFeatureSection from '@/components/engineering--homepage/HomeFeatureSection'
import HomeProjectSection from '@/components/engineering--homepage/HomeProjectSection'
import HomeServiceSection from '@/components/engineering--homepage/HomeServiceSection'
import HomeSubscribeSection from '@/components/engineering--homepage/HomeSubscribeSection'
import HomeTeamSection from '@/components/engineering--homepage/HomeTeamSection'
import HomeTestimonialSection from '@/components/engineering--homepage/HomeTestimonialSection'

import Header6 from '@/components/header/Header6'

import Footer6 from '../../components/footers/Footer6'
const EngineeringPage = () => {

    return (
        <>
            <Header6 />
            <HomeBannerSection />
            <HomeAboutSection />
            <HomeServiceSection />
            <HomeProjectSection />
            <HomeFeatureSection />
            <HomeTeamSection />
            <HomeTestimonialSection />
            <HomeContactSection />
            <HomeBlogSection />
            <HomeSubscribeSection />
            <Footer6 />
        </>
    )
}

export default EngineeringPage
