// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { motion } from "framer-motion";

// const navItems = [
//     {
//         title: "Home",
//         href: "/",
//     },
//     {
//         title: "About",
//         href: "/about",
//     },
//     {
//         title: "Skills",
//         href: "/skills",
//     },
//     {
//         title: "Projects",
//         href: "/projects",
//     },
//     {
//         title: "Services",
//         href: "/services",
//     },
// ];

// export default function Navbar() {
//     const pathname = usePathname();

//     return (
//         <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-xl">
//             <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

//                 <Link
//                     href="/"
//                     className="text-2xl font-bold tracking-wide text-white"
//                 >
//                     Aniket
//                 </Link>

//                 <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 p-2 backdrop-blur-xl">

//                     {navItems.map((item) => {
//                         const active = pathname === item.href;

//                         return (
//                             <Link
//                                 key={item.href}
//                                 href={item.href}
//                                 className="relative overflow-hidden rounded-full px-5 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
//                             >
//                                 {active && (
//                                     <motion.div
//                                         layoutId="navbar"
//                                         className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
//                                         transition={{
//                                             type: "spring",
//                                             stiffness: 300,
//                                             damping: 30,
//                                         }}
//                                     />
//                                 )}

//                                 <span className="relative z-10">
//                                     {item.title}
//                                 </span>
//                             </Link>
//                         );
//                     })}
//                 </div>
//             </div>
//         </nav>
//     );
// }


"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { useState } from "react";

const navItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Skills", href: "/skills" },
    { title: "Projects", href: "/projects" },
    { title: "Services", href: "/services" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl">
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">

                    {/* Logo */}

                    <Link
                        href="/"
                        className="text-2xl font-bold tracking-wide text-white"
                    >
                        Aniket
                    </Link>

                    {/* Desktop */}

                    <div className="hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-2 backdrop-blur-xl">

                        {navItems.map((item) => {

                            const active = pathname === item.href;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="relative overflow-hidden rounded-full px-5 py-2 text-sm font-medium text-gray-300 transition hover:text-white"
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

                    {/* Mobile Button */}

                    <button
                        onClick={() => setOpen(!open)}
                        className="flex md:hidden items-center justify-center rounded-xl border border-white/10 bg-white/5 p-3 text-white"
                    >
                        {open ? (
                            <HiOutlineX size={22} />
                        ) : (
                            <HiOutlineMenuAlt3 size={22} />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}

            <AnimatePresence>

                {open && (

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -30,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            y: -30,
                        }}
                        transition={{
                            duration: .3,
                        }}
                        className="
            fixed
            top-20
            left-4
            right-4
            z-40
            rounded-3xl
            border
            border-white/10
            bg-black/70
            p-4
            backdrop-blur-2xl
            md:hidden
          "
                    >
                        <div className="flex flex-col gap-2">

                            {navItems.map((item) => {

                                const active = pathname === item.href;

                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className={`rounded-2xl px-5 py-4 text-base transition ${active
                                            ? "bg-gradient-to-r from-cyan-500 to-violet-500 text-white"
                                            : "text-gray-300 hover:bg-white/5"
                                            }`}
                                    >
                                        {item.title}
                                    </Link>
                                );
                            })}
                        </div>
                    </motion.div>
                )}

            </AnimatePresence>
        </>
    );
}