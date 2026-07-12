"use client"

import { motion } from "framer-motion";
import "./services.css";

const orbit1 = [
    { icon: "⚛", x: -140, y: -40, delay: 0 },
    { icon: "▲", x: 120, y: -70, delay: .3 },
    { icon: "🟢", x: 150, y: 80, delay: .6 },
    { icon: "🍃", x: -130, y: 90, delay: .9 },
];

const orbit2 = [
    { icon: "☁", x: 0, y: -180, delay: .2 },
    { icon: "💻", x: 180, y: 0, delay: .7 },
    { icon: "🚀", x: 0, y: 180, delay: .4 },
    { icon: "⚡", x: -180, y: 0, delay: 1 },
];

export default function FloatingIllustration({
    accent = "#22d3ee",
}) {
    return (
        <div
            className="floating-illustration"
            style={{
                "--accent": accent,
            }}
        >
            {/* Rotating Rings */}

            <motion.div
                className="orbit orbit-one"
                animate={{
                    rotate: 360,
                }}
                transition={{
                    repeat: Infinity,
                    duration: 25,
                    ease: "linear",
                }}
            />

            <motion.div
                className="orbit orbit-two"
                animate={{
                    rotate: -360,
                }}
                transition={{
                    repeat: Infinity,
                    duration: 35,
                    ease: "linear",
                }}
            />

            <motion.div
                className="orbit orbit-three"
                animate={{
                    rotate: 360,
                }}
                transition={{
                    repeat: Infinity,
                    duration: 45,
                    ease: "linear",
                }}
            />

            {/* Center */}

            <motion.div
                className="floating-core"
                animate={{
                    scale: [1, 1.08, 1],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 3,
                }}
            >
                <div className="core-inner" />
            </motion.div>

            {/* Orbit 1 */}

            {orbit1.map((item) => (
                <motion.div
                    key={item.icon}
                    className="floating-tech"
                    style={{
                        left: `calc(50% + ${item.x}px)`,
                        top: `calc(50% + ${item.y}px)`,
                    }}
                    animate={{
                        y: [0, -12, 0],
                        rotate: [0, 8, -8, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 4,
                        delay: item.delay,
                    }}
                >
                    {item.icon}
                </motion.div>
            ))}

            {/* Orbit 2 */}

            {orbit2.map((item) => (
                <motion.div
                    key={item.icon}
                    className="floating-tech secondary"
                    style={{
                        left: `calc(50% + ${item.x}px)`,
                        top: `calc(50% + ${item.y}px)`,
                    }}
                    animate={{
                        y: [0, 14, 0],
                        x: [0, 6, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 5,
                        delay: item.delay,
                    }}
                >
                    {item.icon}
                </motion.div>
            ))}

            {/* Glow */}

            <div className="floating-glow" />
        </div>
    );
}