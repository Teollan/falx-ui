/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Alignment } from "../../types/Alignment";
import { Pixels, Rem } from "../../types/Units";
import { prefixCss } from "../../util/prefixCss";
import { FalxComponentProps } from "../../types/FalxComponent";

type Gap = Pixels | Rem;

type RowProps = FalxComponentProps & {
  mainAxis: Alignment;
  crossAxis: Alignment;
  gap: Gap;
};

export function Row(props: RowProps) {
  const style = css(
    prefixCss(
      props,
      `
        display: flex;
        flex-direction: row;
        justify-content: ${props.mainAxis};
        align-items: ${props.crossAxis};
        gap: ${props.gap};
      `
    )
  );

  return <div css={style}>{props.children}</div>;
}
