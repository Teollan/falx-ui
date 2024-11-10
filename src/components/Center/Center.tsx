import { prefixCss } from "../../util/prefixCss";
import { FalxComponentProps } from "../../types/FalxComponent";
import { cloneWithCss } from "../../util/cloneWithCss";

type CenterProps = FalxComponentProps;

export function Center(props: CenterProps) {
  const style = prefixCss(
    props,
    `
      display: flex;
      justify-content: center;
      align-items: center;
    `
  );

  return cloneWithCss(props.children, style);
}
