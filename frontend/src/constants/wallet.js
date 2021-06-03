import { AbstractConnector } from "@web3-react/abstract-connector";
import INJECTED_ICON_URL from "../assets/images/arrow-right.svg";
import METAMASK_ICON_URL from "../assets/images/metamask.png";
import { injected } from "../connectors";

export const SUPPORTED_WALLETS = {
  INJECTED: {
    connector: injected,
    name: "Injected",
    iconURL: INJECTED_ICON_URL,
    description: "Injected web3 provider.",
    href: null,
    color: "#010101",
    primary: true,
  },
  METAMASK: {
    connector: injected,
    name: "MetaMask",
    iconURL: METAMASK_ICON_URL,
    description: "Easy-to-use browser extension.",
    href: null,
    color: "#E8831D",
  },
};
