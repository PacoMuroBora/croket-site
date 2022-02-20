import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  OrbitControls,
  useTexture,
  PerspectiveCamera,
  CameraShake,
  MeshReflectorMaterial,
} from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

function CanvasContainer() {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  );
}

function Scene() {
  const cameraRef = useRef();
  const initialZ = -6;

  useFrame((state, delta) => {
    if (cameraRef.current && cameraRef.current.position.z !== initialZ) {
      cameraRef.current.position.z =
        0.99 * cameraRef.current.position.z + 0.01 * initialZ;
    }
  });

  return (
    <Suspense fallback={null}>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 1, -8]} />
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[-1.2, 1, 0]} />
      <Box position={[1.2, 1, 0]} />

      <Ground
        mirror={1}
        mixBlur={10}
        mixStrength={1}
        blur={[300, 120]}
        position={[0, -0.5, 0]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />

      <EffectComposer multisampling={8}>
        <Bloom
          kernelSize={3}
          luminanceThreshold={0}
          luminanceSmoothing={2}
          intensity={0.4}
        />
      </EffectComposer>
    </Suspense>
  );
}

function Ground(props) {
  const [floor, normal] = useTexture([
    '/src/static/images/floor_img.jpg',
    '/src/static/images/floor_normal_map.jpg',
  ]);
  return (
    <mesh rotation={[-Math.PI / 2, 0, Math.PI / 2]} {...props}>
      <planeGeometry args={[10, 8]} />
      <MeshReflectorMaterial
        resolution={1024}
        args={[8, 8]}
        color="#f0f0f0"
        metalness={0}
        roughnessMap={floor}
        normalMap={normal}
        normalScale={[1, 1]}
        {...props}
      />
    </mesh>
  );
}

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.01));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}

export default CanvasContainer;
