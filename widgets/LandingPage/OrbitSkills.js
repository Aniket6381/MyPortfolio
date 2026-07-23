"use client"

import { useMediaQuery } from "../hooks/useMediaQuery";
import "./orbit.css";

const outerSkills = ["AWS", "Docker", "Git", "Linux"];

const middleSkills = [
    "Node.js",
    "Express",
    "MongoDB",
    "REST API",
];

const innerSkills = [
    "React",
    "Next.js",
    "Redux",
    "Tailwind",
];

function OrbitLayer({
    skills,
    radius,
    duration,
    reverse = false,
}) {
    return (
        <div
            className={`orbit-ring ${reverse ? "reverse" : ""}`}
            style={{
                animationDuration: `${duration}s`,
            }}
        >
            {skills.map((skill, index) => {
                const angle =
                    (360 / skills.length) * index;

                return (
                    <div
                        key={skill}
                        className="absolute left-1/2 top-1/2"
                        style={{
                            transform: `
                rotate(${angle}deg)
                translate(${radius}px)
                rotate(-${angle}deg)
              `,
                        }}
                    >
                        <div className="skill-chip">
                            {skill}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default function OrbitSkills() {
    const isMobile = useMediaQuery("(max-width:640px)");
    const isTablet = useMediaQuery("(max-width:768px)");

    const size =
        isMobile
            ? 280
            : isTablet
                ? 400
                : 600;
    return (
        <div className="relative w-[280px]
h-[280px]
sm:w-[400px]
sm:h-[400px]
md:w-[500px]
md:h-[500px]
lg:w-[600px]
lg:h-[600px]">

            {/* OUTER GLOW RING */}

            <div className="gradient-ring outer-ring">
                <div className="ring-cutout" />
            </div>

            {/* MIDDLE GLOW RING */}

            <div className="gradient-ring middle-ring">
                <div className="ring-cutout" />
            </div>

            {/* INNER GLOW RING */}

            <div className="gradient-ring inner-ring">
                <div className="ring-cutout" />
            </div>

            {/* Orbit Paths */}

            <div className="orbit-path outer-path" />
            <div className="orbit-path middle-path" />
            <div className="orbit-path inner-path" />

            {/* Skills */}

            <OrbitLayer
                skills={outerSkills}
                radius={size * 0.43}
                duration={35}
            />

            <OrbitLayer
                skills={middleSkills}
                radius={size * 0.30}
                duration={25}
                reverse
            />

            <OrbitLayer
                skills={innerSkills}
                radius={size * 0.17}
                duration={15}
            />

            {/* Center Glow */}

            <div className="center-glow" />

            {/* Avatar */}

            <div className="avatar-wrapper">
                <img
                    src="/avatar.jpg"
                    alt="avatar"
                    className="avatar"
                />
            </div>
        </div>
    );
}