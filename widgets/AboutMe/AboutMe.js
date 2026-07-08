// "use client"

// const AboutMe = () => {
//     return (
//         <section className="mt-20 mx-20 min-h-screen">
//             <p className="text-4xl text-white leading-loose">I'm a Full Stack Developer who enjoys transforming complex ideas into fast, scalable, and intuitive digital experiences. With over 3+ years of experience, I specialize in building enterprise-grade web applications using React, Next.js, Node.js, Express.js, and MongoDB. From architecting RESTful APIs to crafting pixel-perfect user interfaces, I focus on writing clean, maintainable code that delivers real business value.</p>

//             <div className="grid grid-cols-3 items-center justify-center mt-10">
//                 <div className="">
//                     <div className="text-purple-700 text-7xl text-center" style={{ fontFamily: "Lato-Bold" }}>3+</div>
//                     <div className="text-center">Years of Experience</div>
//                 </div>
//                 <div className="">
//                     <div className="text-purple-700 text-7xl text-center" style={{ fontFamily: "Lato-Bold" }}>15+</div>
//                     <div className="text-center">Projects Delivered</div>
//                 </div>
//                 <div className="">
//                     <div className="text-purple-700 text-7xl text-center" style={{ fontFamily: "Lato-Bold" }}>25+</div>
//                     <div className="text-center">Skills Mastered</div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default AboutMe

"use client"

import { motion } from "framer-motion";

import ProfileCard from "./ProfileCard";
import StatsCard from "./StatsCard";
import Timeline from "./Timeline";

import { aboutInfo, statistics } from "./aboutData";

import "./about.css";

export default function About() {
    return (
        <section id="about" className="about-section">
            {/* Background */}

            <div className="about-background">
                <div className="about-gradient gradient-left"></div>
                <div className="about-gradient gradient-right"></div>
                <div className="about-grid"></div>
            </div>

            <div className="about-container">
                {/* ================= Header ================= */}

                <motion.div
                    className="about-header"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <span className="about-tag">ABOUT ME</span>

                    <h2 className="about-title">
                        Passionate About Building
                        <span> Digital Experiences</span>
                    </h2>

                    <p className="about-subtitle">
                        I enjoy transforming ideas into scalable web applications,
                        writing clean code, and building products that create real
                        value for users.
                    </p>
                </motion.div>

                {/* ================= Profile + Description ================= */}

                <div className="about-layout">
                    {/* Left */}

                    <ProfileCard />

                    {/* Right */}

                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <h3>Hello, I'm {aboutInfo.name} 👋</h3>

                        <h4>{aboutInfo.role}</h4>

                        <p>{aboutInfo.description}</p>

                        {/* Philosophy */}

                        <div className="philosophy-card">
                            <span>💡 My Philosophy</span>

                            <blockquote>
                                "{aboutInfo.philosophy}"
                            </blockquote>
                        </div>

                        {/* Stats */}

                        <div className="stats-grid">
                            {statistics.map((item, index) => (
                                <StatsCard
                                    key={item.label}
                                    number={item.number}
                                    label={item.label}
                                    index={index}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Timeline */}

                <Timeline />
            </div>
        </section>
    );
}