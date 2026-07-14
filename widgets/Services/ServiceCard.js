"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 60,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
};

export default function ServiceCard({ service, index }) {

    console.log("services", service)
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);

    const shadowX = useTransform(rotateY, [-10, 10], [-20, 20]);
    const shadowY = useTransform(rotateX, [-10, 10], [20, -20]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateYValue = ((x / rect.width) - 0.5) * 18;
        const rotateXValue = -((y / rect.height) - 0.5) * 18;

        rotateX.set(rotateXValue);
        rotateY.set(rotateYValue);
    };

    const reset = () => {
        rotateX.set(0);
        rotateY.set(0);
    };

    // const Icon = service.icon;

    return (
        <motion.article
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{
                y: -12,
                scale: 1.02,
            }}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={reset}
            className="service-card"
        >
            {/* Glow */}

            <motion.div
                className="service-card-glow"
                style={{
                    background: `radial-gradient(circle,
          ${service.color}40 0%,
          transparent 70%)`,
                    x: shadowX,
                    y: shadowY,
                }}
            />

            {/* Number */}

            <span
                className="service-number"
                style={{
                    color: service.color,
                }}
            >
                0{index + 1}
            </span>

            {/* Icon */}

            {/* <motion.div
                whileHover={{
                    rotate: 360,
                    scale: 1.15,
                }}
                transition={{
                    duration: 0.7,
                }}
                className="service-icon"
                style={{
                    background: `linear-gradient(
          135deg,
          ${service.gradient[0]},
          ${service.gradient[1]}
          )`,
                }}
            >
                <Icon />
            </motion.div> */}

            {/* Title */}

            <h3 className="service-title">
                {service.title}
            </h3>

            {/* Description */}

            <p className="service-description">
                {service.description}
            </p>

            {/* Technologies */}

            <div className="service-tech-list">
                {service.technologies.map((tech) => (
                    <motion.span
                        whileHover={{
                            scale: 1.08,
                        }}
                        key={tech.name}
                        className="tech-badge"
                    >
                        {/* {tech} */}

                        <Image
                            src={`/icons/${tech.icon}.svg`}
                            alt={tech.name}
                            width={32}
                            height={32}
                        />
                    </motion.span>
                ))}
            </div>

            {/* Features */}

            <div className="service-feature-list">
                {service.features.map((feature) => (
                    <div
                        className="service-feature"
                        key={feature}
                    >
                        <FiCheck
                            color={service.color}
                        />

                        <span>{feature}</span>
                    </div>
                ))}
            </div>

            {/* Footer */}

            <motion.div
                whileHover={{
                    x: 6,
                }}
                className="service-footer"
            >
                <span>Learn More</span>

                <FiArrowUpRight />
            </motion.div>
        </motion.article>
    );
}