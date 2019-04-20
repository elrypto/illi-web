import React, { useState, useEffect } from "react";
import { loadChainState } from "./../../../common/Actions";
import {Store} from './../../../common/Store';
import { clearScreenDown } from "readline";



export default function ChainData() {
  const {state, dispatch} = React.useContext(Store);
  const [inited, setInited] = useState(false);



  const waitAndLoad = async() => {
    await loadChainState(dispatch);
  }
  


  useEffect(() => { 
    console.log("useEffect(), inited:", inited);
     
    //waitAndLoad();
    setInited(true);
      
  }, [inited])
  

  waitAndLoad();
  
  console.log("state", state);

  const { web3State, sChainState } = state;
  return (
    <div>
      <p>Chain Dddd</p>
      <p>dataVal: {inited.toString()}</p>
      <p>web3: {web3State.web3}</p>

    </div>
  )
}
