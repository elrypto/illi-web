import React from 'react';
import Web3Wrap from '../../chainstate/Web3Wrap';
import Web3StateWrap from '../../chainstate/Web3StateWrap';
import SideChainWrap from './../../chainstate/SideChainWrap';
import IlliEth from './../../../contracts/IlliEth.json';
import IlliApp from './../../../contracts/IlliApp.json';
import MyDisplayComponent from './MyDisplayComponent';

export default function ChainStateLoadingTest() {
  return (
    <React.Fragment>
      <p>Testing Loading Blockchain and Side Chain </p>
      <Web3Wrap>
        <Web3StateWrap contractJSON={IlliEth}>
          <SideChainWrap contractJSON={IlliApp}>
            <MyDisplayComponent />
          </SideChainWrap>
        </Web3StateWrap>
      </Web3Wrap>
    </React.Fragment>
  );
}
