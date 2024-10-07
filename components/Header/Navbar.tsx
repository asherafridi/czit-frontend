"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import icon1 from '@/public/images/icons/icon_wifi.svg'
import icon2 from '@/public/images/icons/icon_dollar_2.svg'
import icon3 from '@/public/images/icons/icon_chart.svg'
import icon4 from '@/public/images/icons/icon_tag_2.svg'
import icon5 from '@/public/images/icons/icon_user_2.svg'
import icon6 from '@/public/images/icons/icon_users.svg'
import icon7 from '@/public/images/icons/icon_pen.svg'
import icon8 from '@/public/images/clients/client_logo_9.webp'
import icon9 from '@/public/images/clients/client_logo_10.webp'
import icon10 from '@/public/images/avatar/avatar_7.webp'
import icon11 from '@/public/images/icons/icon_quote.svg'
import logo from '@/public/logo.png'
import cases from '@/public/images/case/case_image_4.webp'
import MobileMenu from './MobileMenu'
import Image from 'next/image';

const Header = (props: any) => {

    const [mobailActive, setMobailState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (

        <header className="site_header site_header_1">
            <div className="header_top text-center">
                <div className="container">
                    <p className="m-0">Subscribe us and receive <b>20% bonus</b> discount on checkout. <Link onClick={ClickHandler} href="/pricing"><u>Learn more</u> <i className="fa-solid fa-angle-right"></i></Link></p>
                </div>
            </div>
            <div className={`header_bottom stricky  ${isSticky ? 'stricked-menu stricky-fixed' : ''}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-3 col-lg-2 col-5">
                            <div className="site_logo">
                                <Link onClick={ClickHandler} className="site_link" href="/">
                                    <Image src={logo} alt="Site Logo – Techco – IT Solutions & Technology, Business Consulting, Software Company Site Template" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7 col-2">
                            <nav className="main_menu navbar navbar-expand-lg">
                                <div className="main_menu_inner collapse navbar-collapse justify-content-lg-center" id="main_menu_dropdown">
                                    <ul className="main_menu_list unordered_list justify-content-center">

                                        <li><Link href="/home">Home</Link></li>
                                        <li className="dropdown">
                                            <Link onClick={ClickHandler} className="nav-link" href="/" id="services_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Services
                                            </Link>
                                            <div className="dropdown-menu mega_menu_wrapper p-0" aria-labelledby="services_submenu">
                                                <div className="container">
                                                    <div className="row justify-content-lg-between">
                                                        <div className="col-lg-8">
                                                            <div className="row">
                                                                <div className="col-lg-4">
                                                                    <div className="megamenu_widget">
                                                                        <h3 className="megamenu_info_title">Services</h3>
                                                                        <ul className="icon_list unordered_list_block">
                                                                            <li>
                                                                                <Link onClick={ClickHandler} href="/service-single/IT-Management-Services">
                                                                                    <span className="icon_list_text">
                                                                                        IT Management Services
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} href="/service-single/Data-Tracking-and-Security">
                                                                                    <span className="icon_list_text">
                                                                                        Data Tracking Security
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} href="/service-single/IT-Management-Services">
                                                                                    <span className="icon_list_text">
                                                                                        Website Development
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} href="/service-single/IT-Management-Services">
                                                                                    <span className="icon_list_text">
                                                                                        CRM Solutions and Design
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} href="/service-single/IT-Management-Services">
                                                                                    <span className="icon_list_text">
                                                                                        UI/UX Design Services
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} href="/service-single/IT-Management-Services">
                                                                                    <span className="icon_list_text">
                                                                                        Technology Solution
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} href="/service-single/IT-Management-Services">
                                                                                    <span className="icon_list_text">
                                                                                        Software Development
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <div className="megamenu_widget">
                                                                        <h3 className="megamenu_info_title">Our Fields</h3>
                                                                        <ul className="icon_list unordered_list_block">
                                                                            <li>
                                                                                <Link onClick={ClickHandler} href="/service">
                                                                                    <span className="icon_list_text">
                                                                                        Healthcare
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} href="/service">
                                                                                    <span className="icon_list_text">
                                                                                        Banks
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} href="/service">
                                                                                    <span className="icon_list_text">
                                                                                        Logistics
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} href="/service">
                                                                                    <span className="icon_list_text">
                                                                                        Supermarkets
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} href="/service">
                                                                                    <span className="icon_list_text">
                                                                                        Industries
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} href="/service">
                                                                                    <span className="icon_list_text">
                                                                                        Hotels
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} href="/service">
                                                                                    <span className="icon_list_text">
                                                                                        Fintech
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <div className="megamenu_widget">
                                                                        <h3 className="megamenu_info_title">Product</h3>
                                                                        <ul className="icon_list unordered_list_block">
                                                                            <li>
                                                                                <Link onClick={ClickHandler} href="/portfolio">
                                                                                    <span className="icon_list_text">
                                                                                        Case Studies
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} href="/pricing">
                                                                                    <span className="icon_list_text">
                                                                                        Our Pricing
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} href="/service">
                                                                                    <span className="icon_list_text">
                                                                                        Features
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} href="/about">
                                                                                    <span className="icon_list_text">
                                                                                        Overview
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} href="/">
                                                                                    <span className="icon_list_text">
                                                                                        New Releases
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} href="/service">
                                                                                    <span className="icon_list_text">
                                                                                        Solutions
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="social_area">
                                                                <ul className="social_icons_block unordered_list" data-text="Follow Us:">
                                                                    <li>
                                                                        <Link onClick={ClickHandler} href="/">
                                                                            <i className="fa-brands fa-facebook-f"></i>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={ClickHandler} href="/">
                                                                            <i className="fa-brands fa-twitter"></i>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={ClickHandler} href="/">
                                                                            <i className="fa-brands fa-linkedin-in"></i>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={ClickHandler} href="/">
                                                                            <i className="fa-brands fa-dribbble"></i>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                                <p className="career_link m-0">Looking for new career? <Link onClick={ClickHandler} href="/">We’re Hiring</Link></p>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <div className="megamenu_case bg-primary">
                                                                <h3>Computer Software</h3>
                                                                <h4>Astarte Medical</h4>
                                                                <Image src={cases} alt="Case" />
                                                                <Link onClick={ClickHandler} className="btn" href="/portfolio">
                                                                    <span className="btn_label" data-text="Read Case">Read Case</span>
                                                                    <span className="btn_icon">
                                                                        <i className="fa-solid fa-arrow-up-right"></i>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="dropdown">
                                            <Link onClick={ClickHandler} className="nav-link" href="/" id="company_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                About Us
                                            </Link>
                                            <div className="dropdown-menu mega_menu_wrapper" aria-labelledby="company_submenu">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-lg-9">
                                                            <div className="megamenu_pages_wrapper mb-5">
                                                                <div className="row">
                                                                    <div className="col-lg-3 col-md-6">
                                                                        <Link onClick={ClickHandler} className="iconbox_block_2" href="/about">
                                                                            <span className="icon_title_wrap">
                                                                                <small className="iconbox_icon">
                                                                                    <Image src={icon1} alt="Wifi SVG Icon" />
                                                                                </small>
                                                                                <small className="iconbox_title">About Us</small>
                                                                            </span>
                                                                            <span className="description mb-0">
                                                                                Learn more about Techco
                                                                            </span>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="col-lg-3 col-md-6">
                                                                        <Link onClick={ClickHandler} className="iconbox_block_2" href="/pricing">
                                                                            <span className="icon_title_wrap">
                                                                                <small className="iconbox_icon">
                                                                                    <Image src={icon2} alt="Dollar SVG Icon" />
                                                                                </small>
                                                                                <small className="iconbox_title">Our Pricing</small>
                                                                            </span>
                                                                            <span className="description mb-0">
                                                                                Streamlined Pricing
                                                                            </span>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="col-lg-3 col-md-6">
                                                                        <Link onClick={ClickHandler} className="iconbox_block_2" href="/portfolio">
                                                                            <span className="icon_title_wrap">
                                                                                <small className="iconbox_icon">
                                                                                    <Image src={icon3} alt="Chart SVG Icon" />
                                                                                </small>
                                                                                <small className="iconbox_title">Portfolio</small>
                                                                            </span>
                                                                            <span className="description mb-0">
                                                                                Explore our all overview
                                                                            </span>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="col-lg-3 col-md-6">
                                                                        <Link onClick={ClickHandler} className="iconbox_block_2" href="/portfolio_details/Explore-Our-IT-Solutions">
                                                                            <span className="icon_title_wrap">
                                                                                <small className="iconbox_icon">
                                                                                    <Image src={icon4} alt="Event Tag SVG Icon" />
                                                                                </small>
                                                                                <small className="iconbox_title">Portfolio Details</small>
                                                                            </span>
                                                                            <span className="description mb-0">
                                                                                Explore our work overview
                                                                            </span>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="col-lg-3 col-md-6">
                                                                        <Link onClick={ClickHandler} className="iconbox_block_2" href="/team">
                                                                            <span className="icon_title_wrap">
                                                                                <small className="iconbox_icon">
                                                                                    <Image src={icon5} alt="User Check SVG Icon" />
                                                                                </small>
                                                                                <small className="iconbox_title">Team</small>
                                                                            </span>
                                                                            <span className="description mb-0">
                                                                                We are friendly Join our team
                                                                            </span>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="col-lg-3 col-md-6">
                                                                        <Link onClick={ClickHandler} className="iconbox_block_2" href="/team-single/Atticus-Sterling">
                                                                            <span className="icon_title_wrap">
                                                                                <small className="iconbox_icon">
                                                                                    <Image src={icon6} alt="Users SVG Icon" />
                                                                                </small>
                                                                                <small className="iconbox_title">Team Details</small>
                                                                            </span>
                                                                            <span className="description mb-0">
                                                                                We are friendly Join our team
                                                                            </span>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="col-lg-3 col-md-6">
                                                                        <Link onClick={ClickHandler} className="iconbox_block_2" href="/service">
                                                                            <span className="icon_title_wrap">
                                                                                <small className="iconbox_icon">
                                                                                    <Image src={icon7} alt="Pen SVG Icon" />
                                                                                </small>
                                                                                <small className="iconbox_title">Services</small>
                                                                            </span>
                                                                            <small className="description mb-0">
                                                                                Happy to help you!
                                                                            </small>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="col-lg-3 col-md-6">
                                                                        <Link onClick={ClickHandler} className="iconbox_block_2" href="/service-single/IT-Management-Services">
                                                                            <span className="icon_title_wrap">
                                                                                <small className="iconbox_icon">
                                                                                    <Image src={icon7} alt="Pen SVG Icon" />
                                                                                </small>
                                                                                <small className="iconbox_title">Service Details</small>
                                                                            </span>
                                                                            <small className="description mb-0">
                                                                                Happy to help you!
                                                                            </small>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <ul className="btns_group p-0 unordered_list justify-content-start">
                                                                <li>
                                                                    <Link onClick={ClickHandler} className="btn btn-primary" href="/contact">
                                                                        <span className="btn_label" data-text="Free Consultation">Free Consultation</span>
                                                                        <span className="btn_icon">
                                                                            <i className="fa-solid fa-arrow-up-right"></i>
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <div className="review_short_info_2">
                                                                        <div className="review_admin_logo">
                                                                            <Image src={icon8} alt="Client Logo" />
                                                                        </div>
                                                                        <div className="review_info_content">
                                                                            <ul className="rating_block unordered_list">
                                                                                <li><i className="fa-solid fa-star fa-fw"></i></li>
                                                                                <li><i className="fa-solid fa-star fa-fw"></i></li>
                                                                                <li><i className="fa-solid fa-star fa-fw"></i></li>
                                                                                <li><i className="fa-solid fa-star fa-fw"></i></li>
                                                                                <li><i className="fa-solid fa-star fa-fw"></i></li>
                                                                            </ul>
                                                                            <div className="review_counter">From <b>200+</b> reviews</div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="review_short_info_2">
                                                                        <div className="review_admin_logo">
                                                                            <Image src={icon9} alt="Client Logo" />
                                                                        </div>
                                                                        <div className="review_info_content">
                                                                            <ul className="rating_block unordered_list">
                                                                                <li><i className="fa-solid fa-star fa-fw"></i></li>
                                                                                <li><i className="fa-solid fa-star fa-fw"></i></li>
                                                                                <li><i className="fa-solid fa-star fa-fw"></i></li>
                                                                                <li><i className="fa-solid fa-star fa-fw"></i></li>
                                                                                <li><i className="fa-solid fa-star fa-fw"></i></li>
                                                                            </ul>
                                                                            <div className="review_counter">From <b>200+</b> reviews</div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <div className="site_author bg-primary">
                                                                <div className="author_box">
                                                                    <div className="author_image bg-light">
                                                                        <Image src={icon10} alt="Site Author" />
                                                                    </div>
                                                                    <div className="author_box_content">
                                                                        <h3 className="author_name text-white">Maverick Phoenix</h3>
                                                                        <span className="author_designation text-white">CEO At Techco</span>
                                                                    </div>
                                                                    <div className="quote_icon">
                                                                        <Image src={icon11} alt="Quote Icon" />
                                                                    </div>
                                                                </div>
                                                                <p className="mb-0 text-white">
                                                                    As a CEO at Techco  I have been voice crying in the wilderness,  trying to make requirements clear, use every minute to deliver the  result, and not reinvent the wheel. Here at Techco, I made that possible  for the clients.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li><Link href="/portfolio">Portfolio</Link></li>
                                        <li><Link href="/portfolio">DBT GPT</Link></li>

                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-5">
                            <ul className="header_btns_group unordered_list justify-content-end">
                                <li>
                                    <button className="mobile_menu_btn" onClick={() => setMobailState(!mobailActive)} type="button" data-bs-toggle="collapse" data-bs-target="#main_menu_dropdown" aria-expanded="false" aria-label="Toggle navigation">
                                        <i className="far fa-bars"></i>
                                    </button>
                                </li>
                                <li>
                                    <Link  className="btn btn-outline-light" href="/pricing">
                                        <span className="btn_label" data-text="Login">Login</span>
                                        <span className="btn_icon">
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mobail-wrap">
                    <div className={`mobail-menu ${mobailActive ? "active" : ""}`}>
                        <div className="xb-header-menu-scroll">
                            <div className="xb-menu-close xb-hide-xl xb-close" onClick={() => setMobailState(!mobailActive)}></div>
                            <nav className="xb-header-nav">
                                <MobileMenu />
                            </nav>
                        </div>
                    </div>
                    <div className="xb-header-menu-backdrop" onClick={() => setMobailState(false)}></div>
                </div>
            </div>
        </header>

    )
}

export default Header;