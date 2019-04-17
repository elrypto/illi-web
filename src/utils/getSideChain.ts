import { ISideChainState } from "./../common/Interfaces";
import LoomClient from "./LoomClient";

export const getSChainClient = async (contractJson: any):Promise<any | undefined> => {
  try {

    /*
        TODO:GET FROM ENV!
    */

      let writeUrl = 'ws://192.168.43.120:46658/websocket';
      let readUrl = 'ws://192.168.43.120:46658/queryws';
      let networkId = 'default';
  
      if (process.env.NETWORK === 'extdev') {
        writeUrl = 'ws://extdev-plasma-us1.dappchains.com:80/websocket';
        readUrl = 'ws://extdev-plasma-us1.dappchains.com:80/queryws';
        networkId = 'extdev-plasma-us1';
      }


    //console.log("loading schain with:", writeUrl, readUrl, networkId, contractJson);

    return  new LoomClient(contractJson, writeUrl, readUrl, networkId);
   
  } catch (error) {
    alert(
      `Failed to load sidechain or  side chain contract. Check console for details.`
    );
    console.error(error);
  }
};
