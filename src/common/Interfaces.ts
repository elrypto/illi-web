/**
|--------------------------------------------------
|  Interfaces
|--------------------------------------------------
*/

export type Dispatch = React.Dispatch<IAction>;

export interface IAppState {
  web3State: IWeb3State;
  providerState: IProviderState;
  sChainState: ISideChainState;
}

export interface IWeb3State {
  web3: any;
  accounts: any;
  contract: any;
}

export interface ISideChainState {
  sChainClient: any;
  sChainContract: any;
}

export interface IProps {
  providers: Array<IProvider>;
}

export interface IProviderState {
  providers: Array<any>;
}

export interface IAction {
  type: string;
  payload: IAppState;
}

export interface IProvider {
  name: string;
}
