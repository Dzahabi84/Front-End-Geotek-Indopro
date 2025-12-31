"use client";
import FooterTop from '@/components/factory-homepage/FooterTop'
import Footer1 from '@/components/footers/Footer1'
import InnerPageHeader from '@/components/header/InnerPageHeader'
import Link from 'next/link'
import React, { useMemo } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Autoplay,
    EffectFade,
    Navigation,
    Pagination,
} from "swiper";
import Breadcrumb from '@/components/common/Breadcrumb';
import Image from 'next/image';
import { SwiperOptions } from 'swiper/types';

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);
const ProjectPage: React.FC = () => {
    const settings: SwiperOptions = useMemo(() => {
        return {
            slidesPerView: "auto",
            speed: 1500,
            spaceBetween: 0,
            autoplay: {
                delay: 2500, // Autoplay duration in milliseconds
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".project-slider-next",
                prevEl: ".project-slider-prev",
            },
            pagination: {
                el: ".swiper-pagination1",
                clickable: true,
            },
            breakpoints: {
                280: {
                    slidesPerView: 1,
                },
                386: {
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 3,
                },
                1400: {
                    slidesPerView: 4,
                },
            },
        };
    }, []);
    return (
        <>
            <InnerPageHeader />
            <Breadcrumb title="Project Horizontal" subtitle="Transforming Industries Through Projects." />
            <div className="project-horizontal-page pt-120 mb-120" id="scroll-section">
                <div className="project-slider-area mb-50">
                    <div className="row">
                        <div className="col-lg-12">
                            <Swiper {...settings} className="swiper home1-project-slider">
                                <div className="swiper-wrapper">
                                    <SwiperSlide className="swiper-slide">
                                        <div className="project-card-wrap">
                                            <div className="project-card">
                                                <div className="project-img">
                                                    <Image width={425} height={450} src="/assets/img/home1/project-img1.jpg" alt="" />
                                                </div>
                                                <div className="project-content-wrap">
                                                    <div className="project-content">
                                                        <span>Client: Egenslab</span>
                                                        <h3><Link href="/project/details">Dominating Auto Search</Link></h3>
                                                        <ul>
                                                            <li><Link href="/project">Architecture</Link></li>
                                                            <li><Link href="/project">Construction</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="project-card-wrap">
                                            <div className="project-card">
                                                <div className="project-img">
                                                    <Image width={425} height={450} src="/assets/img/home1/project-img2.jpg" alt="" />
                                                </div>
                                                <div className="project-content-wrap">
                                                    <div className="project-content">
                                                        <span>Client: Egenslab</span>
                                                        <h3><Link href="/project/details">Smart Factory Revolution</Link></h3>
                                                        <ul>
                                                            <li><Link href="/project">Metal</Link></li>
                                                            <li><Link href="/project">Chemical</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="project-card-wrap">
                                            <div className="project-card">
                                                <div className="project-img">
                                                    <Image width={425} height={450} src="/assets/img/home1/project-img3.jpg" alt="" />
                                                </div>
                                                <div className="project-content-wrap">
                                                    <div className="project-content">
                                                        <span>Client: Brodie</span>
                                                        <h3><Link href="/project/details">Eco Tech Manufacturing</Link></h3>
                                                        <ul>
                                                            <li><Link href="/project">Packaging</Link></li>
                                                            <li><Link href="/project">Logistics</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="project-card-wrap">
                                            <div className="project-card">
                                                <div className="project-img">
                                                    <Image width={425} height={450} src="/assets/img/home1/project-img4.jpg" alt="" />
                                                </div>
                                                <div className="project-content-wrap">
                                                    <div className="project-content">
                                                        <span>Client: Nexaq</span>
                                                        <h3><Link href="/project/details">Precision Engineering</Link></h3>
                                                        <ul>
                                                            <li><Link href="/project">Energy</Link></li>
                                                            <li><Link href="/project">Factories</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="project-card-wrap">
                                            <div className="project-card">
                                                <div className="project-img">
                                                    <Image width={425} height={450} src="/assets/img/home1/project-img5.jpg" alt="" />
                                                </div>
                                                <div className="project-content-wrap">
                                                    <div className="project-content">
                                                        <span>Client: Triprex</span>
                                                        <h3><Link href="/project/details">Industrial Automation</Link></h3>
                                                        <ul>
                                                            <li><Link href="/project">Packaging</Link></li>
                                                            <li><Link href="/project">Factories</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="project-card-wrap">
                                            <div className="project-card">
                                                <div className="project-img">
                                                    <Image width={425} height={450} src="/assets/img/home1/project-img6.jpg" alt="" />
                                                </div>
                                                <div className="project-content-wrap">
                                                    <div className="project-content">
                                                        <span>Client: Softconic</span>
                                                        <h3><Link href="/project/details">Product Design Fabricat</Link></h3>
                                                        <ul>
                                                            <li><Link href="/project">Logistics</Link></li>
                                                            <li><Link href="/project">Metal</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="slider-btn-grp wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="slider-btn project-slider-prev">
                            <i className="bi bi-arrow-left" />
                        </div>
                        <div className="pagination swiper-pagination1" />
                        <div className="slider-btn project-slider-next">
                            <i className="bi bi-arrow-right" />
                        </div>
                    </div>
                </div>
            </div>


            <FooterTop />
            <Footer1 />
        </>
    )
}

export default ProjectPage
