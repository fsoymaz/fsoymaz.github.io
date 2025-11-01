"use client";

export function Road() {
  return (
    <group>
      {/* Ground */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[200, 40]} />
        <meshStandardMaterial color="#303030" />
      </mesh>
      {/* Lane stripe */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <planeGeometry args={[200, 1]} />
        <meshBasicMaterial color="#ffd166" />
      </mesh>
    </group>
  );
}


