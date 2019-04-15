import React from "react";
import { Store } from "./../common/Store";
import { fetchProviders } from "./../common/Actions";
import { IProvider, IProps } from "../common/Interfaces";
import { any } from "prop-types";
import { clearScreenDown } from "readline";



export default function Main() {
  const { state, dispatch } = React.useContext(Store);

  const ProviderList = React.lazy<any>(() =>
    import("./../components/ProviderList")
  );

  React.useEffect(() => {
    state.providers.length === 0 && fetchProviders(dispatch);
  });


  return (
    <React.Fragment>
      <React.Suspense fallback={<div>loading...</div>}>
        <section className="episode-layout">
         <ProviderList providers={state.providers} />
        </section>
      </React.Suspense>
    </React.Fragment>
  );
}
