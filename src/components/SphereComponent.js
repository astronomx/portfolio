import React from "react";
import { Sphere } from "@react-three/drei";

export default function SphereComponent() {
    return (
        <Sphere args={[1, 32, 32]}>
            <meshNormalMaterial attach="material" />
        </Sphere>
    );
}