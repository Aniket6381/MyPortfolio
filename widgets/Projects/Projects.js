"use client"

import { useState } from "react";
import { motion } from "framer-motion";

import {
    projects,
    sectionContent,
} from "./projectsData";

import ProjectSidebar from "./ProjectSidebar";
import FeaturedProject from "./FeaturedProject";

import "./projects.css";

export default function Projects() {
    const [activeProject, setActiveProject] = useState(
        projects.find((project) => project.featured) || projects[0]
    );

    return (
        <section
            id="projects"
            className="projects-section"
        >
            {/* ==========================
          Background
      ========================== */}

            <div className="projects-bg">
                <div className="bg-gradient gradient-one"></div>
                <div className="bg-gradient gradient-two"></div>
                <div className="bg-grid"></div>
            </div>

            <div className="projects-container">
                {/* ==========================
            Heading
        ========================== */}

                <motion.div
                    className="projects-header"
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
                    transition={{
                        duration: .7,
                    }}
                >

                    <h2 className="projects-title">
                        Projects That Turn Ideas <span>Into Reality</span>
                    </h2>

                    <p className="projects-subtitle">
                        From enterprise dashboards and healthcare platforms to modern e-commerce solutions, these projects demonstrate my experience in building scalable, performant, and user-centric web applications using modern technologies.
                    </p>
                </motion.div>

                {/* ==========================
            Layout
        ========================== */}

                <div className="projects-layout">

                    {/* Sidebar */}

                    <ProjectSidebar
                        projects={projects}
                        activeProject={activeProject}
                        setActiveProject={setActiveProject}
                    />

                    {/* Featured */}

                    <FeaturedProject
                        project={activeProject}
                    />

                </div>
            </div>
        </section>
    );
}