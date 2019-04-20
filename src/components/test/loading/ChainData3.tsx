import React, { useState, useEffect } from "react";
import { loadChainState } from "./../../../common/Actions";
import {Store} from './../../../common/Store';
import IlliEthContract from "./../../../contracts/IlliEth.json";
import IlliSChainContract from "./../../../contracts/IlliApp.json";
import { web3PayloadForContract } from "./../../../utils/web3Util";
import { getSChainClient } from "./../../../utils/getSideChain";
import { IWeb3State } from "../../../common/Interfaces";
import _ from 'lodash';


export default function ChainData3() {
  const {state, dispatch} = React.useContext(Store);
 
  const waitAndLoad = async() => {
    await loadChainState(dispatch);
  }
  

  if (!state.web3State.web3 || !state.sChainState.sChainClient){
    waitAndLoad();
  }

  console.log(state);
  /*console.log("webstate", webState);
  
  if (webState){
    console.log("addr", webState.accounts[0]);
  }*/

  const { web3State, sChainState } = state;
  return (
    <div>
      <p>Chain D3</p>
     
     
    </div>
  )
}
