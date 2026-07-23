"use client"

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function RingCursor() {
    const [mouse, setMouse] = useState({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        const move = (e) => {
            setMouse({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", move);

        return () =>
            window.removeEventListener("mousemove", move);
    }, []);

    return (
        <motion.div
            animate={{
                x: mouse.x - 20,
                y: mouse.y - 20,
            }}
            transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
            }}
            className="
            hidden
lg:block
        fixed
        top-0
        left-0
        z-[99999]
        h-10
        w-10
        rounded-full
        border
        border-violet-400
        shadow-[0_0_20px_rgba(139,92,246,0.8)]
        pointer-events-none
      "
        />
    );
}