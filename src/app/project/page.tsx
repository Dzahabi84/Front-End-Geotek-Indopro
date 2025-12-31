import FooterTop from '@/components/factory-homepage/FooterTop'
import InnerPageHeader from '@/components/header/InnerPageHeader'
import Link from 'next/link'
import React from 'react'
import Footer1 from '@/components/footers/Footer1'
import Breadcrumb from '@/components/common/Breadcrumb'
import Image from 'next/image'

const page = () => {
    return (
        <>
            <InnerPageHeader />
            <Breadcrumb title="Project Grid" subtitle="Transforming Industries Through Projects." />


            <div className="project-grid-page pt-120 mb-120" id="scroll-section">
                <div className="container">
                    <div className="row gy-5 mb-70">
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="project-card magnetic-item">
                                <div className="project-img">
                                    <Image width={960} height={470} src="/assets/img/home1/project-img1.jpg" alt="" />
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
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="project-card magnetic-item">
                                <div className="project-img">
                                    <Image width={960} height={470} src="/assets/img/home1/project-img2.jpg" alt="" />
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
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="project-card magnetic-item">
                                <div className="project-img">
                                    <Image width={960} height={470} src="/assets/img/home1/project-img3.jpg" alt="" />
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
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                            <div className="project-card magnetic-item">
                                <div className="project-img">
                                    <Image width={960} height={470} src="/assets/img/home1/project-img4.jpg" alt="" />
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
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                            <div className="project-card magnetic-item">
                                <div className="project-img">
                                    <Image width={960} height={470} src="/assets/img/home1/project-img5.jpg" alt="" />
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
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="project-card magnetic-item">
                                <div className="project-img">
                                    <Image width={960} height={470} src="/assets/img/home1/project-img6.jpg" alt="" />
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
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="project-card magnetic-item">
                                <div className="project-img">
                                    <Image width={960} height={470} src="/assets/img/innerpages/project-img1.jpg" alt="" />
                                </div>
                                <div className="project-content-wrap">
                                    <div className="project-content">
                                        <span>Client: Vernex</span>
                                        <h3><Link href="/project/details">Logistics &amp; Supply Chain </Link></h3>
                                        <ul>
                                            <li><Link href="/project">Packaging</Link></li>
                                            <li><Link href="/project">Metal</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="project-card magnetic-item">
                                <div className="project-img">
                                    <Image width={960} height={470} src="/assets/img/innerpages/project-img2.jpg" alt="" />
                                </div>
                                <div className="project-content-wrap">
                                    <div className="project-content">
                                        <span>Client: Mortar</span>
                                        <h3><Link href="/project/details">Precision Manufacturing</Link></h3>
                                        <ul>
                                            <li><Link href="/project">Energy</Link></li>
                                            <li><Link href="/project">Logistics</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="project-card magnetic-item">
                                <div className="project-img">
                                    <Image width={960} height={470} src="/assets/img/innerpages/project-img3.jpg" alt="" />
                                </div>
                                <div className="project-content-wrap">
                                    <div className="project-content">
                                        <span>Client: Zenfy</span>
                                        <h3><Link href="/project/details">Digital Transformation</Link></h3>
                                        <ul>
                                            <li><Link href="/project">Packaging</Link></li>
                                            <li><Link href="/project">Logistics</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row bounce_up">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <a className="primary-btn1 black-bg" href="#">
                                <span>Load More
                                </span>
                                <span>Load More
                                </span>
                                <svg className="arrow" width={23} height={23} viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="M0.113861 0H22.9999V4.28425L4.32671 22.9997L0 18.7154L12.7524 6.08815L0.113861 6.20089V0Z" />
                                        <path d="M23 22.9996V8.56848L16.8516 14.6566V22.9996H23Z" />
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            <FooterTop />
            <Footer1 />
        </>
    )
}

export default page
