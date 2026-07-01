"use client"

import Link from "next/link";
import { useRouter } from "next/navigation"

const Navbar = () => {
    const router = useRouter();

    return (
        <nav className="py-5">
            <div className="grid grid-cols-2 text-white items-center">
                <div className="text-center font-bold text-lg" onClick={() => {
                    router.push("/")
                }}>Aniket</div>
                <div className="flex gap-5 items-center justify-center">
                    <div><Link href="/">Home</Link></div>
                    <div><Link href="#about">About Me</Link></div>
                    <div><Link href="#skills">Skills</Link></div>
                    <div><Link href="#projects">Projects</Link></div>
                    <div><Link href="#services">Services</Link></div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;