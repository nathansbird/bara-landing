// import { useEffect, useState } from 'react';

// const Demo = () => {
//   const [frame, setFrame] = useState(6);
//   const [actualFrame, setActualFrame] = useState(6);
//   const [anim, setAnim] = useState();

//   useEffect(() => {
//     if(anim) {
//       clearInterval(anim)
//     }

//     setAnim(setInterval(() => {
//       setActualFrame((v) => {
//         const delta = (frame - actualFrame) * 0.01;
//         console.log(delta)
//         return v + delta;
//       })
//     }), 50)
//   }, [frame, actualFrame])

//   useEffect(() => {
//     window.requestAnimationFrame(() => {
//       document.getElementById("cube").currentTime = actualFrame / 240 * 4
//     })
//   }, [actualFrame])

//   useEffect(() => {
//     document.onmousemove = (event) => {
//       const { innerWidth, innerHeight } = window;
//       let eventDoc, doc, body;
//       event = event || window.event;

//       if (event.pageX == null && event.clientX != null) {
//         eventDoc = (event.target && event.target.ownerDocument) || document;
//         doc = eventDoc.documentElement;
//         body = eventDoc.body;

//         event.pageX = event.clientX +
//           (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
//           (doc && doc.clientLeft || body && body.clientLeft || 0);
//       }

//       const { pageX } = event;
//       const frameIndex = (pageX / innerWidth) * 240;

//       setFrame(frameIndex)
//     };
//   }, [])
  
//   return (
//     <div id="demo-page">
//         <video id="cube" width="500" autobuffer preload="true">
//           <source src="/assets/anim.mov"></source>
//         </video>
//     </div>
//   )
// }

// export default Demo;