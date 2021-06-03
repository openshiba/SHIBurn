import { AbstractConnector } from "@web3-react/abstract-connector";
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import { darken, lighten } from "polished";
import React, { useMemo } from "react";
import { Activity } from "react-feather";
import styled, { css } from "styled-components";
import { injected } from "../../connectors";
import { shortenAddress } from "../../utils";
import { ButtonSecondary } from "../Button";

import Identicon from "../Identicon";

import { RowBetween } from "../Row";
import WalletModal from "../WalletModal";

const IconWrapper = styled.div`
  ${({ theme }) => theme.flexColumnNoWrap};
  align-items: center;
  justify-content: center;
  & > * {
    height: ${({ size }) => (size ? size + "px" : "32px")};
    width: ${({ size }) => (size ? size + "px" : "32px")};
  }
`;

const Web3StatusGeneric = styled(ButtonSecondary)`
  ${({ theme }) => theme.flexRowNoWrap}
  width: 100%;
  align-items: center;
  padding: 0.5rem;
  border-radius: 12px;
  cursor: pointer;
  user-select: none;
  :focus {
    outline: none;
  }
`;
const Web3StatusError = styled(Web3StatusGeneric)`
  background-color: ${({ theme }) => theme.red1};
  border: 1px solid ${({ theme }) => theme.red1};
  color: ${({ theme }) => theme.white};
  width: 300px !important;
  float: right;
  font-weight: 500;
  :hover,
  :focus {
    background-color: ${({ theme }) => darken(0.1, theme.red1)};
  }
`;

const Web3StatusConnect = styled(Web3StatusGeneric)`
  background-color: ${({ theme }) => theme.primary4};
  border: none;
  color: ${({ theme }) => theme.primaryText1};
  font-weight: 500;
  :hover,
  :focus {
    border: 1px solid ${({ theme }) => darken(0.05, theme.primary4)};
    color: ${({ theme }) => theme.primaryText1};
  }
  ${({ faded }) =>
    faded &&
    css`
      background-color: ${({ theme }) => theme.primary5};
      border: 1px solid ${({ theme }) => theme.primary5};
      color: ${({ theme }) => theme.primaryText1};
      :hover,
      :focus {
        border: 1px solid ${({ theme }) => darken(0.05, theme.primary4)};
        color: ${({ theme }) => darken(0.05, theme.primaryText1)};
      }
    `}
`;

const Web3StatusConnected = styled(Web3StatusGeneric)`
  background-color: ${({ pending, theme }) =>
    pending ? theme.primary1 : theme.bg1};
  border: 1px solid
    ${({ pending, theme }) => (pending ? theme.primary1 : theme.bg2)};
  color: ${({ pending, theme }) => (pending ? theme.white : theme.text1)};
  font-weight: 500;
  width: 300px !important;
  float: right;
  :hover,
  :focus {
    background-color: ${({ pending, theme }) =>
      pending ? darken(0.05, theme.primary1) : lighten(0.05, theme.bg1)};
    :focus {
      border: 1px solid
        ${({ pending, theme }) =>
          pending ? darken(0.1, theme.primary1) : darken(0.1, theme.bg2)};
    }
  }
`;

const Text = styled.p`
  flex: 1 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 0.5rem 0 0.25rem;
  font-size: 1rem;
  width: fit-content;
  font-weight: 500;
`;

const NetworkIcon = styled(Activity)`
  margin-left: 0.25rem;
  margin-right: 0.5rem;
  width: 16px;
  height: 16px;
`;

function StatusIcon({ connector }) {
  if (connector === injected) {
    return <Identicon />;
  }
  return null;
}

function Web3StatusInner() {
  const { account, connector, error } = useWeb3React();
  let toggleWalletModal = () => {};
  if (account) {
    return (
      <Web3StatusConnected
        id="web3-status-connected"
        onClick={toggleWalletModal}
      >
        <Text>{shortenAddress(account)}</Text>
        {connector && <StatusIcon connector={connector} />}
      </Web3StatusConnected>
    );
  } else if (error) {
    return (
      <Web3StatusError onClick={toggleWalletModal}>
        <NetworkIcon />
        <Text>
          {error instanceof UnsupportedChainIdError ? `Wrong Network` : `Error`}
        </Text>
      </Web3StatusError>
    );
  } else {
    return (
      <Web3StatusConnect
        id="connect-wallet"
        onClick={toggleWalletModal}
        faded={!account}
      >
        <Text>Connect to a wallet</Text>
      </Web3StatusConnect>
    );
  }
}

export default function Web3Status() {
  const { active, account } = useWeb3React();
  const contextNetwork = useWeb3React("NETWORK");

  if (!contextNetwork.active && !active) {
    return null;
  }

  return (
    <>
      <Web3StatusInner />
      <WalletModal />
    </>
  );
}
