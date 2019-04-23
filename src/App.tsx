import React from "react";
import { Store } from "./common/Store";
import { Link } from "@reach/router";
import Header from "./views/Header";
import Footer from "./views/Footer";

export default function App(props: any): JSX.Element {
  const { state } = React.useContext(Store);

  return (
    <React.Fragment>
      <Header />
        {props.children}
      <Footer />
    </React.Fragment>
  );
}
