import React, { useState } from "react";
import { withWeb3Contract } from "../../chainstate/Web3StateWrap";
import { withAccount } from "../../chainstate/Web3Wrap";
import { withSChain } from "../../chainstate/SideChainWrap";
import { Store } from "../../../common/Store";
import { addProvider } from "./../../../common/Actions";

function MyDisplayComponent(props: any) {
  const { state, dispatch } = React.useContext(Store);
  const { web3State, sChainState } = props;
  const [providerName, setProviderName] = useState("");

  //console.log("state", state);
  //console.log("props", props);
  console.log("MyDisplayComponent, eth account:", web3State.accounts[0]);

  return (
    <div className="container">
      <p>account: {props.web3State.accounts}</p>

      <input type="text" />
      <button
        className="btn btn-outline-primary"
        onClick={() => {
          console.log("MyDisplay.click()");
        }}
      >
        Add Provider
      </button>
    </div>
  );
}

export default withWeb3Contract(withSChain(MyDisplayComponent));
