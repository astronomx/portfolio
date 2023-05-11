export default function TorusKnot() {
    return(
        <mesh>
            <torusKnotBufferGeometry attach="geometry" args={[9, 6, 100, 16]} />
            <meshNormalMaterial attach="material" />
        </mesh>
    )
}