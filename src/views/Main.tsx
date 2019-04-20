import React from "react";
import { Store } from "./../common/Store";
import { loadWeb3, loadSChain, loadChainState } from "./../common/Actions";

const ProviderList = React.lazy<any>(() =>
  import("./../components/ProviderList")
);

export default function Main() {
  const { state, dispatch } = React.useContext(Store);
  const { web3State } = state.web3State;
  const { sChainState } = state.sChainState;

  React.useEffect(() => {
    console.log("useEffect()");
    console.log("state:", state);
    console.log("webstate:", web3State);
    console.log("schainstate:", sChainState);
    console.log("!webstate=", !web3State);
    console.log("!schainstate:", !sChainState);


    async function loadFromAction() {
      await loadChainState(dispatch);
    }

    //if (!web3State || !sChainState) {
      
    //}
    loadFromAction();

  }, [web3State, sChainState]);

  //console.log(state);

  return (

      <React.Suspense fallback={<div>loading...</div>}>
        <section className="episode-layout">
          
        </section>
      </React.Suspense>
 
  );
}
