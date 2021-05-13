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
};
html {
    height: 100%;
  };
body {
  height: 100%;
  overflow: hidden;
  font-family: SegoeUI-SemiBold-final, Segoe UI Semibold, SegoeUI-Regular-final,
    Segoe UI, "Segoe UI Web (West European)", Segoe, -apple-system,
    BlinkMacSystemFont, Roboto, Helvetica Neue, Tahoma, Helvetica, Arial,
    sans-serif;
};
#root {
  height: 100%;
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
