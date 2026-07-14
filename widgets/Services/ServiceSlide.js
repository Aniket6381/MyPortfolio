// "use client"

// import { motion } from "framer-motion";
// import { FiArrowUpRight, FiCheck } from "react-icons/fi";

// import FloatingIllustration from "./FloatingIllustration";
// import "./services.css";
// import Image from "next/image";

// export default function ServiceSlide({ service, index }) {
//     return (
//         <section className="service-slide">
//             {/* Left Side */}

//             <motion.div
//                 className="service-content"
//                 initial={{ opacity: 0, x: -80 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ duration: 0.8 }}
//             >
//                 <span
//                     className="service-number"
//                     style={{
//                         color: service.color,
//                     }}
//                 >
//                     {service.number}
//                 </span>

//                 <motion.h2
//                     className="service-title"
//                     initial={{ opacity: 0, y: 25 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{
//                         delay: 0.2,
//                         duration: 0.7,
//                     }}
//                 >
//                     {service.title}
//                 </motion.h2>

//                 <motion.h3
//                     className="service-subtitle"
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{
//                         delay: 0.3,
//                     }}
//                 >
//                     {service.subtitle}
//                 </motion.h3>

//                 <motion.p
//                     className="service-description"
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{
//                         delay: 0.4,
//                     }}
//                 >
//                     {service.description}
//                 </motion.p>

//                 {/* Technologies */}

//                 <div className="service-technologies">
//                     {service.technologies.map((tech) => {

//                         return (
//                             <motion.div
//                                 key={tech.name}
//                                 className="technology-pill"
//                                 whileHover={{
//                                     y: -5,
//                                     scale: 1.05,
//                                 }}
//                             >
//                                 <Image
//                                     src={`/icons/${tech.icon}.svg`}
//                                     alt={tech.name}
//                                     width={32}
//                                     height={32}
//                                 />

//                                 <span>{tech.name}</span>
//                             </motion.div>
//                         );
//                     })}
//                 </div>

//                 {/* Features */}

//                 <div className="service-features">
//                     {service.bullets.map((item) => (
//                         <motion.div
//                             key={item}
//                             className="service-feature"
//                             initial={{
//                                 opacity: 0,
//                                 x: -20,
//                             }}
//                             whileInView={{
//                                 opacity: 1,
//                                 x: 0,
//                             }}
//                             transition={{
//                                 duration: 0.35,
//                             }}
//                         >
//                             <FiCheck
//                                 color={service.color}
//                             />

//                             <span>{item}</span>
//                         </motion.div>
//                     ))}
//                 </div>

//                 {/* CTA */}

//                 <motion.button
//                     className="service-button"
//                     whileHover={{
//                         scale: 1.05,
//                     }}
//                     whileTap={{
//                         scale: .96,
//                     }}
//                     style={{
//                         "--accent": service.color,
//                     }}
//                 >
//                     Let's Build Together

//                     <FiArrowUpRight />
//                 </motion.button>
//             </motion.div>

//             {/* Right Side */}

//             <motion.div
//                 className="service-visual"
//                 initial={{
//                     opacity: 0,
//                     scale: .85,
//                 }}
//                 whileInView={{
//                     opacity: 1,
//                     scale: 1,
//                 }}
//                 transition={{
//                     duration: .8,
//                 }}
//             >
//                 <FloatingIllustration
//                     accent={service.color}
//                 />
//             </motion.div>
//         </section>
//     );
// }

"use client";

import { motion } from "framer-motion";
import {
    FiArrowUpRight,
    FiCheckCircle,
} from "react-icons/fi";

import FloatingIllustration from "./FloatingIllustration";

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.2,
        },
    },
};

const item = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
    },
};

export default function ServiceSlide({
    service,
    active,
}) {
    return (
        <section className="service-slide">

            {/* LEFT */}

            <motion.div
                className="service-left"
                variants={container}
                initial="hidden"
                animate={active ? "visible" : "hidden"}
            >
                <motion.span
                    variants={item}
                    className="service-number"
                    style={{
                        color: service.color,
                    }}
                >
                    {service.number}
                </motion.span>

                <motion.h2
                    variants={item}
                    className="service-title"
                >
                    {service.title}
                </motion.h2>

                <motion.h3
                    variants={item}
                    className="service-subtitle"
                >
                    {service.subtitle}
                </motion.h3>

                <motion.p
                    variants={item}
                    className="service-description"
                >
                    {service.description}
                </motion.p>

                {/* Technologies */}

                <motion.div
                    variants={container}
                    className="service-tech"
                >
                    {service.technologies.map((tech) => {
                        const Icon = tech.icon;

                        return (
                            <motion.div
                                key={tech.name}
                                variants={item}
                                whileHover={{
                                    y: -6,
                                    scale: 1.05,
                                }}
                                className="tech-pill"
                            >
                                <Icon
                                    color={service.color}
                                />

                                <span>{tech.name}</span>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Features */}

                <motion.div
                    variants={container}
                    className="service-features"
                >
                    {service.bullets.map((bullet) => (
                        <motion.div
                            key={bullet}
                            variants={item}
                            className="feature"
                        >
                            <FiCheckCircle
                                color={service.color}
                            />

                            <span>{bullet}</span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA */}

                <motion.button
                    variants={item}
                    whileHover={{
                        scale: 1.05,
                    }}
                    whileTap={{
                        scale: .96,
                    }}
                    className="service-btn"
                    style={{
                        background: `linear-gradient(135deg,
            ${service.gradient[0]},
            ${service.gradient[1]})`,
                    }}
                >
                    Let's Build Together

                    <FiArrowUpRight />
                </motion.button>
            </motion.div>

            {/* RIGHT */}

            <motion.div
                className="service-right"
                initial={{
                    opacity: 0,
                    scale: .8,
                }}
                animate={{
                    opacity: active ? 1 : .35,
                    scale: active ? 1 : .92,
                }}
                transition={{
                    duration: .6,
                }}
            >
                <FloatingIllustration
                    accent={service.color}
                    technologies={service.technologies}
                />
            </motion.div>

        </section>
    );
}