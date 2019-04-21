import React from 'react';
import WithChainState from './../../chainstate/WithChainState';
import Web3Load  from './../web3/Web3Load';
import Web3Wrapped from '../web3/Web3Wrapped';
import Web3Wrapper from '../web3/Web3Wrapper';

//React.lazy(() => import("./../../RegisterProvider"));
////const RegisterProvider = React.lazy(() => import("./../../RegisterProvider"));
//const LoadAllProviders = React.lazy(() => import("./../../illi/LoadAllProviders"));

export default function LoadTest2() {
  return (
    <React.Fragment>
      <p>LoadTest2</p>
      
      <Web3Wrapper>
        <Web3Wrapped />
      </Web3Wrapper>
    </React.Fragment>
  );
}
