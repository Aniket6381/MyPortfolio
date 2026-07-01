"use client"

import { Canvas, useFrame } from "@react-three/fiber";
import {
    Float,
    Text,
    Stars,
    Sparkles,
    Image,
    Billboard
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
// import { Aws } from "@dev.icons/react";
// import reactLogo from "/images/physics.png"

function CameraRig() {
    useFrame(({ mouse, camera }) => {
        camera.position.x = THREE.MathUtils.lerp(
            camera.position.x,
            mouse.x * 1.5,
            0.05
        );

        camera.position.y = THREE.MathUtils.lerp(
            camera.position.y,
            mouse.y * 1,
            0.05
        );

        camera.lookAt(0, 0, 0);
    });

    return null;
}

function EnergyCore() {
    const ref = useRef();

    useFrame((state) => {
        const t = state.clock.elapsedTime;

        ref.current.rotation.y += 0.005;

        ref.current.scale.setScalar(
            1 + Math.sin(t * 2) * 0.08
        );
    });

    return (
        <Float
            speed={3}
            rotationIntensity={2}
            floatIntensity={2}
        >
            <mesh ref={ref}>
                <icosahedronGeometry args={[1.3, 2]} />

                <meshStandardMaterial
                    color="#8b5cf6"
                    emissive="#8b5cf6"
                    emissiveIntensity={4}
                    wireframe
                />
            </mesh>
        </Float>
    );
}

function OrbitingSkill({
    skill,
    radius,
    speed,
    offset
}) {
    const group = useRef();

    useFrame((state) => {
        const t =
            state.clock.elapsedTime * speed +
            offset;

        group.current.position.x =
            Math.cos(t) * radius;

        group.current.position.z =
            Math.sin(t) * radius;

        group.current.position.y =
            Math.sin(t * 2) * 0.3;
    });

    return (
        <group ref={group}>
            <Float speed={2}>
                {/* <img src={skill} /> */}
                {/* <Text
          color="white"
          fontSize={0.28}
          anchorX="center"
          anchorY="middle"
        >
          {text}
        </Text> */}
                <Billboard>
                    <Image
                        url={skill}
                        scale={[0.8, 0.8]}
                    />
                </Billboard>
            </Float>
        </group>
    );
}

function OrbitRing() {
    const ref = useRef();

    useFrame(() => {
        ref.current.rotation.y += 0.002;
    });

    return (
        <mesh ref={ref}>
            <torusGeometry
                args={[2.8, 0.015, 16, 200]}
            />

            <meshBasicMaterial
                color="#8b5cf6"
            />
        </mesh>
    );
}

export default function Hero3D() {
    return (
        <div className="h-[500px] max-h-[500px] w-full">
            <Canvas
                camera={{
                    position: [0, 0, 8],
                    fov: 45,
                }}
            >
                <CameraRig />

                <color
                    attach="background"
                    args={["#030014"]}
                />

                <ambientLight intensity={1.5} />

                <pointLight
                    position={[5, 5, 5]}
                    intensity={80}
                    color="#8b5cf6"
                />

                <pointLight
                    position={[-5, -5, -5]}
                    intensity={50}
                    color="#06b6d4"
                />

                <Stars
                    radius={80}
                    depth={50}
                    count={5000}
                    factor={5}
                    fade
                />

                <Sparkles
                    count={100}
                    scale={10}
                    speed={0.3}
                    size={3}
                />

                <OrbitRing />

                <EnergyCore />

                <OrbitingSkill
                    skill="/images/physics.png"
                    radius={2.8}
                    speed={0.5}
                    offset={0}
                />

                <OrbitingSkill
                    skill="/images/physics.png"
                    radius={2.8}
                    speed={0.5}
                    offset={1}
                />

                <OrbitingSkill
                    skill="/images/physics.png"
                    radius={2.8}
                    speed={0.5}
                    offset={2}
                />

                <OrbitingSkill
                    skill="/images/physics.png"
                    radius={2.8}
                    speed={0.5}
                    offset={3}
                />

                <OrbitingSkill
                    // skill={Aws}
                    skill="/images/physics.png"
                    radius={2.8}
                    speed={0.5}
                    offset={4}
                />

                <OrbitingSkill
                    skill="/images/physics.png"
                    radius={2.8}
                    speed={0.5}
                    offset={5}
                />
            </Canvas>
        </div>
    );
}