'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

function HeroComposition() {
  const texture = useTexture('/hero/hero1.jpg');

  const groupRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      return undefined;
    }

    function handleMouseMove(event) {
      if (!groupRef.current) {
        return;
      }

      const x = (event.clientX / window.innerWidth - 0.5) * 0.18;
      const y = (event.clientY / window.innerHeight - 0.5) * 0.1;

      groupRef.current.position.x = x;
      groupRef.current.position.y = -y;
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <group ref={groupRef}>
      <mesh position={[0, -0.4, -0.3]} rotation={[-0.3, 0, 0]}>
        <planeGeometry args={[3, 2, 12, 8]} />
        <meshBasicMaterial
          color="#141414"
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>

      <mesh position={[0.4, 0.1, 0]} rotation={[-0.1, -0.2, 0]}>
        <planeGeometry args={[2.4, 1.4]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>

      <mesh
        position={[-1.4, 0.5, -0.1]}
        rotation={[-0.05, 0.2, 0.02]}
      >
        <planeGeometry args={[1.2, 0.7]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>

      <mesh
        position={[-0.9, -0.6, 0.1]}
        rotation={[-0.12, -0.15, 0]}
      >
        <planeGeometry args={[1, 0.6]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>

      <mesh position={[0.1, 0.3, 0.2]} rotation={[0, 0.3, 0]}>
        <boxGeometry args={[2.8, 1.8, 0.02]} />
        <meshBasicMaterial
          color="#141414"
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>

      <mesh position={[0.25, 0.35, 0.25]} rotation={[0, 0.3, 0]}>
        <boxGeometry args={[2.5, 1.5, 0.02]} />
        <meshBasicMaterial
          color="#141414"
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>
    </group>
  );
}

export default function HeroScene() {
  const [mounted, setMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(prefersReducedMotion());
    setMounted(true);
  }, []);

  if (!mounted || reducedMotion) {
    return null;
  }

  return (
    <Canvas
      className="hero-canvas"
      camera={{ position: [0, 0, 4], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      }}
    >
      <ambientLight intensity={0.8} />

      <HeroComposition />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </Canvas>
  );
}