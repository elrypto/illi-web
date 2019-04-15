import React from "react";
import { Store } from "./common/Store";
import { Link } from "@reach/router";

export default function App(props: any): JSX.Element {
  const { state } = React.useContext(Store);

  return (
    <React.Fragment>
      <header className="header">
        <div>
        <h4>illuminate</h4>
          <p>solutions on demand, any time</p>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
        </div>
      </header>
      {props.children}
    </React.Fragment>
  );
}
