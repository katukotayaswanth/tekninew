import  { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

function CubeGrid({ count = 5, spacing = 2 }) {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.1;
    }
  });

  return (
    <group ref={group}>
      {Array.from({ length: count }, (_, i) =>
        Array.from({ length: count }, (_, j) => (
          <Float
            key={`${i}-${j}`}
            speed={1.5}
            rotationIntensity={0.2}
            floatIntensity={0.5}
            position={[
              (i - (count - 1) / 2) * spacing,
              Math.sin(i * j) * 0.5,
              (j - (count - 1) / 2) * spacing,
            ]}
          >
            <mesh castShadow receiveShadow>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial
                color={new THREE.Color().setHSL(i / count, 0.8, 0.5)}
                roughness={0.5}
                metalness={0.8}
                transparent
                opacity={0.7}
              />
            </mesh>
          </Float>
        ))
      )}
    </group>
  );
}

export function HeroScene() {
  return (
    <Canvas
      shadows
      camera={{ position: [10, 10, 10], fov: 45 }}
      className="w-full h-full"
    >
      <color attach="background" args={['#020817']} />
      <fog attach="fog" args={['#020817', 5, 20]} />
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <CubeGrid />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
}