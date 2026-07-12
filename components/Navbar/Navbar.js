"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Skills",
        href: "/skills",
    },
    {
        title: "Projects",
        href: "/projects",
    },
    {
        title: "Services",
        href: "/services",
    },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-xl">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

                <Link
                    href="/"
                    className="text-2xl font-bold tracking-wide text-white"
                >
                    Aniket
                </Link>

                <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 p-2 backdrop-blur-xl">

                    {navItems.map((item) => {
                        const active = pathname === item.href;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="relative overflow-hidden rounded-full px-5 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
                            >
                                {active && (
                                    <motion.div
                                        layoutId="navbar"
                                        className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 30,
                                        }}
                                    />
                                )}

                                <span className="relative z-10">
                                    {item.title}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}