"use client";
import Link from 'next/link'
import React, { useMemo } from "react";
import FooterTop from '@/components/factory-homepage/FooterTop'
import Footer1 from '@/components/footers/Footer1'
import InnerPageHeader from '@/components/header/InnerPageHeader'

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Autoplay,
    EffectFade,
    Mousewheel,
    Navigation,
    Pagination,
} from "swiper";
import { SwiperOptions } from 'swiper/types';

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination, Mousewheel]);

const ProjectSingleSidebar:React.FC = () => {
    const settings:SwiperOptions = useMemo(() => {
        return {
            slidesPerView: "auto",
            speed: 1500,
            spaceBetween: 25,
            loop: true,
            effect: "fade",
            mousewheel: {
                invert: false,
            },
            navigation: {
                nextEl: ".pf-slider-next",
                prevEl: ".pf-slider-prev",
            },
        };
    }, []);
    return (
        <>
            <InnerPageHeader />
            <div className="project-slider-page" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url("//assets/img/innerpages/project-slider-img1.jpg")' }}>
                <Swiper {...settings} className="swiper pf-horizontal-slider">
                    <div className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                            <div className="project-slider-item">
                                <div className="project-slider-bg" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url("/assets/img/innerpages/project-slider-img1.jpg")' }}>
                                </div>
                                <div className="project-slider-content">
                                    <span>Client: Egenslab</span>
                                    <h1><Link href="/project/details">Smart Factory Revolution</Link></h1>
                                    <ul>
                                        <li><Link href="/project">Metal</Link></li>
                                        <li><Link href="/project">Chemical</Link></li>
                                    </ul>
                                    <div className="title-area">
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="project-slider-item">
                                <div className="project-slider-bg" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url("/assets/img/innerpages/project-slider-img2.jpg")' }}>
                                </div>
                                <div className="project-slider-content">
                                    <span>Client: Egenstheme</span>
                                    <h1><Link href="/project/details">Future Factory Initiative</Link></h1>
                                    <ul>
                                        <li><Link href="/project">Factories</Link></li>
                                        <li><Link href="/project">Energy</Link></li>
                                    </ul>
                                    <div className="title-area">
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="project-slider-item">
                                <div className="project-slider-bg" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url("/assets/img/innerpages/project-slider-img3.jpg")' }}>
                                </div>
                                <div className="project-slider-content">
                                    <span>Client: Zenfy</span>
                                    <h1><Link href="/project/details">Industrial Automation</Link></h1>
                                    <ul>
                                        <li><Link href="/project">Factories</Link></li>
                                        <li><Link href="/project">Logistics</Link></li>
                                    </ul>
                                    <div className="title-area">
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="project-slider-item">
                                <div className="project-slider-bg" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url("/assets/img/innerpages/project-slider-img4.jpg")' }}>
                                </div>
                                <div className="project-slider-content">
                                    <span>Client: Vernex</span>
                                    <h1><Link href="/project/details">Logistics &amp; Supply Chain </Link></h1>
                                    <ul>
                                        <li><Link href="/project">Factories</Link></li>
                                        <li><Link href="/project">Logistics</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                </Swiper>
                <div className="slider-btn-area">
                    <div style={{ cursor: "pointer" }} className="slider-btn pf-slider-prev">
                        <i className="bi bi-arrow-left" />
                        PREVIOUS
                    </div>
                    <div style={{ cursor: "pointer" }} className="slider-btn pf-slider-next">
                        NEXT
                        <i className="bi bi-arrow-right" />
                    </div>
                </div>
            </div>

            <FooterTop />
            <Footer1 />
        </>
    )
}

export default ProjectSingleSidebar
