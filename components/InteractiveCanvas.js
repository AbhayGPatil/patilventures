import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, Text } from '@react-three/drei';

// Floating 3D word component
function FloatingWord({ text, position, color }) {
  const ref = useRef();
  useFrame((state, delta) => {
    // slowly rotate the text for extra dynamism
    ref.current.rotation.y += delta * 0.15;
  });
  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.2} floatingRange={[-0.5, 0.5]}>
      <Text
        ref={ref}
        position={position}
        fontSize={0.6}
        color={color}
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </Float>
  );
}

export default function InteractiveCanvas() {
  const words = [
    { text: 'Chat Bot', position: [-2, 0.5, 0], color: '#1B3C53' },
    { text: 'App Dev', position: [1.5, 1, 0], color: '#456882' },
    { text: 'Web Apps', position: [-1, -0.8, 0], color: '#D2C1B6' },
    { text: 'AI Agent', position: [2, -1, 0], color: '#EBCB90' },
    { text: 'Gen AI', position: [0, 1.6, 0], color: '#1B3C53' },
    { text: 'LLM', position: [-2.5, -1.6, 0], color: '#456882' },
  ];
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }} style={{ height: '100%', width: '100%' }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 2, 2]} intensity={1} />
      <Suspense fallback={null}>
        <Environment preset="sunset" />
        {words.map((word, idx) => (
          <FloatingWord key={idx} {...word} />
        ))}
      </Suspense>
    </Canvas>
  );
}