import Image from "next/image";
import "./skills.css";

export default function SkillBadge({
    name,
    icon,
    color = "#22d3ee",
}) {
    console.log(icon);
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
                {icon && (
                    <div className="skill-icon">
                        {/* <Icon /> */}
                        <Image
                            src={`/icons/${icon}.svg`}
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