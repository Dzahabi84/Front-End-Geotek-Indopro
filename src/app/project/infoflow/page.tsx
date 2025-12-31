"use client"
import FooterTop from '@/components/factory-homepage/FooterTop'
import Footer1 from '@/components/footers/Footer1'
import InnerPageHeader from '@/components/header/InnerPageHeader'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import Breadcrumb from '@/components/common/Breadcrumb'
import Image from 'next/image'



const ProjectInfoFlow: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = containerRef.current?.querySelectorAll<HTMLDivElement>(
      ".project-info-flow-card"
    );
    if (!items) return;

    const intervals: number[] = []; // <-- browser setInterval returns number

    const handleMouseMove = (event: MouseEvent, item: HTMLDivElement) => {
      const contentBox = item.getBoundingClientRect();
      const dx = event.clientX - contentBox.x;
      const dy = event.clientY - contentBox.y;
      if (item.children[1] instanceof HTMLElement) {
        item.children[1].style.transform = `translate(${dx}px, ${dy}px)`;
      }
    };

    items.forEach((item) => {
      const listener = (event: MouseEvent) => handleMouseMove(event, item);
      item.addEventListener("mousemove", listener);

      // Example interval usage
      // const intervalId = window.setInterval(() => handleMouseMove(event as MouseEvent, item), 100);
      // intervals.push(intervalId);
    });

    return () => {
      items.forEach((item) => {
        // Remove listener properly
        const listener = (event: MouseEvent) => handleMouseMove(event, item);
        item.removeEventListener("mousemove", listener);
      });
      intervals.forEach((id) => clearInterval(id)); // <-- now correct type
    };
  }, []);
    return (
        <>
            <InnerPageHeader />
            <Breadcrumb title="Project InfoFollow" subtitle="Transforming Industries Through Projects." />

            <div className="project-info-flow-page pt-120 mb-120" id="scroll-section">
                <div className="container-fluid">
                    <div className="row gx-xxl-5 gx-xl-4 gx-lg-3 g-4 gy-xl-5 mb-70">
                        <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="project-info-flow-card">
                                <Link href="/projectdetails" className="info-flow-img">
                                    <Image width={360} height={470} src="/assets/img/innerpages/project-infoflow-img1.jpg" alt="" />
                                </Link>
                                <div className="info-flow-content">
                                    <Link href="/projectdetails">Client: Egenslab</Link>
                                    <h6><Link href="/projectdetails">Unveiling Iconic Identities</Link></h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="project-info-flow-card">
                                <Link href="/projectdetails" className="info-flow-img">
                                    <Image width={360} height={470} src="/assets/img/innerpages/project-infoflow-img2.jpg" alt="" />
                                </Link>
                                <div className="info-flow-content">
                                    <Link href="/projectdetails">Client: Zenfy</Link>
                                    <h6><Link href="/projectdetails">Project Build Vision</Link></h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="project-info-flow-card">
                                <Link href="/projectdetails" className="info-flow-img">
                                    <Image width={360} height={470} src="/assets/img/innerpages/project-infoflow-img3.jpg" alt="" />
                                </Link>
                                <div className="info-flow-content">
                                    <Link href="/projectdetails">Client: Axleo</Link>
                                    <h6><Link href="/projectdetails">Dominating Auto Search</Link></h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                            <div className="project-info-flow-card">
                                <Link href="/projectdetails" className="info-flow-img">
                                    <Image width={360} height={470} src="/assets/img/innerpages/project-infoflow-img4.jpg" alt="" />
                                </Link>
                                <div className="info-flow-content">
                                    <Link href="/projectdetails">Client: Nexaq</Link>
                                    <h6><Link href="/projectdetails">Blueprint to Reality</Link></h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                            <div className="project-info-flow-card">
                                <Link href="/projectdetails" className="info-flow-img">
                                    <Image width={360} height={470} src="/assets/img/innerpages/project-infoflow-img5.jpg" alt="" />
                                </Link>
                                <div className="info-flow-content">
                                    <Link href="/projectdetails">Client: Triprex</Link>
                                    <h6><Link href="/projectdetails">Creating with Precision</Link></h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="project-info-flow-card">
                                <Link href="/projectdetails" className="info-flow-img">
                                    <Image width={360} height={470} src="/assets/img/innerpages/project-infoflow-img6.jpg" alt="" />
                                </Link>
                                <div className="info-flow-content">
                                    <Link href="/projectdetails">Client: Softconic</Link>
                                    <h6><Link href="/projectdetails">Crafting the Framework</Link></h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="project-info-flow-card">
                                <Link href="/projectdetails" className="info-flow-img">
                                    <Image width={360} height={470} src="/assets/img/innerpages/project-infoflow-img7.jpg" alt="" />
                                </Link>
                                <div className="info-flow-content">
                                    <Link href="/projectdetails">Client: Tourio</Link>
                                    <h6><Link href="/projectdetails">Build Master Plan</Link></h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="project-info-flow-card">
                                <Link href="/projectdetails" className="info-flow-img">
                                    <Image width={360} height={470} src="/assets/img/innerpages/project-infoflow-img8.jpg" alt="" />
                                </Link>
                                <div className="info-flow-content">
                                    <Link href="/projectdetails">Client: Probid</Link>
                                    <h6><Link href="/projectdetails">Modern Build Concepts</Link></h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="project-info-flow-card">
                                <Link href="/projectdetails" className="info-flow-img">
                                    <Image width={360} height={470} src="/assets/img/innerpages/project-infoflow-img9.jpg" alt="" />
                                </Link>
                                <div className="info-flow-content">
                                    <Link href="/projectdetails">Client: Brodie</Link>
                                    <h6><Link href="/projectdetails">Construction Methodology</Link></h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="project-info-flow-card">
                                <Link href="/projectdetails" className="info-flow-img">
                                    <Image width={360} height={470} src="/assets/img/innerpages/project-infoflow-img10.jpg" alt="" />
                                </Link>
                                <div className="info-flow-content">
                                    <Link href="/projectdetails">Client: Egens Theme</Link>
                                    <h6><Link href="/projectdetails">Site Planning Strategy</Link></h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="project-info-flow-card">
                                <Link href="/projectdetails" className="info-flow-img">
                                    <Image width={360} height={470} src="/assets/img/innerpages/project-infoflow-img11.jpg" alt="" />
                                </Link>
                                <div className="info-flow-content">
                                    <Link href="/projectdetails">Client: Qzency</Link>
                                    <h6><Link href="/projectdetails">Design Build Guide</Link></h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                            <div className="project-info-flow-card">
                                <Link href="/projectdetails" className="info-flow-img">
                                    <Image width={360} height={470} src="/assets/img/innerpages/project-infoflow-img12.jpg" alt="" />
                                </Link>
                                <div className="info-flow-content">
                                    <Link href="/projectdetails">Client: Axleo</Link>
                                    <h6><Link href="/projectdetails">Future Build Strategy</Link></h6>
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

export default ProjectInfoFlow
