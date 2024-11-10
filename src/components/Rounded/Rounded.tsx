import { Pixels } from "../../types/Units";
import { FalxComponentProps } from "../../types/FalxComponent";
import { prefixCss } from "../../util/prefixCss";
import { cloneWithCss } from "../../util/cloneWithCss";

type RoundedProps = FalxComponentProps & {
  radius: Pixels;
};

export function Rounded(props: RoundedProps) {
  const style = prefixCss(
    props,
    `
      border-radius: ${props.radius};
    `
  );

  return cloneWithCss(props.children, style);
}
