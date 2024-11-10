/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FalxComponentProps } from "../../types/FalxComponent";
import { Pixels } from "../../types/Units";
import { prefixCss } from "../../util/prefixCss";

type GridProps = FalxComponentProps & {
  columns: number;
  verticalGap: Pixels;
  horizontalGap: Pixels;
};

export function Grid(props: GridProps) {
  const style = css(
    prefixCss(
      props,
      `
      display: grid;
      grid-template-columns: ${props.columns};
      row-gap: ${props.verticalGap};
      column-gap: ${props.horizontalGap};
    `
    )
  );

  return <div css={style}>{props.children}</div>;
}
