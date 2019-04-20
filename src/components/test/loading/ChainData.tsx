import React, { useState, useEffect } from "react";



export default function ChainData() {

  const waitAndLoad = async() => {
    console.log("wait and load()");

    window.setTimeout(function(){
      setVal("ready now");
    }, 5000);
  }
  

  const [val, setVal] = useState("not ready");

  useEffect(() => {  
      //setVal("ready now");
     /* async function waitAndSet(){
        window.setTimeout(function(){
          setVal("ready now");
        }, 5000);
       
      }*/

      //waitAndSet();
  }, [val])
  

  waitAndLoad();
  
  return (
    <div>
      <p>Chain Dddd</p>
      <p>dataVal: {val}</p>
    </div>
  )
}
