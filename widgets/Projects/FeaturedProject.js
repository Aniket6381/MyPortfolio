"use client"

import { motion, AnimatePresence } from "framer-motion";
import {
    FiExternalLink,
    FiGithub,
    FiCheck,
} from "react-icons/fi";

import TechBadge from "./TechBadge";
import "./projects.css";

export default function FeaturedProject({ project }) {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={project.id}
                className="featured-project"
                initial={{
                    opacity: 0,
                    y: 40,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                exit={{
                    opacity: 0,
                    y: -40,
                }}
                transition={{
                    duration: 0.5,
                }}
            >
                {/* IMAGE */}

                <motion.div
                    className="project-image-wrapper"
                    whileHover={{
                        scale: 1.02,
                    }}
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="project-image"
                    />

                    <div className="project-overlay" />

                    <div className="project-category">
                        {project.category}
                    </div>
                </motion.div>

                {/* CONTENT */}

                <div className="project-content">
                    <motion.h2
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: 0.2,
                        }}
                    >
                        {project.title}
                    </motion.h2>

                    <motion.p
                        className="project-description"
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            delay: 0.3,
                        }}
                    >
                        {project.description}
                    </motion.p>

                    {/* META */}

                    <div className="project-meta">

                        <span>
                            <strong>Role</strong>

                            {project.role}
                        </span>

                        <span>
                            <strong>Year</strong>

                            {project.year}
                        </span>

                        <span>
                            <strong>Duration</strong>

                            {project.duration}
                        </span>

                    </div>

                    {/* TECHNOLOGIES */}

                    <div className="tech-badges">

                        {project.technologies.map((tech) => (
                            <TechBadge
                                key={tech.name}
                                name={tech.name}
                                icon={tech.icon}
                                color={project.color}
                            />
                        ))}

                    </div>

                    {/* FEATURES */}

                    <div className="project-features">

                        {project.features.map((feature) => (
                            <div
                                key={feature}
                                className="feature-item"
                            >
                                <FiCheck />

                                <span>{feature}</span>
                            </div>
                        ))}

                    </div>

                    {/* BUTTONS */}

                    <div className="project-buttons">

                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noreferrer"
                                className="project-btn primary"
                            >
                                Live Demo

                                <FiExternalLink />
                            </a>
                        )}

                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="project-btn secondary"
                            >
                                GitHub

                                <FiGithub />
                            </a>
                        )}

                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}