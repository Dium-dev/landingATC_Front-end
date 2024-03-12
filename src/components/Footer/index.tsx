'use client';
import React from 'react';
import Image from 'next/image';
import { SocialMedia, NavLinks } from './FooterLinks';
import logo from '../../../public/images/logoFooter.webp';
import paymentMethods from "../../../public/images/mercadoPago.webp"
// import Form

function Footer({ }) {
    return (
        // <footer className="flex flex-col items-center justify-center w-full px-2 md:px-[100px] pt-[32px] md:pt-[100px] pb-[20px] md:pb-[25px] bg-[#1C2023] text-white">
        <footer className="flex flex-col items-center justify-center w-full px-[20px] md:px-[100px] pt-[100px] pb-[25px] bg-[#1C2023] text-white">
            {/* <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch gap-[32px] md:gap-0 w-full max-w-[1920px] mb-[32px] md:mb-[100px]"> */}
            <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch gap-[50px] md:gap-0 w-full max-w-[1920px] mb-[50px] md:mb-[100px]">
                {/* LOGO AND SOCIAL MEDIA */}
                <div className="flex">
                    {/* <div className="flex flex-col items-center justify-between gap-[32px] xl:pl-[50px] xxxl:pl-[300px] md:gap-[16px]"> */}
                    <div className="flex flex-col items-center justify-between gap-[24px] md:gap-[16px] xxxl:ml-[100px]">
                        <Image
                            src={logo}
                            alt="Actualiza tu carro logo."
                            // width={210}
                            width={180}
                            className="aspect-[664/381] mx-[40px]"
                        />
                        <nav className='w-full'>
                            <ul className="flex justify-between">
                                <SocialMedia />
                            </ul>
                        </nav>
                    </div>
                    {/* <div className="hidden md:block h-[180px] w-[1.5px] mx-[50px] md:mx-[100px] xl:mx-[150px] bg-gradient-to-t from-[#1C2023] via-white to-background-[#1C2023]" /> */}
                    <div className="hidden md:block h-[200px] w-[1.5px] md:mx-[100px] ms:mx-[50px] bg-gradient-to-t from-[#1C2023] via-white to-background-[#1C2023]" />
                </div>
                {/* LINKS, CONTACT AND PAYMENT METHODS */}
                {/* <div className="flex flex-1 flex-col items-center justify-between gap-[32px] md:gap-0 xl:pr-[50px]"> */}
                <div className="flex flex-1 flex-col items-center justify-between gap-[50px] md:gap-0">
                    <nav className="w-fit xs:w-[400px]">
                        {/* <ul className="flex flex-col xs:flex-row items-center justify-between gap-[16px] xs:gap-0 w-full"> */}
                        <ul className="flex flex-col xs:flex-row items-center justify-between gap-[24px] xs:gap-0 w-full">
                            <NavLinks />
                            <button className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-secondary-lm after:scale-x-0 after:transform after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left">
                                Contacto
                            </button>
                        </ul>
                    </nav>
                    <Image
                        src={paymentMethods}
                        alt="Métodos de pago: Mercado pago."
                        width={250}
                        className="aspect-[257/73] w-[250px] xs:w-[400px]"
                    />
                </div>
            </div>
            <div className="w-full max-w-[1920px] h-[1.5px] md:mx-[100px] ms:mx-[50px] bg-white bg-opacity-[.1]" />
            {/* <div className="w-full pt-[20px] max-w-[1920px] text-xs text-center"> */}
            <div className="w-full pt-[25px] max-w-[1920px] text-xs text-center">
                ©Copyrigth 2024. Todos los derechos reservados - Desarrollado por: <strong>Work Team</strong>
            </div>
        </footer>
    );
};

export default Footer;