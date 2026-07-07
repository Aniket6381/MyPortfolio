"use client"

import { motion } from "framer-motion";
import SkillBadge from "./SkillBadge";
import "./skills.css";

export default function SkillCategory({
    title,
    description,
    skills,
    color,
    index,
}) {
    return (
        <motion.div
            className="skill-category"
            style={{
                "--accent": color,
            }}
            initial={{
                opacity: 0,
                y: 50,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
            }}
            viewport={{
                once: true,
                amount: 0.2,
            }}
        >
            {/* Animated Border */}

            <div className="category-border"></div>

            {/* Card */}

            <div className="category-card">

                {/* Decorative Glow */}

                <div className="category-glow"></div>

                {/* Header */}

                <div className="category-header">

                    <div
                        className="category-line"
                        style={{
                            background: color,
                        }}
                    />

                    <div>

                        <h3 className="category-title">
                            {title}
                        </h3>

                        <p className="category-description">
                            {description}
                        </p>

                    </div>

                </div>

                {/* Divider */}

                <div className="category-divider" />

                {/* Skills */}

                <div className="category-grid">

                    {/* {skills.map((skill) => (
                        <SkillBadge
                            key={skill.name}
                            name={skill.name}
                            icon={skill.icon}
                            color={color}
                        />
                    ))} */}

                </div>

            </div>
        </motion.div>
    );
}