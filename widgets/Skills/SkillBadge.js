import Image from "next/image";
import "./skills.css";

export default function SkillBadge({
    name,
    icon: Icon,
    color = "#22d3ee",
}) {
    return (
        <div
            className="skill-badge"
            style={{
                "--accent": color,
            }}
        >
            {/* Glow Border */}
            <div className="skill-badge-border"></div>

            {/* Content */}
            <div className="skill-badge-content">
                {Icon && (
                    <div className="skill-icon">
                        {/* <Icon /> */}
                        <Image
                            src={`/icons/${Icon}.svg`}
                            alt={name}
                            width={32}
                            height={32}
                        />
                    </div>
                )}

                <span>{name}</span>
            </div>
        </div>
    );
}