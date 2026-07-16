"use client"
import { motion } from "framer-motion"
import { useEffect, useState } from "react";

export default function Footer() {
    const [time, setTime] = useState(null);

    useEffect(() => {
        const update = () => setTime(new Date());
        update();

        const interval = setInterval(update, 1000);
        return () => clearInterval(interval);
    }, []);

    if (!time) return null; // avoid hydration mismatch on first render

    const localTime = time.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
    });

    const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // const istTime = time.toLocaleTimeString("en-US", {
    //     timeZone: "Asia/Kolkata",
    //     hour: "2-digit",
    //     minute: "2-digit",
    //     second: "2-digit",
    //     hour12: true,
    // });
    return (
        <footer className="absolute bottom-0 left-0 bg-transparent px-20 py-5 w-full">
            <div className="flex justify-between items-center">
                <motion.div
                    className="text-gray-100 text-sm"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    Made with ❤️ by Aniket.
                </motion.div>
                <motion.div
                    className="text-gray-100 text-sm"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    Local time : {localTime} | 🌍 {localTimeZone}
                </motion.div>
            </div>
        </footer>
    )
}