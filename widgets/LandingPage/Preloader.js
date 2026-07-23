"use client"

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const greetings = [
    "Hello",
    "Ciao",
    "Hola",
    "नमस्ते",
    "नमस्कार",
];

export default function Preloader({ onFinish }) {
    const [index, setIndex] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => {
                if (prev >= greetings.length - 1) {
                    clearInterval(interval);

                    setTimeout(() => {
                        setIsExiting(true);

                        setTimeout(() => {
                            onFinish?.();
                        }, 1200);
                    }, 500);

                    return prev;
                }

                return prev + 1;
            });
        }, 700);

        return () => clearInterval(interval);
    }, [onFinish]);

    return (
        <motion.div
            initial={{ y: 0 }}
            animate={isExiting ? { y: "-100%" } : { y: 0 }}
            transition={{
                duration: 1.2,
                ease: [0.76, 0, 0.24, 1],
            }}
            className="
        fixed
        inset-0
        z-[9999]
        bg-black
        flex
        items-center
        justify-center
        overflow-hidden
      "
        >
            <div className="absolute left-1/2 -translate-x-32 lg:-translate-x-40 flex items-center gap-4">
                <span
                    className="
      h-3
      w-3
      rounded-full
      bg-violet-500
      animate-pulse
    "
                />
            </div>
            <AnimatePresence mode="wait">
                <motion.h1
                    key={index}
                    initial={{
                        opacity: 0,
                        y: 50,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    exit={{
                        opacity: 0,
                        y: -50,
                    }}
                    transition={{
                        duration: 0.35,
                    }}
                    className="
            text-white
           text-4xl
sm:text-5xl
md:text-6xl
lg:text-7xl
            font-bold
            tracking-tight
          "
                >
                    {greetings[index]}
                </motion.h1>
            </AnimatePresence>
        </motion.div>
    );
}