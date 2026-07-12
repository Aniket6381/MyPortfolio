"use client"

import {
    motion,
    useScroll,
    useTransform,
    useSpring,
} from "framer-motion";
import { useRef } from "react";

import ServiceSlide from "./ServiceSlide";
import {
    services,
    sectionContent,
} from "./servicesData";

import "./services.css";

export default function Services() {
    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });

    /**
     * Horizontal movement
     *
     * 5 slides
     * translate from 0% -> -400%
     */

    const x = useTransform(
        scrollYProgress,
        [0, 1],
        ["0%", "-400%"]
    );

    const smoothX = useSpring(x, {
        stiffness: 90,
        damping: 25,
        mass: .6,
    });

    return (
        <section
            id="services"
            className="services-section"
            ref={targetRef}
        >
            {/* Background */}

            <div className="services-background">

                <div className="services-gradient gradient1" />

                <div className="services-gradient gradient2" />

                <div className="services-grid" />

            </div>

            {/* Heading */}

            <div className="services-header">

                <span className="services-tag">
                    {sectionContent.badge}
                </span>

                <h2>
                    {sectionContent.title}
                </h2>

                <p>
                    {sectionContent.subtitle}
                </p>

            </div>

            {/* Sticky */}

            <div className="services-sticky">

                <motion.div
                    className="services-track"
                    style={{
                        x: smoothX,
                    }}
                >
                    {services.map((service, index) => (
                        <ServiceSlide
                            key={service.id}
                            service={service}
                            index={index}
                        />
                    ))}
                </motion.div>

            </div>

            {/* Progress */}

            <motion.div
                className="scroll-progress"
                style={{
                    scaleX: scrollYProgress,
                }}
            />
        </section>
    );
}