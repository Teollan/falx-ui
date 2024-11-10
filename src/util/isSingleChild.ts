import { Children, ReactNode } from "react";

export function isSingleChild(children: ReactNode) {
  return Children.count(children) === 1;
}
