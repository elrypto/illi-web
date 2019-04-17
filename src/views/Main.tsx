import React from "react";
import { Store } from "./../common/Store";
import { loadWeb3, loadSChain } from "./../common/Actions";

const ProviderList = React.lazy<any>(() =>
  import("./../components/ProviderList")
);

export default function Main() {
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

  //console.log(state);

  return (

      <React.Suspense fallback={<div>loading...</div>}>
        <section className="episode-layout">
          <ProviderList />
        </section>
      </React.Suspense>
 
  );
}
