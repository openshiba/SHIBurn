import { Contract } from "@ethersproject/contracts";
import { SHIBA_ADDRESS } from "../constants/addresses";

import ERC20_ABI from "../abis/erc20.json";

import { useMemo } from "react";
import { getContract } from "../utils";
import { useActiveWeb3React } from "./web3";

// returns null on errors
export function useContract(
  addressOrAddressMap,
  ABI,
  withSignerIfPossible = true
) {
  const { library, account, chainId } = useActiveWeb3React();

  return useMemo(() => {
    if (!addressOrAddressMap || !ABI || !library || !chainId) return null;
    let address;
    if (typeof addressOrAddressMap === "string") address = addressOrAddressMap;
    else address = addressOrAddressMap[chainId];
    if (!address) return null;
    try {
      return getContract(
        address,
        ABI,
        library,
        withSignerIfPossible && account ? account : undefined
      );
    } catch (error) {
      console.error("Failed to get contract", error);
      return null;
    }
  }, [
    addressOrAddressMap,
    ABI,
    library,
    chainId,
    withSignerIfPossible,
    account,
  ]);
}

// token contract
export function useTokenContract(tokenAddress, withSignerIfPossible) {
  return useContract(tokenAddress, ERC20_ABI, withSignerIfPossible);
}

export function useShibContract(withSignerIfPossible) {
  return useContract(SHIBA_ADDRESS, ERC20_ABI, withSignerIfPossible);
}
