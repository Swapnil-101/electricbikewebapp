import { useState,useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import MainData from "./components/MainData";
import Option from "./components/Option";

const App = () => {
  // const [sds, setSds] = useState(false);

  useEffect(()=>{
    if(window.innerWidth < 1370){
      document.body.style.zoom=0.67;
    }
  },[])
  return (
    <div className="" style={{ fontFamily: "Poly" }}>
      <Header />
      <Option/>
      
      {/* <Dropdown style={sds && { display: "flex", position: "absolute" }} /> */}
      <MainData/>
    </div>
  );
};

export default App;
