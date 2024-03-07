'use client';
import React from 'react';
import Image from 'next/image';
import footerLogo from '../../public/images/logoFooter.webp';

interface FooterProps {}
function Footer({ }: FooterProps) {

    const NAV_LINKS = [
        {
            categories: [
                {
                    name: "Farolas",
                    path: ""
                },
                {
                    name: "Stops",
                    path: ""
                },
                {
                    name: "Audio",
                    path: ""
                },
                {
                    name: "Exploradoras",
                    path: ""
                },
                {
                    name: "Exterior",
                    path: ""
                },
                {
                    name: "Interior",
                    path: ""
                },
                {
                    name: "Bombillos",
                    path: ""
                },
                {
                    name: "Repuestos",
                    path: ""
                }
            ],
            company: [
                {
                    name: "¿Quiénes somos?",
                    path: ""
                },
                {
                    name: "Aviso legal",
                    path: ""
                }
            ],
            community: [
                {
                    name: "Contáctanos",
                    path: ""
                },
                {
                    name: "Soporte",
                    path: ""
                },
                {
                    name: "Blog",
                    path: ""
                }
            ],
            purchase: [
                {
                    name: "Mi cuenta",
                    path: ""
                },
                {
                    name: "¿Cómo comprar?",
                    path: ""
                }
            ]
        }
    ]

    return (
        <footer className="flex flex-col items-center justify-center w-full px-[100px] pt-[100px] bg-[#1C2023]">
            <div className="flex justify-between w-full max-w-[1920px]">
                {/* LOGO */}
                <div className="flex flex-col items-center justify-between gap-8">
                    <Image
                        src={footerLogo}
                        alt="Actualiza tu carro logo."
                        width="245"
                        style={{ aspectRatio: '664 / 381' }}
                    />
                    <div className="flex gap-4">
                        <div className="size-[50px] rounded-full border border-primary-lm"></div>
                        <div className="size-[50px] rounded-full border border-primary-lm"></div>
                        <div className="size-[50px] rounded-full border border-primary-lm"></div>
                        <div className="size-[50px] rounded-full border border-primary-lm"></div>
                    </div>
                </div>
                {/* LINKS */}
                <div className="flex flex-col gap-12 items-center justify-between flex-1">                    
                    <nav className="flex flex-col items-center justify-center text-white whitespace-nowrap">
                        <a className="relative uppercase after:content-[''] after:absolute after:-bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-secondary-lm after:scale-x-0 after:transform after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left">
                            Contacto
                        </a>
                    </nav>
                    <nav>
                        
                    </nav>
                    <nav>

                    </nav>
                </div>
            </div>
            <p className="text-xs text-white text-center pb-4 pt-4 max-w-[1920px]">
                ©Copyrigth 2023. Todos los derechos reservados - Desarrollado por: <strong>Work Team</strong>
            </p>
        </footer>
    );
};

export default Footer;