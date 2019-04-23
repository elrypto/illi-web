import React, { useState } from "react";
import { withWeb3Contract } from "../../chainstate/Web3StateWrap";
import { withAccount } from "../../chainstate/Web3Wrap";
import { withSChain } from "../../chainstate/SideChainWrap";
import { Store } from "../../../common/Store";
import { addProvider } from "./../../../common/Actions";
import { IProvider } from "../../../common/Interfaces";

function MyDisplayComponent(props: any) {
  const { state, dispatch } = React.useContext(Store);
  const { web3State, sChainState } = props;
  const [providerName, setProviderName] = useState("");

  return (
    <div className="container">
      <p>account: {props.web3State.accounts}</p>

      <input
        type="text"
        value={providerName}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          const { name, value }: any = e.target;
          setProviderName(value);
        }}
      />
      <button
        className="btn btn-outline-primary"
        onClick={() => {
          console.log("MyDisplay.addProvider.click(), value:", providerName);
          const newProvider: IProvider = { name: providerName };
          addProvider(newProvider, web3State, sChainState, dispatch);
          setProviderName('');
        }}
      >
        Add Provider
      </button>
    </div>
  );
}

export default withWeb3Contract(withSChain(MyDisplayComponent));
