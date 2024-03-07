'use client';
import React from 'react';
import Image from 'next/image';
import logo from '../../public/images/logoFooter.webp';
import paymentMethods from "../../public/images/mercadoPago.webp"

// SVG:
function Facebook() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
        </svg>
    )
}
function Twitter() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
        </svg>
    )
}
function Youtube() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
        </svg>
    )
}
function Instagram() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
        </svg>

    )
}
function Pinterest() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pinterest" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0" />
        </svg>
    )
}

function Whatsapp() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
        </svg>
    )
}

function Mail() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16" style={{verticalAlign: "middle"}}>
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
        </svg>
    )
}

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
                        <li key={item.name} className="grid place-items-center size-[32px] rounded-full border border-primary-lm">
                            <item.icon />
                        </li>
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
        { name: "Facebook", icon: Facebook, path: "" },
        { name: "Twitter", icon: Twitter, path: "" },
        { name: "Youtube", icon: Youtube, path: "" },
        { name: "Instagram", icon: Instagram, path: "" },
        { name: "Pinterest", icon: Pinterest, path: "" }
    ]

    return (
        <footer className="flex flex-col items-center justify-center w-full px-[100px] pt-[100px] bg-[#1C2023] text-white">
            <div className="flex justify-between w-full max-w-[1920px] mb-[100px]">
                {/* LOGO */}
                <div className="flex flex-col items-center justify-between gap-8">
                    <Image
                        src={logo}
                        alt="Actualiza tu carro logo."
                        width={245}
                        style={{ aspectRatio: '664 / 381' }}
                    />
                    <div className='w-full'>
                        <span>Siguenos</span>
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
                {/* CONTACT & PAYMENT METHODS */}
                <div className="flex flex-col items-end justify-between">
                    <div className="flex items-end gap-[16px]">
                        <div className="flex items-center gap-4 w-fit p-4 bg-white text-black">
                            <Whatsapp />
                            <span>+54 1234567891</span>
                        </div>
                        <div className="flex items-center gap-4 w-fit p-4 bg-white text-black">
                            <Mail />
                            <span>customersupport@emails.com</span>
                        </div>
                    </div>
                    <Image
                        src={paymentMethods}
                        alt="Métodos de pago: Mercado pago."
                        width={498}
                        style={{ aspectRatio: "257 / 73" }}
                    />
                </div>
            </div>
            <p className="text-xs text-white text-center pb-4 pt-4 max-w-[1920px]">
                ©Copyrigth 2024. Todos los derechos reservados - Desarrollado por: <strong>Work Team</strong>
            </p>
        </footer>
    );
};

export default Footer;