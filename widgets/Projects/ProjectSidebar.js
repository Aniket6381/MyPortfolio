import { motion } from "framer-motion";
import "./projects.css";

export default function ProjectSidebar({
    projects,
    activeProject,
    setActiveProject,
}) {
    return (
        <aside className="project-sidebar">
            <div className="sidebar-header">
                <span className="sidebar-tag">
                    PROJECTS
                </span>

                <h3>
                    Selected
                    <span> Work</span>
                </h3>
            </div>

            <div className="project-list">
                {projects.map((project, index) => {
                    const active = activeProject.id === project.id;

                    return (
                        <motion.button
                            key={project.id}
                            whileHover={{ x: 8 }}
                            transition={{
                                duration: 0.25,
                            }}
                            onClick={() => setActiveProject(project)}
                            className={`project-item ${active ? "active" : ""
                                }`}
                        >
                            {/* Active Background */}

                            {active && (
                                <motion.div
                                    layoutId="activeProject"
                                    className="active-background"
                                    transition={{
                                        type: "spring",
                                        stiffness: 250,
                                        damping: 25,
                                    }}
                                />
                            )}

                            {/* Number */}

                            <div className="project-number">
                                {String(index + 1).padStart(2, "0")}
                            </div>

                            {/* Info */}

                            <div className="project-info">
                                <h4>{project.title}</h4>

                                <p>{project.category}</p>
                            </div>

                            {/* Active Dot */}

                            <div
                                className={`project-dot ${active ? "active-dot" : ""
                                    }`}
                            />
                        </motion.button>
                    );
                })}
            </div>
        </aside>
    );
}