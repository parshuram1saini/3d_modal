import React from "react";
import "../style.css";
// import * as THREE from "three";
// import { Canvas } from "react-three-fiber";
import { Canvas } from "@react-three/fiber";
import { Physics, useBox } from "use-cannon";
import { OrbitControls, Stars } from "@react-three/drei";
// const globalGeometry = new THREE.BoxGeometry()
// const globalLamberMaterial = new THREE.MeshLambertMaterial()

function Box() {
  const [ref, api] = useBox(() => ({ mass: 1, position: [0, 2, 0] }));
  return (
    <mesh
      onClick={() => {
        api.velocity.set(0, 2, 0);
      }}
      // ref={ref}
      // position={[0, 2, 0]}
    >
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial
        attach="material"
        color="hotpink"
        backgroundColor="#222"
      />
    </mesh>
  );
}
function Image3D() {
  return (
    <>
      <Canvas>
        <OrbitControls />
        <Stars />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Box />
      </Canvas>
    </>
  );
}

export default Image3D;
