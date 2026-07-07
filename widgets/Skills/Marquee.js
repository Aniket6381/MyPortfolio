// "use client"

// import { motion } from "framer-motion";
// import { marqueeRows } from "./SkillsData"

// const directions = ["left", "right", "left"];

// function MarqueeRow({ items, reverse = false }) {
//     // Duplicate items for seamless infinite loop
//     const data = [...items, ...items];

//     return (
//         <div className="relative overflow-hidden py-3 group">
//             {/* Left Gradient */}
//             <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-[#030014] to-transparent" />

//             {/* Right Gradient */}
//             <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-[#030014] to-transparent" />

//             <motion.div
//                 className="flex w-max gap-5"
//                 animate={{
//                     x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
//                 }}
//                 transition={{
//                     repeat: Infinity,
//                     duration: 22,
//                     ease: "linear",
//                 }}
//                 whileHover={{
//                     animationPlayState: "paused",
//                 }}
//             >
//                 {data.map((item, index) => (
//                     <motion.div
//                         key={`${item}-${index}`}
//                         whileHover={{
//                             scale: 1.08,
//                             y: -6,
//                         }}
//                         transition={{
//                             type: "spring",
//                             stiffness: 250,
//                             damping: 18,
//                         }}
//                         className="
//               group/chip
//               relative
//               flex
//               items-center
//               rounded-full
//               border
//               border-white/10
//               bg-white/5
//               backdrop-blur-xl
//               px-6
//               py-3
//               text-sm
//               font-medium
//               text-gray-200
//               overflow-hidden
//               cursor-default
//               shadow-lg
//             "
//                     >
//                         {/* Glow */}
//                         <span
//                             className="
//                 absolute
//                 inset-0
//                 opacity-0
//                 transition-opacity
//                 duration-300
//                 group-hover/chip:opacity-100
//                 bg-gradient-to-r
//                 from-cyan-500/10
//                 via-violet-500/20
//                 to-cyan-500/10
//               "
//                         />

//                         {/* Floating Dot */}
//                         <motion.div
//                             animate={{
//                                 y: [0, -3, 0],
//                             }}
//                             transition={{
//                                 repeat: Infinity,
//                                 duration: 2,
//                                 ease: "easeInOut",
//                             }}
//                             className="mr-3 h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]"
//                         />

//                         <span className="relative z-10 whitespace-nowrap">
//                             {item}
//                         </span>
//                     </motion.div>
//                 ))}
//             </motion.div>
//         </div>
//     );
// }

// export default function Marquee() {
//     return (
//         <section className="relative w-full py-10">
//             <div className="space-y-4">
//                 {marqueeRows.map((row, index) => (
//                     <MarqueeRow
//                         key={index}
//                         items={row}
//                         reverse={directions[index] === "right"}
//                     />
//                 ))}
//             </div>
//         </section>
//     );
// }



// Newly Improved code

"use client"

import { marqueeRows } from "./SkillsData";
import "./skills.css";

function MarqueeRow({ items, reverse = false, speed = 30 }) {
    const repeatedItems = [...items, ...items];

    return (
        <div className="marquee-wrapper">
            <div
                className={`marquee-track ${reverse ? "reverse" : ""}`}
                style={{
                    animationDuration: `${speed}s`,
                }}
            >
                {repeatedItems.map((item, index) => (
                    <div className="skill-pill" key={`${item}-${index}`}>
                        <span className="pill-dot" />
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Marquee() {
    return (
        <section className="mb-24">

            <MarqueeRow
                items={marqueeRows[0]}
                speed={28}
            />

            <MarqueeRow
                items={marqueeRows[1]}
                reverse
                speed={32}
            />

            <MarqueeRow
                items={marqueeRows[2]}
                speed={36}
            />

        </section>
    );
}