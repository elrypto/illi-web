import React from "react";
import { Store } from "./../common/Store";
import { IProvider } from "./../common/Interfaces";
import { fetchProviders } from "./../common/Actions";


export default function ProviderList(props: any): Array<JSX.Element> | any {
  const { state, dispatch } = React.useContext(Store);
  const { web3State, sChainState } = state;
  const { providers } = state.providerState;

  console.log(state, " ", providers);

  React.useEffect(() => {
    providers.length === 0 && fetchProviders(web3State, sChainState, dispatch);
  });

  let noProviders = <div>None</div>;

  if (!providers || providers.length < 1) {
    return noProviders;
  }

  return providers.map((prov: IProvider) => {
    return (
      <section key={prov.name} className="episode-box">
        <div>{prov.name}</div>
      </section>
    );
  });
}
