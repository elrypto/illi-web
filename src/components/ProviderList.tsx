import React, { useState } from "react";
import { Store } from "./../common/Store";
import { withWeb3Contract } from "./chainstate/Web3StateWrap";
import { withSChain } from "./chainstate/SideChainWrap";
import { fetchProviders } from "../common/Actions";

function ProviderList(props: any): Array<JSX.Element> | any {
  const { state, dispatch } = React.useContext(Store);
  const { web3State, sChainState } = props;
  const [inited, setInited] = useState(false);

  /* React.useEffect(() => {
    fetchProviders(web3State, sChainState, dispatch);
    setInited(true)
  }, [inited])*/

  const loadProviders = async () => {
    fetchProviders(web3State, sChainState, dispatch);
    setInited(true);
  };

  if (!inited && sChainState.sChainClient) {
    loadProviders();
  }

  console.log("props", props);
  const { providers } = state.providerState;
  console.log("providers", providers);

  //return providers.map((prov: IProvider) => {
  return (
    <React.Fragment>
      <span>Providers</span>
      <div>{providers.length > 0 ? JSON.stringify(providers) : "none"}</div>
    </React.Fragment>
  );
  // });
  //   <section key={prov.name} className="episode-box">
  //     <div>{prov.name}</div>
  //    </section>
}

export default withWeb3Contract(withSChain(ProviderList));
