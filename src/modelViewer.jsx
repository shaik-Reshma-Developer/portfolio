import React,{Suspense} from "react";

import GltfModel from "./gltf";



const ModelViewer =({modelPath , scale=6, position=[0,5,0]}) =>{


    return(
        <Suspense fallback={null}>
            <GltfModel modelPath={modelPath} scale={scale} position={position}/>
          
             
        </Suspense>
    )
}



export default ModelViewer;