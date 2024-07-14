import {  useState,useEffect } from "react"
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
const App = () => {
  let heroData = [
    {text1: "dive into", text2: "What you love"},
    {text1: "One I will ", text2: "Be a Software Eng"},
    {text1: "Every thing is", text2: "Possible in Life"}
  ]
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return(
    <div>
      
        <Background playStatus={playStatus} heroCount={heroCount}/>
       <Navbar/>
       <Hero 
          setPlayStatus={setPlayStatus}
          heroData={heroData[heroCount]}
          heroCount={heroCount}
          setHeroCount={setHeroCount}
          playStatus={playStatus}
       />
      
    </div>
  )
}
export default App