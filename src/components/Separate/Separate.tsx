/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FalxComponentProps } from "../../types/FalxComponent";
import { prefixCss } from "../../util/prefixCss";

type SeparateProps = FalxComponentProps;

export function Separate(props: SeparateProps) {
  const style = css(prefixCss(props, ""));

  return <div css={style}>{props.children}</div>;
}
