/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Alignment } from "../../types/Alignment";
import { Pixels, Rem } from "../../types/Units";
import { prefixCss } from "../../util/prefixCss";
import { FalxComponentProps } from "../../types/FalxComponent";

type Gap = Pixels | Rem;

type ColumnProps = FalxComponentProps & {
  mainAxis: Alignment;
  crossAxis: Alignment;
  gap: Gap;
};

export function Column(props: ColumnProps) {
  const style = css(
    prefixCss(
      props,
      `
        display: flex;
        flex-direction: column;
        justify-content: ${props.mainAxis};
        align-items: ${props.crossAxis};
        gap: ${props.gap};
      `
    )
  );

  return <div css={style}>{props.children}</div>;
}
