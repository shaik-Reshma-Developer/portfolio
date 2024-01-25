import React from "react";
import { Canvas } from "@react-three/fiber";
import ModelViewer from "./modelViewer";



const Canvas3D =() =>{
    
    return(
        <Canvas>
             <ambientLight intensity={6}/>
             <directionalLight  intensity={35}  position={[5,5,5]} color={"blue"} />
             <directionalLight intensity={20} position={[-5,0,0]} color={"blue"}/>
             {/* <directionalLight intensity={20} position={[0,-5,0]} color={"blue"}/> */}
      
            <ModelViewer modelPath="robo.glb"/>

        </Canvas>
    );
}

export default Canvas3D;