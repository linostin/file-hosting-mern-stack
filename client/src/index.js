import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./reducers";
import { Provider } from "react-redux";
import styled, { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

ReactDOM.render(
  <>
    <Provider store={store}>
      <Global />
        <App />
    </Provider>
  </>,
  document.getElementById("root")
);
