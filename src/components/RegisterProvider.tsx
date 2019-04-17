import * as React from "react";
import { Store } from "../common/Store";
import { addProvider } from "../common/Actions";


export default function RegisterProvider(props: any): Array<JSX.Element> | any {
  const { state, dispatch } = React.useContext(Store);
  const { web3State, sChainState } = state;

  const [currentProvider, setProvider] = React.useState({ name: "" });
  const [name, setName] = React.useState("");

  return (
    <div className="container-fluid">
      <div className="card-body col-md-6">
        <p>Detected Ethereum Address: {web3State.accounts[0]}</p>
        <p>Service Provider Name:</p>
        <input
          type="text"
          className="form-control"
          placeholder="Provider name"
          value={currentProvider.name}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            const { name, value }: any = e.target;
            setName(value);
            currentProvider.name = value;
            setProvider(currentProvider);
          }}
        />
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => {
            addProvider(currentProvider, web3State, sChainState, dispatch);
            setName('');
            currentProvider.name = '';
            setProvider(currentProvider); 
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}
