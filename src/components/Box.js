import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, Stars } from "@react-three/drei";

export default function Box() {
    const meshRef = useRef();

    useFrame(() => {
        meshRef.current.rotation.y += 0.005;
        meshRef.current.rotation.x += 0.005;
    });

    return (
      <>
        <RoundedBox
          ref={meshRef}
          args={[3, 3, 3]} // Width, height, depth. Default is [1, 1, 1]
          radius={0.1} // Radius of the rounded corners. Default is 0.05
          smoothness={4} // The number of curve segments. Default is 4
          creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
        >
          <meshNormalMaterial attach="material" />
        </RoundedBox>
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={2} />
      </>
    );
}
