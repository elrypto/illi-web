import React from "react";
import { Store } from "./../common/Store";


const ProviderList = React.lazy<any>(() =>
  import("./../components/ProviderList")
);

export default function Main() {
  const { state, dispatch } = React.useContext(Store);
  
  return (

      <React.Suspense fallback={<div>loading...</div>}>
        <section className="episode-layout">
          
        </section>
      </React.Suspense>
 
  );
}
