"use client"

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./about.css";

export default function StatsCard({
    number,
    label,
    index,
}) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.4,
    });

    // Extract numeric value
    const numericValue = parseFloat(number.replace("+", ""));

    // Check if number contains "+"
    const hasPlus = number.includes("+");

    return (
        <motion.div
            ref={ref}
            className="stats-card"
            initial={{
                opacity: 0,
                y: 40,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{ once: true }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
            }}
        >
            <div className="stats-glow"></div>

            <div className="stats-content">

                <h3 className="stats-number">

                    {inView ? (
                        <>
                            <CountUp
                                end={numericValue}
                                duration={2}
                                decimals={number.includes(".") ? 1 : 0}
                            />
                            {hasPlus && "+"}
                        </>
                    ) : (
                        "0"
                    )}

                </h3>

                <p className="stats-label">
                    {label}
                </p>

            </div>
        </motion.div>
    );
}