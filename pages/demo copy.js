// import { useEffect, useState } from 'react';

// const Demo = () => {
//   const [frames, setAllFrames] = useState();
//   const [frame, setFrame] = useState();
//   const [size, setSize] = useState({
//     innerHeight: 0,
//     innerWidth: 0,
//   });

//   useEffect(() => {
//     extractFramesFromVideo("/assets/cubedemo.mp4").then((result) => {
//       setAllFrames(result)
//     })
//   }, [])
  
//   useEffect(() => {
//     console.log("frame is", frame);
//     if(frame){
//       const canvas = document.getElementById('new-canvas');
//       const context = canvas.getContext('2d');
//       const img = new Image();
//       img.onload = () => {
//         console.log("onload")
//         context.drawImage(img,0,0)
//       };
//       img.src = frame;
//     }
//   }, [frame])

//   useEffect(() => {
//     if(frames){
//       document.onmousemove = (event) => {
//         const { innerWidth, innerHeight } = window;
//         setSize({ innerWidth, innerHeight })
  
//         let eventDoc, doc, body;
//         event = event || window.event;
  
//         if (event.pageX == null && event.clientX != null) {
//           eventDoc = (event.target && event.target.ownerDocument) || document;
//           doc = eventDoc.documentElement;
//           body = eventDoc.body;
  
//           event.pageX = event.clientX +
//             (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
//             (doc && doc.clientLeft || body && body.clientLeft || 0);
//         }
  
//         const { pageX } = event;
//         const frameIndex = (pageX / innerWidth) * 360;
  
//         console.log(!!frames, frames?.length)
//         setFrame(frames[~~frameIndex])
//       };
//     }
//   }, [frames])

//   const extractFramesFromVideo = async (videoUrl, fps=30) => {
//     return new Promise(async (resolve) => {
//       const videoBlob = await fetch(videoUrl).then(r => r.blob()).catch((e) => console.log(e));
//       const videoObjectUrl = URL.createObjectURL(videoBlob);
//       const video = document.createElement("video");
//       console.log("then")
  
//       let seekResolve;
//       video.addEventListener('seeked', async function() {
//         if(seekResolve) seekResolve();
//       });
  
//       video.src = videoObjectUrl;
  
//       // workaround chromium metadata bug (https://stackoverflow.com/q/38062864/993683)
//       while((video.duration === Infinity || isNaN(video.duration)) && video.readyState < 2) {
//         await new Promise(r => setTimeout(r, 1000));
//         video.currentTime = 10000000*Math.random();
//       }
//       let duration = video.duration;
  
//       let canvas = document.createElement('canvas');
//       let context = canvas.getContext('2d');
//       let [w, h] = [video.videoWidth, video.videoHeight]
//       canvas.width =  w;
//       canvas.height = h;
  
//       let frames = [];
//       let interval = 1 / fps;
//       let currentTime = 0;
  
//       while(currentTime < duration) {
//         console.log(currentTime)
//         video.currentTime = currentTime;
//         await new Promise(r => seekResolve=r);
  
//         context.drawImage(video, 0, 0, w, h);
//         let base64ImageData = canvas.toDataURL();
//         frames.push(base64ImageData);
  
//         currentTime += interval;
//       }

//       resolve(frames);
//     });
//   }

//   return (
//     <div id="demo-page">
//         {/* <video id="cube" crossorigin="anonymous">
//           <source src="/assets/cubedemo.mp4" type="video/mp4"/>
//         </video> */}
//         <canvas id="new-canvas" width={size?.innerWidth || 0} height={size?.innerHeight || 0} ></canvas>
//         <script>

//           ({
//             var frameNumber = 0, // start video at frame 0
//             // lower numbers = faster playback
//             playbackConst = 500, 
//             // get page height from video duration
//             setHeight = document.getElementById("set-height"), 
//             // select video element         
//             vid = document.getElementById('v0'); 
//             // var vid = $('#v0')[0]; // jquery option
        
//             // dynamically set the page height according to video length
//             vid.addEventListener('loadedmetadata', function() {
//               setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
//             });
            
            
//             // Use requestAnimationFrame for smooth playback
//             function scrollPlay(){  
//               var frameNumber  = window.pageYOffset/playbackConst;
//               vid.currentTime  = frameNumber;
//               window.requestAnimationFrame(scrollPlay);
//             }
            
//             window.requestAnimationFrame(scrollPlay);
//           })()
//         </script>
//     </div>
//   )
// }

// export default Demo;