import * as React from "react";
import { Store } from "../common/Store";
import { IProvider, Dispatch } from "./../common/Interfaces";
import { addProvider, loadWeb3 } from "../common/Actions";
import IlliEthContract from "./../contracts/IlliEth.json";
import { IWeb3State } from "./../common/Interfaces";
import _ from "lodash";

export default function RegisterProvider(props: any): Array<JSX.Element> | any {
  const { state, dispatch } = React.useContext(Store);
  const { web3State, sChainState } = state;

  const [currentProvider, setProvider] = React.useState({ name: "" });
  const [name, setName] = React.useState("");

  return (
    <div className="container-fluid">
      <div className="card-body col-md-6">
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
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}
