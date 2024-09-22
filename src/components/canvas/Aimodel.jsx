import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Aimodel = ({ isMobile }) => {
  const aimodel = useGLTF('./ai_animate/scene.gltf');
  const mixer = useRef(null);

  useEffect(() => {
    // Initialize the animation mixer
    if (aimodel.animations.length > 0) {
      mixer.current = new THREE.AnimationMixer(aimodel.scene);

      const animationAction = mixer.current.clipAction(aimodel.animations[0]); // Assuming the first animation, change the index if needed
      animationAction.setLoop(THREE.LoopRepeat); // Set the animation loop mode to LoopRepeat
      animationAction.play();
    }
  }, [aimodel]);

  useFrame((state, delta) => {
    // Update the animation mixer on every frame
    if (mixer.current) {
      mixer.current.update(delta);
    }
  });

  return (
    <mesh>
      <hemisphereLight intensity={0.65}
      groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={2}
          castShadow
          shadow-mapSize = {1024}
      />
      <primitive
        object={aimodel.scene}
        scale={isMobile ? 2.0: 1.5}
        position={isMobile? [-6, -4, -2.2]: [5, -2.75, -1.5]}
        rotation={[0.1, 0.7, -0.1]}
      />
      
    </mesh>
  );
};

const AimodelCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 800px');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="always" // Change the frameloop to "always"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Aimodel isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default AimodelCanvas;