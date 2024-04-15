'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useMobile from '@/hooks/useMobile';
import { SocialMedia, NavLinks } from '@/components/Footer/FooterLinks';
// import Form

function Footer({ }) {

    const { isMobile } = useMobile();
    const logo = `/images/footer/logoFooter${isMobile ? "M" : "D"}.webp`;
    const bgLogo = '/images/footer/footerBackground.webp';

    const paymentLogo = [
        { width: 64, height: 56, path: "/images/footer/ico-davivienda.webp" },
        { width: 64, height: 56, path: "/images/footer/ico-bancolombia.webp" },
        { width: 64, height: 56, path: "/images/footer/ico-efecty.webp" },
        { width: 64, height: 56, path: "/images/footer/ico-pse.webp" },
        { width: 113, height: 56, path: "/images/footer/ico-mp.webp" },
        { width: 64, height: 56, path: "/images/footer/ico-mastercard.webp" },
        { width: 64, height: 56, path: "/images/footer/ico-visa.webp" },
        { width: 64, height: 56, path: "/images/footer/ico-ame.webp" },
        { width: 64, height: 56, path: "/images/footer/ico-dinners.webp" },
        { width: 154, height: 56, path: "/images/footer/ico-paypal.webp" },
    ]

    return (
        // <footer className="flex flex-col items-center justify-center w-full px-2 md:px-[100px] pt-[32px] md:pt-[100px] pb-[20px] md:pb-[25px] bg-[#1C2023] text-white">
        <footer className="relative flex flex-col items-center justify-center w-full px-[20px] md:px-[100px] pt-[100px] pb-[25px] bg-[#1C2023] text-white">
            <div className='overflow-hidden absolute top-0 left-0 w-full h-full'>
                <Image
                    src={bgLogo}
                    alt=''
                    className='aspect-[1920/1111] object-cover block h-full w-full object-center'
                    width={1920}
                    height={1111}
                >
                </Image>
            </div>
            {/* <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch gap-[32px] md:gap-0 w-full max-w-[1920px] mb-[32px] md:mb-[100px]"> */}
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center md:items-stretch gap-[50px] md:gap-0 w-full max-w-[1920px] xl:mb-[60px] lg:mb-[50px] md:mb-[40px]">
                {/* LOGO AND SOCIAL MEDIA */}
                <div className="flex">
                    {/* <div className="flex flex-col items-center justify-between gap-[32px] xl:pl-[50px] xxxl:pl-[300px] md:gap-[16px]"> */}
                    <div className="flex flex-col items-center justify-between gap-[24px] md:gap-[16px] xxxl:ml-[100px] pb-[25px]">
                        <Image
                            src={logo}
                            alt="Actualiza tu carro logo."
                            className={`aspect-[664/${isMobile ? 99 : 381}] w-[180px] mx-[40px]`}
                            height={isMobile ? 99 : 381}
                            width={664}
                        />
                        <nav className='w-full'>
                            <ul className="flex justify-between">
                                <SocialMedia />
                            </ul>
                        </nav>
                    </div>
                    {/* <div className="hidden md:block h-[180px] w-[1.5px] mx-[50px] md:mx-[100px] xl:mx-[150px] bg-gradient-to-t from-[#1C2023] via-white to-background-[#1C2023]" /> */}
                    <div className="hidden md:block h-full min-h-[150px] w-[1.5px] xl:mx-[100px] lg:mx-[60px] md:mx-[40px] bg-gradient-to-t from-[#1C2023] via-white to-background-[#1C2023]" />
                </div>
                {/* LINKS, CONTACT AND PAYMENT METHODS */}
                {/* <div className="flex flex-1 flex-col items-center justify-between gap-[32px] md:gap-0 xl:pr-[50px]"> */}
                <div className="flex flex-1 flex-col items-center justify-between gap-[50px] md:gap-0 pb-[25px]">
                    <nav className="w-full xl:px-[10%] lg:mx-[8%] px-[5%]">
                        {/* <ul className="flex flex-col xs:flex-row items-center justify-between gap-[16px] xs:gap-0 w-full"> */}
                        <ul className="flex flex-col xs:flex-row items-stretch justify-between mt-[40px] mx-auto w-fit">
                            <NavLinks />
                            <li className='flex items-center justify-center px-[.5em]'>
                                <button className="relative text-center after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-secondary-lm after:scale-x-0 after:transform after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left">
                                    Contacto
                                </button>
                            </li>
                        </ul>
                    </nav>
                    <div className="flex flex-wrap justify-center gap-[4px] lg:h-[40px] md:h-[35px]">
                        {
                            paymentLogo.map((icon) => (
                                <Image
                                    key={icon.path}
                                    src={icon.path}
                                    alt='logo'
                                    width={icon.width}
                                    height={icon.height}
                                    className={`aspect-[${icon.width}/${icon.height}] h-full w-auto`}
                                >

                                </Image>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className=" relative z-10 hidden md:block h-[1.5px] w-full bg-gradient-to-r from-[#1C2023] via-white to-background-[#1C2023]" />
            {/* <div className="relative z-10 w-full max-w-[1920px] h-[1.5px] md:mx-[100px] ms:mx-[50px] bg-white bg-opacity-[.1]" /> */}
            {/* <div className="w-full pt-[20px] max-w-[1920px] text-xs text-center"> */}
            <div className="relative z-10 flex items-center justify-center gap-[1em] w-full pt-[25px] max-w-[1920px] text-xs text-center">
                <div>
                    <span>Made with <span style={{ textShadow: '0 0 0 white' }} className='text-transparent'>💗</span> by <Link href={""} className='underline'>Dium Developers</Link></span>
                </div>
                <div className="aspect-square w-[.4em] h-[.4em] bg-white rounded-full" />
                <div>
                    <span>ActualizaTuCarro@Copyright 2024</span>
                </div>
                <div className="aspect-square w-[.4em] h-[.4em] bg-white rounded-full" />
                <div>
                    <span>Powered by: <Link href={""} className='underline'>Dium Team Work</Link></span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;