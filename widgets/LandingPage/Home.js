"use client"

import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

// import OrbitSkills from "./OrbitSkills";
import RingCursor from "@/widgets/LandingPage/RingCursor";
import Hero3D from "@/widgets/LandingPage/FloatingSphere";
import Preloader from "./Preloader";

export default function Home() {
    const [loading, setLoading] = useState(true);

    const particlesInit = useCallback(
        async (engine) => {
            await loadSlim(engine);
        },
        []
    );

    // bg - [#030014]

    return (
        <>
            <RingCursor />

            {loading && (
                <Preloader
                    onFinish={() => setLoading(false)}
                />
            )}

            {!loading &&
                <section
                    className="
          relative
          min-h-screen
          overflow-hidden
          flex
          items-center
          mx-10
        "
                >
                    {/* Particles */}

                    <Particles
                        init={particlesInit}
                        className="absolute inset-0"
                        options={{
                            fullScreen: false,

                            particles: {
                                number: {
                                    value: 80,
                                },

                                size: {
                                    value: {
                                        min: 1,
                                        max: 4,
                                    },
                                },

                                move: {
                                    enable: true,
                                    speed: 0.8,
                                },

                                opacity: {
                                    value: {
                                        min: 0.2,
                                        max: 0.8,
                                    },
                                },

                                color: {
                                    value: "#8b5cf6",
                                },
                            },
                        }}
                    />

                    <div
                        className="
            container
            mx-auto
            px-6
            relative
            z-10
          "
                    >
                        <div
                            className="
              grid
              lg:grid-cols-2
              gap-16
              items-center
            "
                        >
                            {/* Left Content */}

                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 50,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                            >
                                <h1
                                    className="
                  text-6xl
                  lg:text-7xl
                  font-bold
                  text-white
                "
                                >
                                    Hi, I'm
                                    <span
                                        className="
                    bg-gradient-to-r
                    from-violet-400
                    via-blue-400
                    to-cyan-400
                    bg-clip-text
                    text-transparent
                    block
                  "
                                    >
                                        Aniket Pawar
                                    </span>
                                </h1>

                                <p
                                    className="
                  mt-6
                  text-xl
                  text-gray-400
                "
                                >
                                    Full Stack Developer with a passion to build <br /> scalable and user-friendly web applications
                                </p>

                                <div className="flex items-center justify-start gap-5 mt-6">
                                    <button className="bg-violet-500 px-5 py-2 rounded-md text-black hover:bg-[#030014] border border-violet-500 outline-0 ring-0 hover:text-white hover:border hover:border-violet-500 hover:ring-none hover:shadow-md hover:shadow-violet-500 hover:outline-none transition-all duration-500 font-base">Download CV</button>
                                    <button className="bg-[#030014] px-5 py-2 rounded-md text-white hover:bg-[#030020] border border-violet-500 outline-0 ring-0 hover:border hover:border-violet-500 hover:ring-none hover:shadow-md hover:shadow-violet-500 hover:outline-none transition-all duration-500 font-base">Get in Touch &nbsp;&gt;</button>
                                </div>

                                {/* <p
                className="
                  mt-4
                  max-w-xl
                  text-gray-500
                "
              >
                Building scalable web
                applications with React,
                Next.js, Node.js and MongoDB.
              </p> */}
                            </motion.div>

                            {/* Right Orbit */}

                            <motion.div
                                initial={{
                                    opacity: 0,
                                    scale: 0.8,
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                }}
                            >
                                {/* <OrbitSkills /> */}
                                <Hero3D />
                            </motion.div>
                        </div>
                    </div>
                </section>}
        </>
    );
}