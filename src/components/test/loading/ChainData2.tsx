import React, { Component } from 'react'

interface IState {
  ready:string;
}


export default class ChainData2 extends Component {

  state:IState = {
    ready: "not ready"
  }

  waitAndLoad = async() => {
    console.log("wait and load()");

    /*window.setTimeout(function(){
      this.setState("ready now");
    }, 5000);*/

    let currentThis = this;
    window.setInterval(function(currentThis:any){
      console.log("reached interval");
    }, 7000);
  }

  async componentWillMount(){
    console.log("componentWillMount()");

    await this.waitAndLoad();
    console.log("done blocking");

  }

  render() {
    return (
      <div>
         <p>Chain D2</p>
         <p>ready?: {this.state.ready}</p>
      </div>
    )
  }
}
