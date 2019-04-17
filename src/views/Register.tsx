import React, { useState, lazy } from "react";
import { Store } from "./../common/Store";
import { loadWeb3, loadSChain } from "../common/Actions";

const RegisterProvider = React.lazy(() =>
  import("./../components/RegisterProvider")
);

export default function Register() {
  const { state, dispatch } = React.useContext(Store);
  const { web3State } = state.web3State;
  const { sChainState } = state.sChainState;

  React.useEffect(() => {
    if (!web3State) {
      loadWeb3(dispatch);
    }

    if (!sChainState) {
      loadSChain(dispatch);
    }
  }, [web3State, sChainState]);

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <RegisterProvider />
    </React.Suspense>
  );
}
