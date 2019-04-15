import React from "react";
import { Store } from "./Store";
import { IProvider, IAction } from "./Interfaces";


export const FETCH_PROVIDERS_DATA = "FETCH_PROVIDERS_DATA";
export const ADD_PROVIDER = "ADD_PROVIDER";


export const fetchProviders = async (dispatch: any) => {
  let providers: Array<IProvider> = [{ name: "Morpheus" }, { name: "Elaine" }];

  return dispatch({
    type: FETCH_PROVIDERS_DATA,
    payload: providers
  });
};

export const addProvider = async (provider: IProvider, dispatch: any) => {
  console.log("actions.addProvider()", provider);
  return dispatch({
    type: ADD_PROVIDER,
    payload: provider
  });
};

/*export const toggleFavAction = (
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
