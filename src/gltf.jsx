import React ,{useRef, useState} from 'react';
import { useLoader , useFrame } from '@react-three/fiber';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import {MeshWobbleMaterial, Ring} from '@react-three/drei'

const GltfModel =({modelPath, scale=6,position =[0,5,0]})=>{
  
    const meshRef = useRef();
    const ringRef=useRef();
const gltf =useLoader(GLTFLoader , modelPath);
useFrame((state,delta) => {
  
  
 
  meshRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.2;
        {
          window.addEventListener("mousemove", (e) => {
            let cy = e.clientY / window.innerHeight - 0.5;
            let cx = e.clientX / window.innerHeight - 0.5;
            

            if (meshRef.current != null) {
              meshRef.current.rotation.x = cy;
          meshRef.current.rotation.y = cx*0.7;
         
            }
          });
        }
        
        
         
         
        
     
  });

return (
  <>
   <Ring ref={ringRef}args={[0,9,56]} position={[0, 0, -10]}>
   <MeshWobbleMaterial
        attach="material"
        factor={0.1} // Wobble factor
        speed={6}   // Wobble speed
        color="blue"
        emissiveIntensity={9}
        metalness={1}
        side={2}
        transparent
        opacity={0.25}
      />
      </Ring>
    <primitive 
    ref={meshRef}
    object={gltf.scene}
    scale={scale}
    position={position}
    
    
    />

    </>
    
)
}

export default GltfModel;