'use client';
import React from 'react';
import Image from 'next/image';
import footerLogo from '../../public/images/logoFooter.webp';

interface LinkListProps {
    array: any[];
    hasIcons: boolean
}
function LinkList({ array, hasIcons }: LinkListProps) {
    return (
        <ul className={hasIcons ? "flex justify-between" : ""}>
            {
                array.map((item) => (
                    hasIcons ? (
                        <li key={item.name} className="size-[32px] rounded-full border border-primary-lm"></li>
                    ) : (
                        <li key={item.name}>
                            <a
                                className="relative after:content-[''] after:absolute after:-bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-secondary-lm after:scale-x-0 after:transform after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left"
                                href={`/${item.path}`}
                            >
                                {item.name}
                            </a>
                        </li>
                    )
                ))
            }
        </ul>
    )
}

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
                        <LinkList array={SOCIALMEDIA_LINKS} hasIcons={true} />
                    </div>
                </div>
                {/* LINKS */}
                <div className="flex justify-between">
                    <div>
                        <span>Categorías</span>
                        <nav>
                            <ul>
                                <LinkList array={NAV_LINKS.categories} hasIcons={false} />
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <div>
                            <span>Empresa</span>
                            <nav>
                                <LinkList array={NAV_LINKS.company} hasIcons={false} />
                            </nav>
                        </div>
                        <div>
                            <span>Comunidad</span>
                            <nav>
                                <LinkList array={NAV_LINKS.community} hasIcons={false} />
                            </nav>
                        </div>
                    </div>
                    <div>
                        <span>Compra</span>
                        <nav>
                            <LinkList array={NAV_LINKS.purchase} hasIcons={false} />
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