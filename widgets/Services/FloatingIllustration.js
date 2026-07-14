// "use client"

// import { motion } from "framer-motion";
// import "./services.css";

// const orbit1 = [
//     { icon: "⚛", x: -140, y: -40, delay: 0 },
//     { icon: "▲", x: 120, y: -70, delay: .3 },
//     { icon: "🟢", x: 150, y: 80, delay: .6 },
//     { icon: "🍃", x: -130, y: 90, delay: .9 },
// ];

// const orbit2 = [
//     { icon: "☁", x: 0, y: -180, delay: .2 },
//     { icon: "💻", x: 180, y: 0, delay: .7 },
//     { icon: "🚀", x: 0, y: 180, delay: .4 },
//     { icon: "⚡", x: -180, y: 0, delay: 1 },
// ];

// export default function FloatingIllustration({
//     accent = "#22d3ee",
// }) {
//     return (
//         <div
//             className="floating-illustration"
//             style={{
//                 "--accent": accent,
//             }}
//         >
//             {/* Rotating Rings */}

//             <motion.div
//                 className="orbit orbit-one"
//                 animate={{
//                     rotate: 360,
//                 }}
//                 transition={{
//                     repeat: Infinity,
//                     duration: 25,
//                     ease: "linear",
//                 }}
//             />

//             <motion.div
//                 className="orbit orbit-two"
//                 animate={{
//                     rotate: -360,
//                 }}
//                 transition={{
//                     repeat: Infinity,
//                     duration: 35,
//                     ease: "linear",
//                 }}
//             />

//             <motion.div
//                 className="orbit orbit-three"
//                 animate={{
//                     rotate: 360,
//                 }}
//                 transition={{
//                     repeat: Infinity,
//                     duration: 45,
//                     ease: "linear",
//                 }}
//             />

//             {/* Center */}

//             <motion.div
//                 className="floating-core"
//                 animate={{
//                     scale: [1, 1.08, 1],
//                 }}
//                 transition={{
//                     repeat: Infinity,
//                     duration: 3,
//                 }}
//             >
//                 <div className="core-inner" />
//             </motion.div>

//             {/* Orbit 1 */}

//             {orbit1.map((item) => (
//                 <motion.div
//                     key={item.icon}
//                     className="floating-tech"
//                     style={{
//                         left: `calc(50% + ${item.x}px)`,
//                         top: `calc(50% + ${item.y}px)`,
//                     }}
//                     animate={{
//                         y: [0, -12, 0],
//                         rotate: [0, 8, -8, 0],
//                     }}
//                     transition={{
//                         repeat: Infinity,
//                         duration: 4,
//                         delay: item.delay,
//                     }}
//                 >
//                     {item.icon}
//                 </motion.div>
//             ))}

//             {/* Orbit 2 */}

//             {orbit2.map((item) => (
//                 <motion.div
//                     key={item.icon}
//                     className="floating-tech secondary"
//                     style={{
//                         left: `calc(50% + ${item.x}px)`,
//                         top: `calc(50% + ${item.y}px)`,
//                     }}
//                     animate={{
//                         y: [0, 14, 0],
//                         x: [0, 6, 0],
//                     }}
//                     transition={{
//                         repeat: Infinity,
//                         duration: 5,
//                         delay: item.delay,
//                     }}
//                 >
//                     {item.icon}
//                 </motion.div>
//             ))}

//             {/* Glow */}

//             <div className="floating-glow" />
//         </div>
//     );
// }



"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import "./services1.css";

export default function FloatingIllustration({
    accent = "#22d3ee",
    technologies = [],
}) {
    const [mouse, setMouse] = useState({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        const move = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 30;
            const y = (e.clientY / window.innerHeight - 0.5) * 30;

            setMouse({ x, y });
        };

        window.addEventListener("mousemove", move);

        return () => window.removeEventListener("mousemove", move);
    }, []);

    const radius = [120, 180, 250];

    return (
        <motion.div
            className="floating-wrapper"
            animate={{
                x: mouse.x,
                y: mouse.y,
            }}
            transition={{
                type: "spring",
                stiffness: 40,
                damping: 20,
            }}
        >
            {/* Glow */}

            <div
                className="floating-glow"
                style={{
                    background: accent,
                }}
            />

            {/* Rotating Rings */}

            {radius.map((r, i) => (
                <motion.div
                    key={r}
                    className="orbit-ring"
                    style={{
                        width: r * 2,
                        height: r * 2,
                    }}
                    animate={{
                        rotate: i % 2 === 0 ? 360 : -360,
                    }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 18 + i * 8,
                    }}
                />
            ))}

            {/* Center */}

            <motion.div
                className="center-core"
                animate={{
                    scale: [1, 1.08, 1],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 3,
                }}
                style={{
                    background: `linear-gradient(135deg, ${accent}, #8b5cf6)`,
                }}
            />

            {/* Orbit Icons */}

            {technologies.map((tech, index) => {
                const Icon = tech.icon;

                const angle =
                    (360 / technologies.length) * index;

                const orbit =
                    radius[index % radius.length];

                return (
                    <motion.div
                        key={tech.name}
                        className="orbit-item"
                        style={{
                            transform: `
              rotate(${angle}deg)
              translate(${orbit}px)
              rotate(-${angle}deg)
            `,
                        }}
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 25 + index * 3,
                        }}
                    >
                        <motion.div
                            whileHover={{
                                scale: 1.15,
                            }}
                            className="tech-card"
                        >
                            <Icon
                                size={32}
                                color={accent}
                            />
                        </motion.div>
                    </motion.div>
                );
            })}

            {/* Floating Particles */}

            {Array.from({ length: 18 }).map((_, i) => (
                <motion.span
                    key={i}
                    className="floating-particle"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [.2, 1, .2],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 3 + Math.random() * 4,
                        delay: Math.random() * 3,
                    }}
                />
            ))}
        </motion.div>
    );
}