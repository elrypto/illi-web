import React, { Component } from "react";
import {withWeb3, withAccount} from './Web3Wrapper';

const Web3ContractContext = React.createContext({});

class Web3ContractWrapped extends Component {
  state = {};

  componentDidMount() {
    this.setState({
      inited: false
    });
  }

  setInit = () => {
    console.log("setInit()");
    this.setState({ inited: true });
  };

  render() {
    const { inited } = this.state;
    const contextValue = { 
      inited,
      setInited: this.setInit
    };
    

    return (
      <Web3ContractContext.Provider value={contextValue}>
        {this.props.children}
        <span>inited: {inited ? "yes" : "no"}</span>
      </Web3ContractContext.Provider>
    )
  }
}


const Web3ContractWrappedConsumer = Web3ContractContext.Consumer;
export {Web3ContractWrappedConsumer};
export default withWeb3(withAccount(Web3ContractWrapped));