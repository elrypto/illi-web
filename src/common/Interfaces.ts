/**
|--------------------------------------------------
|  Interfaces
|--------------------------------------------------
*/

export type Dispatch = React.Dispatch<IAction>;



export interface IProps {
  providers: Array<IProvider>;
}

export interface IProviderState {
  providers: Array<any>;
}

export interface IAction {
  type: string;
  payload: Array<IProvider>;
}

export interface IProvider {
  name: string;
}
