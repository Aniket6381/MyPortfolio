"use client"

import { motion } from "framer-motion";
import {
    aboutInfo,
    techStack,
    socialLinks,
} from "./aboutData";
import "./about.css";
import Image from "next/image";

export default function ProfileCard() {
    return (
        <motion.div
            className="profile-card"
            initial={{
                opacity: 0,
                x: -60,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
            }}
            viewport={{ once: true }}
            transition={{
                duration: 0.7,
            }}
        >
            {/* Rotating Border */}

            <div className="profile-border"></div>

            <div className="profile-content">

                {/* Availability */}

                <div className="availability">

                    <span className="status-dot"></span>

                    Available for Work

                </div>

                {/* Image */}

                <motion.div
                    animate={{
                        y: [0, -10, 0],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="profile-image-wrapper"
                >
                    <img
                        src={aboutInfo.profileImage}
                        alt={aboutInfo.name}
                        className="profile-image"
                    />
                </motion.div>

                {/* Name */}

                <h2>{aboutInfo.name}</h2>

                <p className="role">
                    {aboutInfo.role}
                </p>

                {/* Tech Icons */}

                <div className="tech-icons">

                    {techStack.map((tech) => {
                        const Icon = tech.icon;

                        return (
                            <div
                                className="tech-icon"
                                key={tech.name}
                                title={tech.name}
                            >
                                <Image
                                    src={`/icons/${tech.icon}.svg`}
                                    alt={tech.name}
                                    width={32}
                                    height={32}
                                />
                            </div>
                        );
                    })}

                </div>

                {/* Buttons */}

                <div className="profile-actions">

                    <a
                        href={aboutInfo.resume}
                        // className="resume-btn"
                        className="btn-primary"
                        download
                    >
                        Download Resume
                    </a>

                </div>

                {/* Social */}

                <div className="social-links">

                    {socialLinks.map((item) => {

                        return (
                            <a
                                href={item.url}
                                target="_blank"
                                rel="noreferrer"
                                key={item.name}
                                className="social-btn"
                            >
                                <Image
                                    src={`/icons/${item.icon}.svg`}
                                    alt={item.name}
                                    width={32}
                                    height={32}
                                />
                            </a>
                        );
                    })}

                </div>

            </div>
        </motion.div>
    );
}