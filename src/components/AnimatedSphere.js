import React from 'react'
import { Sphere, MeshDistortMaterial, GradientTexture } from '@react-three/drei';

export default function AnimatedSphere() {
    return (
        <mesh>
            <Sphere visible args={[1, 100, 200]} scale={2}>
                <MeshDistortMaterial attach="material" color="#D540BA" speed={1} distort={0.8} />
            </Sphere>
        </mesh>
    )
}