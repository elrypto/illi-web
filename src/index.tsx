import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StoreProvider, Store } from "./common/Store";
import { Router, RouteComponentProps } from "@reach/router";
import Main from "./views/Main";
import Register from "./views/Register";
import './bootstrap.min.css';

const RouterPage = (props: { pageComponent: JSX.Element } & RouteComponentProps) => props.pageComponent;


ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path="/">
        <RouterPage pageComponent={<Main />} path="/" />
        <RouterPage pageComponent={<Register />} path="/register" />
      </App>
    </Router>
  </StoreProvider>,
  document.getElementById("root")
);
