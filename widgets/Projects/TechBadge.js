import "./projects.css";

export default function TechBadge({
    name,
    icon: Icon,
    color = "#22d3ee",
}) {
    return (
        <div
            className="tech-badge"
            style={{
                "--accent": color,
            }}
        >
            {/* Animated Glow */}
            <span className="tech-glow"></span>

            {/* Content */}
            <div className="tech-content">
                {Icon && (
                    <span className="tech-icon">
                        <Icon />
                    </span>
                )}

                <span className="tech-name">
                    {name}
                </span>
            </div>
        </div>
    );
}