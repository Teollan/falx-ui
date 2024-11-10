import { Children, cloneElement, isValidElement, ReactNode } from "react";

export function cloneWithCss(children: ReactNode, css: string): ReactNode {
  return Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { _cssPrefix: css });
    } else {
      return child;
    }
  });
}
