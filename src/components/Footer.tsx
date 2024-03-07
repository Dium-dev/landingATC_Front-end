'use client';
import React from 'react';
import Image from 'next/image';
import footerLogo from '../../public/images/logoFooter.webp';

interface FooterProps { }
function Footer({ }: FooterProps) {

    const NAV_LINKS = {
        categories: [
            { name: "Farolas", path: "" },
            { name: "Stops", path: "" },
            { name: "Audio", path: "" },
            { name: "Exploradoras", path: "" },
            { name: "Exterior", path: "" },
            { name: "Interior", path: "" },
            { name: "Bombillos", path: "" },
            { name: "Repuestos", path: "" }
        ],
        company: [
            { name: "¿Quiénes somos?", path: "" },
            { name: "Aviso legal", path: "" }
        ],
        community: [
            { name: "Contáctanos", path: "" },
            { name: "Soporte", path: "" },
            { name: "Blog", path: "" }
        ],
        purchase: [
            { name: "Mi cuenta", path: "" },
            { name: "¿Cómo comprar?", path: "" }
        ]
    }

    const SOCIALMEDIA_LINKS = [
        { name: "Facebook", icon: null, path: "" },
        { name: "Twitter", icon: null, path: "" },
        { name: "Youtube", icon: null, path: "" },
        { name: "Instagram", icon: null, path: "" },
        { name: "Pinterest", icon: null, path: "" }
    ]

    return (
        <footer className="flex flex-col items-center justify-center w-full px-[100px] pt-[100px] bg-[#1C2023] text-white">
            <div className="flex justify-between w-full max-w-[1920px]">
                {/* LOGO */}
                <div className="flex flex-col items-center justify-between gap-8">
                    <Image
                        src={footerLogo}
                        alt="Actualiza tu carro logo."
                        width="245"
                        style={{ aspectRatio: '664 / 381' }}
                    />
                    <div className='w-full'>
                        <ul className="flex justify-between">
                            {
                                SOCIALMEDIA_LINKS.map((item) => (
                                    <li key={item.name} className="size-[32px] rounded-full border border-primary-lm"></li>
                                ))
                            }

                        </ul>
                    </div>
                </div>
                {/* LINKS */}
                <div className="flex justify-between">
                    <div>
                        <span>Categorías</span>
                        <nav>
                            <ul>
                                {
                                    NAV_LINKS.categories.map((category) => (
                                        <li key={category.name}>
                                            <a
                                                className="relative after:content-[''] after:absolute after:-bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-secondary-lm after:scale-x-0 after:transform after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left"
                                                href={`/${category.path}`}
                                            >
                                                {category.name}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <div>
                            <span>Empresa</span>
                            <nav>
                                <ul>
                                    {
                                        NAV_LINKS.company.map((item) => (
                                            <li key={item.name}>
                                                <a
                                                    className="relative after:content-[''] after:absolute after:-bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-secondary-lm after:scale-x-0 after:transform after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left"
                                                    href={`/${item.path}`}
                                                >
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </nav>
                        </div>
                        <div>
                            <span>Comunidad</span>
                            <nav>
                                <ul>
                                    {
                                        NAV_LINKS.community.map((item) => (
                                            <li key={item.name}>
                                                <a
                                                    className="relative after:content-[''] after:absolute after:-bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-secondary-lm after:scale-x-0 after:transform after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left"
                                                    href={`/${item.path}`}
                                                >
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div>
                        <span>Compra</span>
                        <nav>
                            <ul>
                                {
                                    NAV_LINKS.purchase.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                className="relative after:content-[''] after:absolute after:-bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-secondary-lm after:scale-x-0 after:transform after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left"
                                                href={`/${item.path}`}
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <p className="text-xs text-white text-center pb-4 pt-4 max-w-[1920px]">
                ©Copyrigth 2023. Todos los derechos reservados - Desarrollado por: <strong>Work Team</strong>
            </p>
        </footer>
    );
};

export default Footer;