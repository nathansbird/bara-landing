import { useEffect, useState } from "react";

const Home = () => {
  const [sizing, setSizing] = useState({}); 

  const updateSizing = () => {
    setSizing({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  useEffect(() => {
    updateSizing();
    window.onresize = () => {
      updateSizing();
    }
  }, [])
  
  const sizeToUse = sizing.width * 2.10 < sizing.height ? "HEIGHT" : "WIDTH";

  return (
    <div id="home-page">
      <video id="background-h" 
        width={sizing.width}
        autoPlay={true}
        preload="true"
        muted
        playsInline
        loop={true}
        style={{
          display: sizing.width > sizing.height ? "unset" : "none"
        }}>
        <source src="/assets/horizontal.webm" type="video/webm"></source>
        <source src="/assets/horizontal.mp4" type="video/mp4"></source>
      </video> 
      <video id="background-v"
        width={sizeToUse == "WIDTH" ? sizing.width : undefined}
        height={sizeToUse == "HEIGHT" ? sizing.height : undefined}
        autoPlay={true}
        preload="true"
        muted
        playsInline
        loop={true}
        style={{
          display: sizing.width > sizing.height ? "none" : "unset"
        }}>
        <source src="/assets/vertical.webm" type="video/webm"></source>
        <source src="/assets/vertical.mp4" type="video/mp4"></source>
      </video>
      <div id="center">
        <img className="primary-logo" src="/assets/Layer_2.svg"/>
        <h1 id="coming-soon">COMING SOON</h1>
      </div>
    </div>
  )
}

export default Home;