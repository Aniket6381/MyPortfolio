"use client"

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Apple Style Horizontal Scroll
 *
 * @param {React.RefObject} sectionRef
 * @param {React.RefObject} trackRef
 * @param {number} slides
 */

export default function useHorizontalScroll(
    sectionRef,
    trackRef,
    slides
) {
    useLayoutEffect(() => {
        if (!sectionRef.current || !trackRef.current) return;

        const section = sectionRef.current;
        const track = trackRef.current;

        const ctx = gsap.context(() => {
            // Width that needs to move horizontally
            const getScrollAmount = () =>
                track.scrollWidth - window.innerWidth;

            // Main horizontal animation
            gsap.to(track, {
                x: () => -getScrollAmount(),
                ease: "none",

                scrollTrigger: {
                    trigger: section,

                    start: "top top",

                    end: () => `+=${getScrollAmount()}`,

                    pin: true,

                    scrub: 1,

                    anticipatePin: 1,

                    invalidateOnRefresh: true,

                    // Smooth snapping
                    snap: {
                        snapTo: 1 / (slides - 1),
                        duration: {
                            min: 0.15,
                            max: 0.45,
                        },
                        ease: "power2.inOut",
                    },
                },
            });

            // Refresh after images/fonts load
            ScrollTrigger.refresh();
        }, section);

        const refresh = () => ScrollTrigger.refresh();

        window.addEventListener("resize", refresh);

        return () => {
            window.removeEventListener("resize", refresh);
            ctx.revert();
        };
    }, [sectionRef, trackRef, slides]);
}