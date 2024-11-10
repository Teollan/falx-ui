/** @jsxImportSource @emotion/react */
import { ReactNode, useState } from "react";
import { Condition } from "../Condition/Condition";

type HoverableProps = {
  whileHovered: () => ReactNode;
  children: ReactNode;
};

export function Hoverable(props: HoverableProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Condition
        condition={isHovered}
        whileTrue={props.whileHovered}
        whileFalse={() => props.children}
      />
    </div>
  );
}
