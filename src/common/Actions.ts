import React from "react";
import { Store } from "./Store";
import { IProvider, IAction } from "./Interfaces";
import getWeb3, { getDeployedNetwork } from "./../utils/getWeb3";
import IlliEthContract from "./../contracts/IlliEth.json";

export const FETCH_PROVIDERS_DATA = "FETCH_PROVIDERS_DATA";
export const ADD_PROVIDER = "ADD_PROVIDER";
export const LOAD_WEB3 = "LOAD_WEB3";

export const loadWeb3 = async (dispatch: any) => {
  try{
    console.log("loadWeb3()");
    const web3 = await getWeb3();
    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = getDeployedNetwork(IlliEthContract, networkId);

    const instance = new web3.eth.Contract(
      IlliEthContract.abi,
      deployedNetwork && deployedNetwork.address
    );
  
    return dispatch({
      type: LOAD_WEB3,
      payload: { web3State: {web3, accounts, contract:instance} }
    });
  } catch (error) {
    // Catch any errors for any of the above operations.
    alert(
      `Failed to load web3, accounts, or contract. Check console for details.`,
    );
    console.error(error);
  }
};

export const fetchProviders = async (dispatch: any) => {
  let providers: Array<IProvider> = [{ name: "Morpheus" }, { name: "Elaine" }];

  return dispatch({
    type: FETCH_PROVIDERS_DATA,
    payload: { providerState: { providers } }
  });
};

export const addProvider = async (provider: IProvider, dispatch: any) => {
  console.log("actions.addProvider()", provider);
  return dispatch({
    type: ADD_PROVIDER,
    payload: provider
  });
};

/*

-- interfaces
export type Dispatch = React.Dispatch<IAction>;


export interface IEpisode {
  id: number;
  name: string;
  image: {
    medium: string;
    original: string;
  };
  season: number;
  number: number;
  summary: string;
  url: string;
}

export interface IState {
  episodes: Array<IEpisode>;
  favorites: Array<IEpisode>;
}

export interface IAction {
  type: string;
  payload: Array<IEpisode> | any;
}

// toggleFavAction = (episode: IEpisode | any, state:IState, dispatch:any): IAction => {
export interface IEpisodeProps {
  episodes: Array<IEpisode>;
  store: { state: IState; dispatch: Dispatch };
  toggleFavAction: (episode: IEpisode, state: IState, dispatch: Dispatch) => IAction;
  favorites: Array<IEpisode>;
}


-- reducer
switch (action.type) {
    case "FETCH_DATA":
      return { ...state, episodes: action.payload };


--action

export const fetchDataAction = async (dispatch: any) => {
  const URL =
    "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
  const data = await fetch(URL);
  const dataJSON = await data.json();
  return dispatch({
    type: "FETCH_DATA",
    payload: dataJSON._embedded.episodes
  });
};


export const toggleFavAction = (
  episode: IEpisode | any,
  state: IState,
  dispatch: any
): IAction => {
  const episodeInFav = state.favorites.includes(episode);

  let dispatchObj = {
    type: "ADD_FAV",
    payload: episode
  };

  if (episodeInFav) {
    const favWithoutEpisode = state.favorites.filter(
      (fav: IEpisode) => fav.id !== episode.id
    );
    dispatchObj.type = "REMOVE_FAV";
    dispatchObj.payload = favWithoutEpisode;
  }

  return dispatch(dispatchObj);
};*/
