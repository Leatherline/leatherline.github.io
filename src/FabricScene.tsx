import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
function Fabric(){const mesh=useRef<THREE.Mesh>(null);useFrame(({clock,pointer})=>{if(!mesh.current)return;const p=mesh.current.geometry.attributes.position;for(let i=0;i<p.count;i++){const x=p.getX(i),y=p.getY(i);p.setZ(i,Math.sin(x*2+clock.elapsedTime*.3)*.12+Math.cos(y*2.4+clock.elapsedTime*.2)*.15);}p.needsUpdate=true;mesh.current.geometry.computeVertexNormals();mesh.current.rotation.y=pointer.x*.1;mesh.current.rotation.x=-.3+pointer.y*.08;});return <Float speed={.8} rotationIntensity={.1} floatIntensity={.15}><mesh ref={mesh}><planeGeometry args={[7,4,48,32]}/><meshStandardMaterial color="#c5a47e" wireframe transparent opacity={.17} side={THREE.DoubleSide}/></mesh></Float>}
export default function FabricScene(){return <Canvas dpr={[1,1.25]} camera={{position:[0,0,5],fov:45}} gl={{alpha:true,antialias:false,powerPreference:'low-power'}} aria-hidden="true"><ambientLight intensity={2}/><directionalLight position={[2,3,5]} intensity={3}/><Fabric/></Canvas>}
