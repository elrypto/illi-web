import React from "react";
import { Store } from "./../common/Store";
import { fetchProviders } from "./../common/Actions";


const ProviderList = React.lazy<any>(() => import("./../components/ProviderList"));


export default function Main() {
  const { state, dispatch } = React.useContext(Store);
  const {providers} = state.providerState;

  
  React.useEffect(() => {
    providers.length === 0 && fetchProviders(dispatch);
  });


  return (
    <React.Fragment>
      <React.Suspense fallback={<div>loading...</div>}>
        <section className="episode-layout">
         <ProviderList providers={providers} />
        </section>
      </React.Suspense>
    </React.Fragment>
  );
}
