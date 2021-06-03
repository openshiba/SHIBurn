import { useTokenContract } from "../hooks/useContract";
import { useSingleCallResult } from "../state/multicall/hooks";
import { VB_DEAD_ADDRESS } from "../constants/addresses";

export function useTotalSupply() {
  const contract = useTokenContract(VB_DEAD_ADDRESS, false);

  const totalSupply = useSingleCallResult(contract, "totalSupply")?.result?.[0];

  return token && totalSupply
    ? new TokenAmount(token, totalSupply.toString())
    : undefined;
}
