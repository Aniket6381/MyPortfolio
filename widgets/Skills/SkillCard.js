"use client"

import { motion, useMotionValue } from "framer-motion";
import { useRef } from "react";
import SkillChip from "./SkillChip";

export default function SkillCard({
    title,
    subtitle,
    skills,
    color,
    index,
}) {
    const cardRef = useRef(null);

    const mouseX = useMotionValue(-300);
    const mouseY = useMotionValue(-300);

    function handleMouseMove(e) {
        const rect = cardRef.current.getBoundingClientRect();

        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    }

    function handleLeave() {
        mouseX.set(-300);
        mouseY.set(-300);
    }

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleLeave}
            initial={{
                opacity: 0,
                y: 60,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.3,
            }}
            transition={{
                duration: 0.7,
                delay: index * 0.12,
            }}
            className="group relative overflow-hidden rounded-3xl"
        >
            {/* Animated Border */}

            <div
                className="
          absolute
          inset-0
          rounded-3xl
          bg-gradient-to-r
          from-cyan-500
          via-violet-500
          to-pink-500
          opacity-20
          blur-xl
          transition-all
          duration-700
          group-hover:opacity-60
        "
            />

            {/* Spotlight */}

            <motion.div
                style={{
                    left: mouseX,
                    top: mouseY,
                }}
                className="
          pointer-events-none
          absolute
          h-56
          w-56
          rounded-full
          bg-cyan-400/20
          blur-3xl
          -translate-x-1/2
          -translate-y-1/2
          transition-opacity
          duration-300
        "
            />

            {/* Floating Background Blob */}

            <motion.div
                animate={{
                    y: [0, -20, 0],
                    x: [0, 15, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 8,
                    ease: "easeInOut",
                }}
                className="
          absolute
          -right-16
          -top-16
          h-40
          w-40
          rounded-full
          bg-violet-500/10
          blur-3xl
        "
            />

            {/* Card */}

            <div
                className="
          relative
          rounded-3xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          p-8
          shadow-2xl
        "
            >
                {/* Header */}

                <div className="mb-8">

                    <motion.h3
                        initial={{
                            opacity: 0,
                            x: -20,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        className="
              text-2xl
              font-bold
              text-white
            "
                    >
                        {title}
                    </motion.h3>

                    <motion.p
                        initial={{
                            opacity: 0,
                            x: -20,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            delay: 0.15,
                        }}
                        className="
              mt-2
              text-sm
              text-gray-400
            "
                    >
                        {subtitle}
                    </motion.p>

                </div>

                {/* Skills */}

                <div
                    className="
            flex
            flex-wrap
            gap-4
          "
                >
                    {skills.map((skill, i) => (
                        <SkillChip
                            key={i}
                            name={skill.name}
                            Icon={skill.icon}
                            color={color}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
}