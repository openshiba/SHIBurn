import { Web3Provider } from "@ethersproject/providers";
import { InjectedConnector } from "@web3-react/injected-connector";
import getLibrary from "../utils/getLibrary";

import { NetworkConnector } from "./NetworkConnector";
import SHIB_LOGO_URL from "../logo.svg";

const INFURA_KEY = process.env.REACT_APP_INFURA_KEY;

if (typeof INFURA_KEY === "undefined") {
  throw new Error(
    `REACT_APP_INFURA_KEY must be a defined environment variable`
  );
}

const NETWORK_URLS = {
  [1]: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
  [4]: `https://rinkeby.infura.io/v3/${INFURA_KEY}`,
  [3]: `https://ropsten.infura.io/v3/${INFURA_KEY}`,
  [5]: `https://goerli.infura.io/v3/${INFURA_KEY}`,
  [42]: `https://kovan.infura.io/v3/${INFURA_KEY}`,
};

const SUPPORTED_CHAIN_IDS = [1, 4, 3, 42, 5];

export const network = new NetworkConnector({
  urls: NETWORK_URLS,
  defaultChainId: 1,
});

let networkLibrary;
export function getNetworkLibrary() {
  return (networkLibrary = networkLibrary ?? getLibrary(network.provider));
}

export const injected = new InjectedConnector({
  supportedChainIds: SUPPORTED_CHAIN_IDS,
});
