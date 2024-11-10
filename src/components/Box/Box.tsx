import { Pixels, Percent, Rem, Em, Vw, Vh } from "../../types/Units";
import { FalxComponentProps } from "../../types/FalxComponent";
import { prefixCss } from "../../util/prefixCss";
import { cloneWithCss } from "../../util/cloneWithCss";

type Width = Pixels | Percent | Rem | Em | Vw | "auto";
type Height = Pixels | Percent | Rem | Em | Vh | "auto";

type BoxProps = FalxComponentProps & {
  width: Width;
  height: Height;
};

export function Box(props: BoxProps) {
  const style = prefixCss(
    props,
    `
      width: ${props.width};
      height: ${props.height};
    `
  );

  return cloneWithCss(props.children, style);
}
