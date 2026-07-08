"use client"

import { motion } from "framer-motion";
import { timeline } from "./aboutData";
import "./about.css";

export default function Timeline() {
    return (
        <section className="timeline-section">
            <div className="timeline-header">
                <span className="timeline-tag">MY JOURNEY</span>

                <h2 className="timeline-title">
                    Experience <span>Timeline</span>
                </h2>

                <p className="timeline-subtitle">
                    My journey as a Full Stack Developer, building scalable applications
                    and continuously learning modern technologies.
                </p>
            </div>

            <div className="timeline-container">
                {timeline.map((item, index) => (
                    <motion.div
                        key={index}
                        className="timeline-item"
                        initial={{
                            opacity: 0,
                            y: 60,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.15,
                        }}
                    >
                        {/* Timeline Dot */}

                        <div className="timeline-dot"></div>

                        {/* Timeline Line */}

                        {index !== timeline.length - 1 && (
                            <div className="timeline-line"></div>
                        )}

                        {/* Card */}

                        <div className="timeline-card">
                            <div className="timeline-year">
                                {item.year}
                            </div>

                            <h3>{item.company}</h3>

                            <h4>{item.role}</h4>

                            <p>{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}