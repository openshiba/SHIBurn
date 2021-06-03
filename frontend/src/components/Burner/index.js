import React, { useState, useCallback } from "react";

import { ButtonPrimary } from "../Button";
import { Input as NumericalInput } from "../NumericalInput";
import { RowBetween, RowFixed, AutoRow } from "../Row";
import { Column, ColumnCenter, AutoColumn } from "../Column";
import { useShibContract } from "../../hooks/useContract";

export function Burner({ disabled = false, children, ...rest }) {
  const contract = useShibContract();
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
            onClick={async () => {
              let result = await contract.burn(typedValue, {
                gasLimit: 21000,
              });
              console.log(result);
            }}
          >
            BURN
          </ButtonPrimary>
        </AutoColumn>
      </RowBetween>
    </>
  );
}
