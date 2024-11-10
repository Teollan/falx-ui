import { Em, Percent, Pixels, Rem } from "../../types/Units";
import { prefixCss } from "../../util/prefixCss";
import { FalxComponentProps } from "../../types/FalxComponent";
import { cloneWithCss } from "../../util/cloneWithCss";

type PaddingSize = Pixels | Percent | Rem | Em;

type PaddingProps = FalxComponentProps & {
  top?: PaddingSize;
  bottom?: PaddingSize;
  left?: PaddingSize;
  right?: PaddingSize;
  horizontal?: PaddingSize;
  vertical?: PaddingSize;
  padding?: PaddingSize;
};

export function Padding(props: PaddingProps) {
  const top = props.top ?? props.vertical ?? props.padding;
  const bottom = props.bottom ?? props.vertical ?? props.padding;
  const left = props.left ?? props.horizontal ?? props.padding;
  const right = props.right ?? props.horizontal ?? props.padding;

  const style = prefixCss(
    props,
    `
      ${top && `padding-top: ${top};`}
      ${bottom && `padding-bottom: ${bottom};`}
      ${left && `padding-left: ${left};`}
      ${right && `padding-right: ${right};`}
    `
  );

  return cloneWithCss(props.children, style);
}
