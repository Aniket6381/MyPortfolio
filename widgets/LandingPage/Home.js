"use client"

import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

// import OrbitSkills from "./OrbitSkills";
import RingCursor from "@/widgets/LandingPage/RingCursor";
import Hero3D from "@/widgets/LandingPage/FloatingSphere";
import Preloader from "./Preloader";
import "./home.css"
import { useRouter } from "next/navigation";
import { useMediaQuery } from "../hooks/useMediaQuery";

export default function Home() {
    const [loading, setLoading] = useState(true);
    const router = useRouter()

    const particlesInit = useCallback(
        async (engine) => {
            await loadSlim(engine);
        },
        []
    );

    const isMobile = useMediaQuery("(max-width:640px)");
    const isDesktop = useMediaQuery("(max-width:1024px)");

    const particleCount =
        isMobile
            ? 35
            : isDesktop
                ? 60
                : 90;

    // bg - [#030014]

    return (
        <>
            {loading && (
                <Preloader
                    onFinish={() => setLoading(false)}
                />
            )}

            {/* Background */}

            <div className="home-background">
                <div className="home-gradient gradient-left"></div>
                <div className="home-gradient gradient-right"></div>
                <div className="home-grid"></div>
            </div>

            {!loading &&
                <section
                    className="
    relative
    min-h-screen
    overflow-hidden
    flex
    items-center
    px-5
    sm:px-8
    lg:px-16
    xl:px-20
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
                                    value: particleCount,
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
              grid-cols-1
              lg:grid-cols-2
              gap-10
              lg:gap-16
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
                                className="
text-center
lg:text-left
order-2
lg:order-1
"
                            >
                                <h1
                                    className="
                                    home-title
                 text-4xl
sm:text-5xl
md:text-6xl
xl:text-7xl
leading-tight
                  font-bold
                  text-white
                "
                                >
                                    Hi, I'm
                                    <span
                                        className="
                    bg-clip-text
                    text-transparent
                    block
                  "
                                    >
                                        Aniket Pawar
                                    </span>
                                </h1>

                                <p className="mt-6 text-gray-400 text-base sm:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0">
                                    Full Stack Developer with a passion to build scalable and user-friendly web applications.
                                </p>

                                <div
                                    className="
flex
flex-col
sm:flex-row
gap-4
mt-8
justify-center
lg:justify-start
"
                                >
                                    <a href="/files/Aniket Pawar_Full (MERN) Stack Developer.pdf" download><button className="btn-primary">Download CV</button></a>
                                    <a href="mailto:anipawar6381@outlook.com"><button className="btn-secondary">Get in Touch &nbsp;&gt;</button></a>
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
                                className="order-1 mt-12 lg:order-2 lg:mt-0 rounded-lg"
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