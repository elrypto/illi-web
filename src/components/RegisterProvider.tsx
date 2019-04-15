import * as React from "react";
import {Store} from '../common/Store';
import  {IProvider, Dispatch} from './../common/Interfaces';
import { addProvider } from "../common/Actions";


export interface IProps {
  dispatch:Dispatch;
}

interface IState {
  name: string
}




export default function RegisterProvider(props: any): Array<JSX.Element> | any{
  const { state, dispatch } = React.useContext(Store);
  const [currentProvider, setProvider] = React.useState({name:""});
  const [name, setName] = React.useState("");

  return (
    <div className="container-fluid">
      <div className="card-body col-md-6">
        <input
          type="text"
          className="form-control"
          placeholder="Provider name"
          value={currentProvider.name}
          onChange={(e:React.FormEvent<HTMLInputElement>) => {
              const{name, value}:any = e.target;
              setName(value);
              currentProvider.name = value;
              setProvider(currentProvider);
            }
          }
        />
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => {addProvider(currentProvider, dispatch);}}
        >
          Add
        </button>
      </div>
    </div>
  );
}



/*
export default class RegisterProvider extends React.Component<{}, IState> {
  
  state:IState= {
    name: ""
  }

  addToProviders = (e: any) => {
   
    console.log("adding...", this.state.name);
    const provider:IProvider = {name: this.state.name};
    //dispatch(addProvider(provider, dispatch));
  };

  nameChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const{name, value}:any = e.target;
    this.setState({
      name:value
    });
  };

  public render() {
    // const { submitSuccess, errors } = this.state;
    return (
      <div className="container-fluid">
        <div className="card-body col-md-6">
          <input
            type="text"
            className="form-control"
            value={this.state.name}
            onChange={this.nameChangeHandler}
            placeholder="Provider name"
          />
          <button
            type="button"
            onClick={this.addToProviders}
            className="btn btn-outline-secondary"
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}
*/