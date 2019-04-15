import React, {useState} from 'react'
import RegisterProvider from './../components/RegisterProvider';
import {Store} from './../common/Store';
import { IProviderState, IProvider } from '../common/Interfaces';


export default function Register() {
  const { state, dispatch } = React.useContext(Store);
 
  return (
    <div>
      <RegisterProvider />
    </div>
  )
}
