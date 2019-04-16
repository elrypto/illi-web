import { IWeb3State } from "../common/Interfaces";

export const web3PayloadForContract = (contractJson:any):any => {
   

    /*
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
    */
}