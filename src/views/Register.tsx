import React, {useState, lazy} from 'react'
//import RegisterProvider from './../components/RegisterProvider';
import {Store} from './../common/Store';
import { loadWeb3 } from "../common/Actions";


const RegisterProvider = React.lazy(() => import ('./../components/RegisterProvider'));

export default function Register() {
  const { state, dispatch } = React.useContext(Store);
  const {web3State} = state.web3State;

  React.useEffect(() => {
    if (!web3State){
      loadWeb3(dispatch);
    }
  }, [web3State])
 
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <RegisterProvider />
    </React.Suspense>
  )
}
