// "use client"

// import {
//     motion,
//     useScroll,
//     useTransform,
//     useSpring,
// } from "framer-motion";
// import { useRef } from "react";

// import ServiceSlide from "./ServiceSlide";
// import {
//     services,
//     sectionContent,
// } from "./servicesData";

// import "./services.css";

// export default function Services() {
//     const targetRef = useRef(null);

//     const { scrollYProgress } = useScroll({
//         target: targetRef,
//         offset: ["start start", "end end"],
//     });

//     /**
//      * Horizontal movement
//      *
//      * 5 slides
//      * translate from 0% -> -400%
//      */

//     const x = useTransform(
//         scrollYProgress,
//         [0, 1],
//         ["0%", "-400%"]
//     );

//     const smoothX = useSpring(x, {
//         stiffness: 90,
//         damping: 25,
//         mass: .6,
//     });

//     return (
//         <section
//             id="services"
//             className="services-section"
//             ref={targetRef}
//         >
//             {/* Background */}

//             <div className="services-background">

//                 <div className="services-gradient gradient1" />

//                 <div className="services-gradient gradient2" />

//                 <div className="services-grid" />

//             </div>

//             {/* Heading */}

//             <div className="services-header">

//                 <span className="services-tag">
//                     {sectionContent.badge}
//                 </span>

//                 <h2>
//                     {sectionContent.title}
//                 </h2>

//                 <p>
//                     {sectionContent.subtitle}
//                 </p>

//             </div>

//             {/* Sticky */}

//             <div className="services-sticky">

//                 <motion.div
//                     className="services-track"
//                     style={{
//                         x: smoothX,
//                     }}
//                 >
//                     {services.map((service, index) => (
//                         <ServiceSlide
//                             key={service.id}
//                             service={service}
//                             index={index}
//                         />
//                     ))}
//                 </motion.div>

//             </div>

//             {/* Progress */}

//             <motion.div
//                 className="scroll-progress"
//                 style={{
//                     scaleX: scrollYProgress,
//                 }}
//             />
//         </section>
//     );
// }



"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { services, sectionContent } from "./servicesData";
import ServiceSlide from "./ServiceSlide";
import useHorizontalScroll from "./hooks/useHorizontalScroll";
import "./services1.css";

export default function Services() {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);

    const [activeSlide, setActiveSlide] = useState(0);

    useHorizontalScroll(
        sectionRef,
        trackRef,
        services.length
    );

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();

            const totalWidth =
                window.innerWidth * (services.length - 1);

            const progress = Math.min(
                Math.max(-rect.top / totalWidth, 0),
                1
            );

            const current = Math.round(
                progress * (services.length - 1)
            );

            setActiveSlide(current);
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () =>
            window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
            ref={sectionRef}
            id="services"
            className="services-section"
        >
            {/* ==========================
          Animated Background
      ========================== */}

            <motion.div
                className="services-bg"
                animate={{
                    background: `radial-gradient(circle at center,
          ${services[activeSlide].gradient[0]}20 0%,
          transparent 70%)`,
                }}
                transition={{
                    duration: 0.8,
                }}
            />

            <div className="grid-overlay" />

            {/* ==========================
            Heading
      ========================== */}

            <motion.div
                className="services-header"
                initial={{
                    opacity: 0,
                    y: 40,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: true,
                }}
            >
                <span className="services-tag">
                    {sectionContent.badge}
                </span>

                <h2>
                    {sectionContent.title}
                </h2>

                <p>
                    {sectionContent.subtitle}
                </p>
            </motion.div>

            {/* ==========================
          Progress
      ========================== */}

            <div className="services-progress">

                {services.map((service, index) => (

                    <div
                        key={service.id}
                        className={`progress-item ${activeSlide === index
                            ? "active"
                            : ""
                            }`}
                    >
                        <span>
                            {service.number}
                        </span>

                        <div className="progress-dot" />

                    </div>

                ))}

            </div>

            {/* ==========================
          Horizontal Track
      ========================== */}

            <div className="services-wrapper">

                <div
                    ref={trackRef}
                    className="services-track"
                >
                    {services.map((service, index) => (
                        <ServiceSlide
                            key={service.id}
                            service={service}
                            index={index}
                            active={activeSlide === index}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}