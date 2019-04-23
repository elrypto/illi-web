import React from 'react'
import { withWeb3Contract } from '../../chainstate/Web3StateWrap';
import { withAccount } from '../../chainstate/Web3Wrap';
import { withSChain } from '../../chainstate/SideChainWrap';

function MyDisplayComponent(props:any) {
  console.log("MyDisplayComponent", props);
  
  return (
    <div>
      <p>account: {props.web3State.accounts}</p>
      
      <input type="text"/>
      <button className="btn btn-outline-primary"
      >
       Add Provider
      </button>
    </div>
  )
}

export default withWeb3Contract(withSChain(MyDisplayComponent));
