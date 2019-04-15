import React from 'react'
import { IProvider } from "./../common/Interfaces";


export default function ProviderList(props: any): Array<JSX.Element> | any{
  const { providers } = props;
  
  console.log(JSON.stringify(props));

  let noProviders = <div>None</div>;

  if (!providers || providers.length < 1){
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
