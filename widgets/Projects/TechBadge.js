"use client"

import Image from "next/image";
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
                        <Image
                            src={`/icons/${Icon}.svg`}
                            alt={Icon}
                            width={32}
                            height={32}
                        />
                    </span>
                )}

                <span className="tech-name">
                    {name}
                </span>
            </div>
        </div>
    );
}