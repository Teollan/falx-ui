/** @jsxImportSource @emotion/react */
import { ReactNode } from "react";

type ConditionProps = {
  condition: boolean;
  whileTrue: () => ReactNode;
  whileFalse: () => ReactNode;
};

export function Condition(props: ConditionProps) {
  return <>{props.condition ? props.whileTrue() : props.whileFalse()}</>;
}
