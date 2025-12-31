
import React, { useEffect } from 'react'
import Footer5 from '@/components/footers/Footer5'
import Header5 from '@/components/header/Header5'
import HomeAboutSection from '@/components/textile-homepage/HomeAboutSection'
import HomeBanner from '@/components/textile-homepage/HomeBanner'
import HomeBlogSection from '@/components/textile-homepage/HomeBlogSection'
import HomeContactSection from '@/components/textile-homepage/HomeContactSection'
import HomeProcessSection from '@/components/textile-homepage/HomeProcessSection'
import HomeProductSection from '@/components/textile-homepage/HomeProductSection'
import HomeProjectSection from '@/components/textile-homepage/HomeProjectSection'
import HomeServiceSection from '@/components/textile-homepage/HomeServiceSection'
import HomeTestimonialSection from '@/components/textile-homepage/HomeTestimonialSection'
import HomeVideoSection from '@/components/textile-homepage/HomeVideoSection'

const TextilePage = () => {

    return (
        <>
            <Header5 />
            <HomeBanner />
            <HomeServiceSection />
            <HomeAboutSection />
            <HomeProjectSection />
            <HomeVideoSection />
            <HomeProductSection />
            <HomeProcessSection />
            <HomeBlogSection />
            <HomeTestimonialSection />
            <HomeContactSection />
            <Footer5 />
        </>
    )
}

export default TextilePage
