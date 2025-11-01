"use client";

import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

type CarProps = {
  onPosition?: (pos: THREE.Vector3) => void;
};

export function Car({ onPosition }: CarProps) {
  const groupRef = useRef<THREE.Group>(null);
  const velocity = useRef(new THREE.Vector3());
  const direction = useRef(0); // radians, 0 = +Z
  const pressed = useRef<Record<string, boolean>>({});
  const [ready, setReady] = useState(false);

  // Keyboard listeners (client only)
  useState(() => {
    const down = (e: KeyboardEvent) => (pressed.current[e.key.toLowerCase()] = true);
    const up = (e: KeyboardEvent) => (pressed.current[e.key.toLowerCase()] = false);
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    setReady(true);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  });

  useFrame((_, dt) => {
    if (!groupRef.current || !ready) return;

    // Controls
    const accel = 8; // units/s^2
    const turnSpeed = 2.2; // rad/s
    const maxSpeed = 12;
    const friction = 2.5; // units/s^2

    if (pressed.current["w"] || pressed.current["arrowup"]) {
      velocity.current.z -= Math.cos(direction.current) * accel * dt;
      velocity.current.x -= Math.sin(direction.current) * accel * dt;
    }
    if (pressed.current["s"] || pressed.current["arrowdown"]) {
      velocity.current.z += Math.cos(direction.current) * accel * dt;
      velocity.current.x += Math.sin(direction.current) * accel * dt;
    }
    if (pressed.current["a"] || pressed.current["arrowleft"]) {
      direction.current += turnSpeed * dt;
    }
    if (pressed.current["d"] || pressed.current["arrowright"]) {
      direction.current -= turnSpeed * dt;
    }

    // Apply friction
    const speed = velocity.current.length();
    if (speed > 0) {
      const decel = Math.min(speed, friction * dt);
      velocity.current.multiplyScalar((speed - decel) / speed);
    }

    // Clamp speed
    if (velocity.current.length() > maxSpeed) {
      velocity.current.setLength(maxSpeed);
    }

    // Integrate position
    groupRef.current.position.addScaledVector(velocity.current, dt);
    groupRef.current.rotation.y = direction.current;

    onPosition?.(groupRef.current.position.clone());
  });

  return (
    <group ref={groupRef} position={[0, 0.5, 0]}>
      {/* Simple low-poly car */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.6, 0.5, 3]} />
        <meshStandardMaterial color="#1677ff" metalness={0.1} roughness={0.6} />
      </mesh>
      <mesh position={[0, 0.55, -0.8]} castShadow>
        <boxGeometry args={[1.2, 0.4, 1.2]} />
        <meshStandardMaterial color="#e6f0ff" />
      </mesh>
      {/* Wheels */}
      {[
        [-0.75, -0.05, 1.2],
        [0.75, -0.05, 1.2],
        [-0.75, -0.05, -1.2],
        [0.75, -0.05, -1.2],
      ].map((p, i) => (
        <mesh key={i} position={p as any} castShadow>
          <cylinderGeometry args={[0.35, 0.35, 0.2, 16]} />
          <meshStandardMaterial color="#222" />
          <rotation attach="rotation" args={[Math.PI / 2, 0, 0]} />
        </mesh>
      ))}
    </group>
  );
}


