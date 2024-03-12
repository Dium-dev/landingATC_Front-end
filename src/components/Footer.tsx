'use client';
import React from 'react';
import Image from 'next/image';
import logo from '../../public/images/logoFooter.webp';
import paymentMethods from "../../public/images/mercadoPago.webp"
import { NAV_LINKS, SOCIALMEDIA_LINKS } from '@/utils/constants';
// import Form

function Footer({ }) {
    return (
        <footer className="flex flex-col items-center justify-center w-full px-[20px] md:px-[100px] pt-[100px] pb-[25px] bg-[#1C2023] text-white">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch gap-[50px] md:gap-0 w-full max-w-[1920px] mb-[50px] md:mb-[100px]">
                {/* LOGO AND SOCIAL MEDIA */}
                <div className="flex">
                    <div className="flex flex-col items-center justify-between gap-[24px] md:gap-[16px]">
                        <Image
                            src={logo}
                            alt="Actualiza tu carro logo."
                            width={180}
                            className="aspect-[664/381] mx-[40px]"
                        />
                        <nav className='w-full'>
                            <ul className="flex justify-between">
                                {
                                    SOCIALMEDIA_LINKS.map((item) => (
                                        <li key={item.name}>
                                            <Image
                                                src={item.src}
                                                alt={item.name}
                                                loading="lazy"
                                                width={40}
                                                height={40}
                                                className="block"
                                            />
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>
                    </div>
                    <div className="hidden md:block h-[200px] w-[1.5px] md:mx-[100px] ms:mx-[50px] bg-gradient-to-t from-[#1C2023] via-white to-background-[#1C2023]" />
                </div>
                {/* LINKS, CONTACT AND PAYMENT METHODS */}
                <div className="flex flex-1 flex-col items-center justify-between gap-[50px] md:gap-0">
                    <nav className="w-fit xs:w-[400px]">
                        <ul className="flex flex-col xs:flex-row items-center justify-between gap-[24px] xs:gap-0 w-full">
                            {
                                NAV_LINKS.map((item) => (
                                    <li key={item.name}>
                                        <a
                                            href={item.path}
                                            className="relative inline-block text-center after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-secondary-lm after:scale-x-0 after:transform after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))
                            }
                            <button className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-secondary-lm after:scale-x-0 after:transform after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left">
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
            <div className="w-full pt-[25px] max-w-[1920px] text-xs text-center">
                ©Copyrigth 2024. Todos los derechos reservados - Desarrollado por: <strong>Work Team</strong>
            </div>
        </footer>
    );
};

export default Footer;