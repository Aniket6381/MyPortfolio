"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const colorMap = {
    cyan: {
        border: "from-cyan-400 via-cyan-500 to-sky-500",
        glow: "shadow-cyan-500/30",
        icon: "text-cyan-400",
    },
    blue: {
        border: "from-blue-400 via-indigo-500 to-violet-500",
        glow: "shadow-blue-500/30",
        icon: "text-blue-400",
    },
    emerald: {
        border: "from-emerald-400 via-green-500 to-lime-500",
        glow: "shadow-emerald-500/30",
        icon: "text-emerald-400",
    },
    green: {
        border: "from-green-400 via-emerald-500 to-teal-500",
        glow: "shadow-green-500/30",
        icon: "text-green-400",
    },
    violet: {
        border: "from-violet-400 via-fuchsia-500 to-pink-500",
        glow: "shadow-violet-500/30",
        icon: "text-violet-400",
    },
    pink: {
        border: "from-pink-400 via-rose-500 to-orange-500",
        glow: "shadow-pink-500/30",
        icon: "text-pink-400",
    },
};

export default function SkillChip({
    name,
    Icon,
    color = "cyan",
}) {
    const palette = colorMap[color];

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(
        useTransform(mouseY, [-50, 50], [8, -8]),
        { stiffness: 200, damping: 18 }
    );

    const rotateY = useSpring(
        useTransform(mouseX, [-50, 50], [-8, 8]),
        { stiffness: 200, damping: 18 }
    );

    function handleMove(e) {
        const rect = e.currentTarget.getBoundingClientRect();

        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
    }

    function reset() {
        mouseX.set(0);
        mouseY.set(0);
    }

    return (
        <motion.div
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMove}
            onMouseLeave={reset}
            whileHover={{
                scale: 1.08,
                y: -6,
            }}
            transition={{
                type: "spring",
                stiffness: 250,
                damping: 18,
            }}
            className="relative group cursor-default"
        >
            {/* Animated Border */}

            <div
                className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r ${palette.border} opacity-0 blur-sm transition duration-500 group-hover:opacity-100`}
            />

            {/* Card */}

            <div
                className={`
          relative
          flex
          items-center
          gap-3
          overflow-hidden
          rounded-2xl
          border
          border-white/10
          bg-white/5
          px-5
          py-3
          backdrop-blur-xl
          transition-all
          duration-500
          shadow-xl
          ${palette.glow}
        `}
            >
                {/* Moving Shine */}

                <motion.div
                    animate={{
                        x: ["-150%", "150%"],
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute inset-0 w-24 skew-x-12 bg-white/10 blur-md"
                />

                {/* Floating Icon */}

                {Icon && (
                    <motion.div
                        animate={{
                            y: [0, -4, 0],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 2,
                        }}
                        className={`relative z-10 text-2xl ${palette.icon}`}
                    >
                        <Icon />
                    </motion.div>
                )}

                {/* Name */}

                <span className="relative z-10 text-sm font-medium text-white">
                    {name}
                </span>
            </div>
        </motion.div>
    );
}