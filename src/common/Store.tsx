import React from "react";
import { IProviderState, IAction, IWeb3State, IAppState } from "./Interfaces";
import {ADD_PROVIDER, FETCH_PROVIDERS_DATA, LOAD_WEB3, LOAD_SCHAIN} from "./Actions";

const initialState: IAppState = {
  web3State: {
    web3:null,
    accounts:[],
    contract:null
  },
  providerState: {
    providers: []
  },
  sChainState: {
    sChainContract: null,
    sChainClient: null
  }
};

export const Store = React.createContext<IAppState | any>(initialState);

function reducer(state: IAppState, action: IAction | any): IAppState {
  switch (action.type) {
    case FETCH_PROVIDERS_DATA:
      return { ...state, providerState : action.payload.providerState };
    case ADD_PROVIDER:
      return { ...state, providerState : {providers: [...state.providerState.providers, action.payload] }};
    case LOAD_WEB3:
      return { ...state, web3State : action.payload.web3State };
    case LOAD_SCHAIN:
      return { ...state, sChainState: action.payload };
    default:
      return state;
  }
}

export function StoreProvider(props: any): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
}
