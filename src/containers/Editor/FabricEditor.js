// import React, { Component, useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import {Canvas,Circle, Image, Path, Text} from 'react-fabricjs';
// import fabric from "fabric";
 
// class FabricEditor extends React.Component{
//     render() {
//         return (
//             <Canvas
//                 ref="canvas"
//                 width="1000"
//                 height="1000"
//             >
//                 <Image
//                     ref="image"
//                     imgElement={document.getElementById('my-image')}
//                     width={100}
//                     height={100}
//                 />
     
//                 <Path
//                     path="M 0 0 L 300 100 L 200 300 z"
//                     fill="red"
//                     stroke="green"
//                     strokeWidth={10}
//                     opacity={0.5}
//                 />
     
//                 <Text
//                     text="Click me"
//                     left={0}
//                     top={200}
//                     shadow="rgba(0,0,0,0.3) 5px 5px 5px"
//                     stroke="#ff1318"
//                     strokeWidth={1}
//                     fontStyle="italic"
//                     fontFamily="Hoefler Text"
//                 />
//             </Canvas>
//         );
//     }
   
// };

// export default FabricEditor