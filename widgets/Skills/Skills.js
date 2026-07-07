// "use client"

// import { motion } from "framer-motion";
// // import Marquee from "./Marquee";
// // import SkillCard from "./SkillCard";
// // import { skillCategories } from "./SkillsData";

// export default function Skills() {
//     return (
//         <section
//             id="skills"
//             className="relative overflow-hidden bg-[#030014] py-28"
//         >
//             {/* ========================= */}
//             {/* Background Decorations */}
//             {/* ========================= */}

//             {/* <div className="absolute inset-0"> */}

//             {/* Left Glow */}

//             {/* <div
//                     className="
//             absolute
//             -left-40
//             top-32
//             h-96
//             w-96
//             rounded-full
//             bg-cyan-500/10
//             blur-[120px]
//           "
//                 /> */}

//             {/* Right Glow */}

//             {/* <div
//                     className="
//             absolute
//             right-0
//             bottom-20
//             h-[500px]
//             w-[500px]
//             rounded-full
//             bg-violet-600/10
//             blur-[160px]
//           "
//                 /> */}

//             {/* Center Glow */}

//             {/* <div
//                     className="
//             absolute
//             left-1/2
//             top-1/2
//             h-[400px]
//             w-[400px]
//             -translate-x-1/2
//             -translate-y-1/2
//             rounded-full
//             bg-pink-500/5
//             blur-[150px]
//           "
//                 />

//             </div> */}

//             {/* ========================= */}

//             <div className="relative z-10 mx-auto max-w-7xl px-6">

//                 {/* Heading */}

//                 <motion.div
//                     initial={{
//                         opacity: 0,
//                         y: 40,
//                     }}
//                     whileInView={{
//                         opacity: 1,
//                         y: 0,
//                     }}
//                     viewport={{
//                         once: true,
//                     }}
//                     transition={{
//                         duration: 0.8,
//                     }}
//                     className="text-center"
//                 >

//                     <span
//                         className="
//               inline-block
//               rounded-full
//               border
//               border-cyan-500/30
//               bg-cyan-500/10
//               px-5
//               py-2
//               text-sm
//               text-cyan-300
//             "
//                     >
//                         MY TECH STACK
//                     </span>

//                     <h2
//                         className="
//               mt-6
//               text-4xl
//               font-bold
//               text-white
//               md:text-6xl
//             "
//                     >
//                         Skills &
//                         <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-500 bg-clip-text text-transparent">
//                             {" "}
//                             Technologies
//                         </span>
//                     </h2>

//                     <p
//                         className="
//               mx-auto
//               mt-6
//               max-w-3xl
//               text-lg
//               leading-8
//               text-gray-400
//             "
//                     >
//                         I build modern web applications using a
//                         combination of frontend, backend, cloud and
//                         developer tools focused on performance,
//                         scalability and exceptional user experiences.
//                     </p>

//                 </motion.div>

//                 {/* ========================= */}
//                 {/* Marquee */}
//                 {/* ========================= */}

//                 {/* <div className="mt-20">
//                     <Marquee />
//                 </div> */}

//                 {/* ========================= */}
//                 {/* Cards */}
//                 {/* ========================= */}

//                 {/* <div
//                     className="
//             mt-24
//             grid
//             gap-10
//             lg:grid-cols-2
//           "
//                 >
//                     {skillCategories.map((category, index) => (
//                         <SkillCard
//                             key={category.title}
//                             index={index}
//                             title={category.title}
//                             subtitle={category.subtitle}
//                             skills={category.skills}
//                             color={category.color}
//                         />
//                     ))}
//                 </div> */}
//             </div>
//         </section>
//     );
// }

"use client"

import { motion } from "framer-motion";
import Marquee from "./Marquee";
import SkillCategory from "./SkillCategory";
import { skillCategories } from "./SkillsData";
import "./skills.css";

export default function Skills() {
    return (
        <section id="skills" className="skills-section">
            {/* Background Effects */}

            <div className="skills-bg">
                <div className="skills-gradient gradient-one"></div>
                <div className="skills-gradient gradient-two"></div>
                <div className="skills-grid"></div>
            </div>

            <div className="skills-container">
                {/* Heading */}

                <motion.div
                    className="skills-header"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <span className="skills-tag">
                        MY TECH STACK
                    </span>

                    <h2 className="skills-title">
                        Building
                        <span> Modern Experiences</span>
                    </h2>

                    <p className="skills-subtitle">
                        I enjoy building scalable web applications using modern
                        technologies, writing clean and maintainable code, and
                        creating user experiences that are fast, responsive, and
                        visually engaging.
                    </p>
                </motion.div>

                {/* Infinite Marquee */}

                <Marquee />

                {/* Categories */}

                <div className="skills-layout">
                    {skillCategories.map((category, index) => (
                        <SkillCategory
                            key={category.title}
                            title={category.title}
                            description={category.description}
                            skills={category.skills}
                            color={category.color}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}