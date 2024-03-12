import Image from "next/image"
import Link from "next/link"
import { SOCIALMEDIA_LINKS, NAV_LINKS } from "@/utils/constants"

export function SocialMedia() {
    return (
        <>
            {
                SOCIALMEDIA_LINKS.map((item) => (
                    <li key={item.name}>
                        <Link
                            href={item.path}
                            rel="noreferrer noopener"
                            target="_blank"
                        >
                            <Image
                                src={item.src}
                                alt={item.name}
                                loading="lazy"
                                width={40}
                                height={40}
                                className="block"
                            />
                        </Link>
                    </li>
                ))
            }
        </>
    )
}

export function NavLinks() {
    return (
        <>
            {
                NAV_LINKS.map((item) => (
                    <li key={item.name}>
                        <Link
                            href={item.path}
                            target="_blank"
                            className="relative inline-block text-center after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-secondary-lm after:scale-x-0 after:transform after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left"
                        >
                            {item.name}
                        </Link>
                    </li>
                ))
            }
        </>
    )
}