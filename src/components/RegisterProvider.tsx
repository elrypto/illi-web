import * as React from "react";
import {Store} from '../common/Store';
import  {IProvider, Dispatch} from './../common/Interfaces';
import { addProvider, loadWeb3 } from "../common/Actions";
import IlliEthContract from './../contracts/IlliEth.json';
import {IWeb3State} from './../common/Interfaces';
import _ from "lodash";


export default function RegisterProvider(props: any): Array<JSX.Element> | any{
  const { state, dispatch } = React.useContext(Store);
  
  const [currentProvider, setProvider] = React.useState({name:""});
  const [name, setName] = React.useState("");
  
 
  /*
  const [initialized, setInitialized] = React.useState(false);
  const [web3, setWeb3] = React.useState(null);
  const [accounts, setAccounts]  = React.useState(null);
  const [contract, setContract] = React.useState(null);

  
  React.useEffect(() => {
   
    async function initWeb3(){
      console.log("initWeb3()");
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const networkId = await web3.eth.net.getId();
      //const deployedNetwork = IlliEthContract.networks[networkId];
      const deployedNetwork = getDeployedNetwork(IlliEthContract, networkId);
      const instance = new web3.eth.Contract(
        IlliEthContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      setWeb3(web3);
      setAccounts(accounts);
      setContract(instance);
    }


    initWeb3().then();
      
    setInitialized(true);
  }, [initialized]);
*/

  console.log(state);

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

