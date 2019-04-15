import React from "react";
import { IProviderState, IAction } from "./Interfaces";
import {ADD_PROVIDER, FETCH_PROVIDERS_DATA} from "./Actions";

const initialState: IProviderState = {
  providers: []
};

export const Store = React.createContext<IProviderState | any>(initialState);

function reducer(state: IProviderState, action: IAction): IProviderState {
  switch (action.type) {
    case FETCH_PROVIDERS_DATA:
      return { ...state, providers: action.payload };
    case ADD_PROVIDER:
      return { ...state, providers: [...state.providers, action.payload] };
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
