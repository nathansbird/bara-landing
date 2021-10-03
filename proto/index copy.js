import { useEffect, useState, useRef } from "react";

const Home = () => {
  const [scrollEffect, setScrollEffect] = useState({
    actual: 0,
    curved: 0
  });

  const requestRef = useRef()

  const animate = time => {
    setScrollEffect((effect) => {
      const { actual, curved } = effect;
      const delta = (actual - curved) * 0.1;  
      console.log(actual, curved)   
      return {
        actual,
        curved: curved + delta
      }
    });
    requestAnimationFrame(animate)
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  const handleScroll = () => {
    setScrollEffect(effect => ({...effect, actual: window.scrollY}))
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  })

  return (
    <div id="home-page">
      <div id="top-float">
        <p className="name-text">BĀRĀ</p>
      </div>
      {/* <div id="center">
        <img className="primary-logo" src="/assets/Layer_2.svg"/>
      </div> */}
      <div id="center-text">
        <h1 className="primary-text top" style={{
          transform: `translateX(-${scrollEffect.curved}px)`
        }}>BĀRĀ</h1>
        <h1 className="primary-text bottom" style={{
          transform: `translateX(${scrollEffect.curved}px)`
        }}>SHOES</h1>
      </div>
      {/* <div id="bottom-float">
        <p className="down-text">Browse Collection</p>
        <i className="material-icons down-arrow">south</i>
      </div> */}
    </div>
  )
}

export default Home;