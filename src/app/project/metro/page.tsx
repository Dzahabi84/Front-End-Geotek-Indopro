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
            <Breadcrumb title="Project Metro" subtitle="Transforming Industries Through Projects." />

            <div className="project-metro-page" id="scroll-section">
                <div className="row g-0">
                    <div className="col-xl-6">
                        <div className="row g-0">
                            <div className="col-md-12">
                                <div className="project-metro-card">
                                    <div className="project-img">
                                        <Image width={960} height={470} src="/assets/img/innerpages/project-metro-img1.jpg" alt="" />
                                    </div>
                                    <div className="project-content-wrap">
                                        <div className="project-content">
                                            <h3><Link href="/project/details">Advancements Smart Metallurgy</Link></h3>
                                            <ul>
                                                <li><Link href="/project">Architecture</Link></li>
                                                <li><Link href="/project">Construction</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="project-metro-card two">
                                    <div className="project-img">
                                        <Image width={960} height={470} src="/assets/img/innerpages/project-metro-img2.jpg" alt="" />
                                    </div>
                                    <div className="project-content-wrap">
                                        <div className="project-content">
                                            <h3><Link href="/project/details">Smart Factory Revolution</Link></h3>
                                            <ul>
                                                <li><Link href="/project">Metal</Link></li>
                                                <li><Link href="/project">Chemical</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="project-metro-card two">
                                    <div className="project-img">
                                        <Image width={960} height={470} src="/assets/img/innerpages/project-metro-img3.jpg" alt="" />
                                    </div>
                                    <div className="project-content-wrap">
                                        <div className="project-content">
                                            <h3><Link href="/project/details">Eco Tech Manufacturing</Link></h3>
                                            <ul>
                                                <li><Link href="/project">Packaging</Link></li>
                                                <li><Link href="/project">Logistics</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="project-metro-card">
                                    <div className="project-img">
                                        <Image width={960} height={470} src="/assets/img/innerpages/project-metro-img4.jpg" alt="" />
                                    </div>
                                    <div className="project-content-wrap">
                                        <div className="project-content">
                                            <h3><Link href="/project/details">Dominating Auto Search</Link></h3>
                                            <ul>
                                                <li><Link href="/project">Architecture</Link></li>
                                                <li><Link href="/project">Chemical</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="project-metro-card two">
                                    <div className="project-img">
                                        <Image width={960} height={470} src="/assets/img/innerpages/project-metro-img5.jpg" alt="" />
                                    </div>
                                    <div className="project-content-wrap">
                                        <div className="project-content">
                                            <h3><Link href="/project/details">Precision Engineering</Link></h3>
                                            <ul>
                                                <li><Link href="/project">Energy</Link></li>
                                                <li><Link href="/project">Factories</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="project-metro-card two">
                                    <div className="project-img">
                                        <Image width={960} height={470} src="/assets/img/innerpages/project-metro-img6.jpg" alt="" />
                                    </div>
                                    <div className="project-content-wrap">
                                        <div className="project-content">
                                            <h3><Link href="/project/details">Industrial Automation</Link></h3>
                                            <ul>
                                                <li><Link href="/project">Packaging</Link></li>
                                                <li><Link href="/project">Factories</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="row g-0">
                            <div className="col-md-6">
                                <div className="project-metro-card two">
                                    <div className="project-img">
                                        <Image width={960} height={470} src="/assets/img/innerpages/project-metro-img7.jpg" alt="" />
                                    </div>
                                    <div className="project-content-wrap">
                                        <div className="project-content">
                                            <h3><Link href="/project/details">Product Design Fabricat</Link></h3>
                                            <ul>
                                                <li><Link href="/project">Logistics</Link></li>
                                                <li><Link href="/project">Metal</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="project-metro-card two">
                                    <div className="project-img">
                                        <Image width={960} height={470} src="/assets/img/innerpages/project-metro-img8.jpg" alt="" />
                                    </div>
                                    <div className="project-content-wrap">
                                        <div className="project-content">
                                            <h3><Link href="/project/details">Supply Chain</Link></h3>
                                            <ul>
                                                <li><Link href="/project">Packaging</Link></li>
                                                <li><Link href="/project">Factories</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="project-metro-card">
                                    <div className="project-img">
                                        <Image width={960} height={470} src="/assets/img/innerpages/project-metro-img9.jpg" alt="" />
                                    </div>
                                    <div className="project-content-wrap">
                                        <div className="project-content">
                                            <h3><Link href="/project/details">Smarter Machining Innovations</Link></h3>
                                            <ul>
                                                <li><Link href="/project">Architecture</Link></li>
                                                <li><Link href="/project">Metal</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="project-metro-card two">
                                    <div className="project-img">
                                        <Image width={960} height={470} src="/assets/img/innerpages/project-metro-img10.jpg" alt="" />
                                    </div>
                                    <div className="project-content-wrap">
                                        <div className="project-content">
                                            <h3><Link href="/project/details">Digital Transformation</Link></h3>
                                            <ul>
                                                <li><Link href="/project">Logistics</Link></li>
                                                <li><Link href="/project">Metal</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="project-metro-card two">
                                    <div className="project-img">
                                        <Image width={960} height={470} src="/assets/img/innerpages/project-metro-img11.jpg" alt="" />
                                    </div>
                                    <div className="project-content-wrap">
                                        <div className="project-content">
                                            <h3><Link href="/project/details">Logistics &amp; Supply</Link></h3>
                                            <ul>
                                                <li><Link href="/project">Packaging</Link></li>
                                                <li><Link href="/project">Factories</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="project-metro-card">
                                    <div className="project-img">
                                        <Image width={960} height={470} src="/assets/img/innerpages/project-metro-img12.jpg" alt="" />
                                    </div>
                                    <div className="project-content-wrap">
                                        <div className="project-content">
                                            <h3><Link href="/project/details">Innovative Factory Movement</Link></h3>
                                            <ul>
                                                <li><Link href="/project">Architecture</Link></li>
                                                <li><Link href="/project">Construction</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
