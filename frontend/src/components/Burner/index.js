import React, { useState, useCallback } from "react";

import { ButtonPrimary } from "../Button";
import { Input as NumericalInput } from "../NumericalInput";
import { RowBetween, RowFixed, AutoRow } from "../Row";
import { Column, ColumnCenter, AutoColumn } from "../Column";
import { useShibContract } from "../../hooks/useContract";
import { useActiveWeb3React } from "../../hooks/web3";

export function Burner({
  disabled = false,
  children,
  currentBalance,
  ...rest
}) {
  const contract = useShibContract();
  const { address } = useActiveWeb3React();
  const [typedValue, setTypedValue] = useState("1000");
  const onUserInput = useCallback((typedValue) => {
    setTypedValue(typedValue);
  }, []);
  return (
    <>
      <RowBetween>
        <AutoColumn gap={"lg"}>
          <NumericalInput
            className="token-amount-input"
            value={typedValue}
            onUserInput={(val) => {
              onUserInput(val);
            }}
          />
        </AutoColumn>
      </RowBetween>
      <RowBetween>
        <br></br>
      </RowBetween>
      <RowBetween>
        <AutoColumn>
          <ButtonPrimary
            padding="8px"
            borderRadius="8px"
            disabled={
              currentBalance < typedValue ||
              typedValue == "" ||
              typedValue == "0"
            }
            onClick={async () => {
              try {
                await contract.burn(typedValue);
              } catch (error) {
                throw error;
              }
            }}
          >
            BURN
          </ButtonPrimary>
        </AutoColumn>
      </RowBetween>
    </>
  );
}
