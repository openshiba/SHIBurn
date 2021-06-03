import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createWeb3ReactRoot, Web3ReactProvider } from "@web3-react/core";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import getLibrary from "./utils/getLibrary";
import ThemeProvider, { FixedGlobalStyle, ThemedGlobalStyle } from "./theme";

const Web3ProviderNetwork = createWeb3ReactRoot("NETWORK");

if (!!window.ethereum) {
  window.ethereum.autoRefreshOnNetworkChange = false;
}

ReactDOM.render(
  <StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderNetwork getLibrary={getLibrary}>
        <ThemeProvider>
          <ThemedGlobalStyle />
          <App />
        </ThemeProvider>
      </Web3ProviderNetwork>
    </Web3ReactProvider>
  </StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
