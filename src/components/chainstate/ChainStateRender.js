import React from 'react'
import Web3Wrap from './Web3Wrap';
import Web3StateWrap from './Web3StateWrap';
import SideChainWrap from './SideChainWrap';
import IlliEth from './../../contracts/IlliEth.json';
import IlliApp from './../../contracts/IlliApp.json';


/**
|--------------------------------------------------
| Ensure that child componenets (props.children)
| use appropriate "withXXXXXXX" injectiions on export
| from Web3Wrap, Web3StateWrap or SideChainWrap
|--------------------------------------------------
*/
export default function ChainStateRender(props) {
  return (
    <React.Fragment>
    <Web3Wrap>
      <Web3StateWrap contractJSON={IlliEth}>
        <SideChainWrap contractJSON={IlliApp}>
         {props.children}
        </SideChainWrap>
      </Web3StateWrap>
    </Web3Wrap>
  </React.Fragment>
  )
}
