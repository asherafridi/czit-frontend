"use client"
import BreadCrumb from "@/components/Breadcrumb";
import CtaSection from "@/components/CtaSection";
import About from "@/components/Homepage/About";
import BlogSection from "@/components/Homepage/Blog";
import FaqSection from "@/components/Homepage/Faq";
import Hero from "@/components/Homepage/Hero";
import ProjectSection from "@/components/Homepage/Portfolio";
import ServiceSection from "@/components/Homepage/Services";
import TechnologySection from "@/components/Homepage/Technology";
import Testimonial from "@/components/Homepage/Testimonial";
import Image from "next/image";

import aImg from '@/public/images/about/about_image_3.webp'
import aImg2 from '@/public/images/about/about_image_4.webp'
import { useState } from "react";

export default function Home() {

    
    const [isOpen, setOpen] = useState(false)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    
    return (
        <>

            <main className="page_content about-page">
            <BreadCrumb pageTop="About" pagesub="More CZIT 😃" pageTitle="About Us" />
                <section className="intro_about_section section_space bg-light">
                    <div className="intro_about_content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="image_wrap">
                                        <Image src={aImg} alt="Techco - About " />
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="heading_block mb-0">
                            <div className="row justify-content-lg-between">
                                <div className="col-lg-4">
                                    <div className="heading_focus_text">
                                        About
                                        <span className="badge bg-secondary text-white">CZIT 🙂</span>
                                    </div>
                                    <h2 className="heading_text mb-0">
                                    The Cost Savings cloud transformation for Your enterprise
                                    </h2>
                                </div>
                                <div className="col-lg-6">
                                    <p className="heading_description mb-0">
                                    At CZIT we offer a comprehensive suite of AI digital services designed to help businesses thrive in the digital age. Our team of AI experts is dedicated to delivering innovative solutions that drive growth, streamline operations, and enhance customer experiences.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <CtaSection />
            </main>
        </>
    );
}
