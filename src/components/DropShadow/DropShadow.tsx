import { Pixels } from "../../types/Units";
import { cloneWithCss } from "../../util/cloneWithCss";
import {
  FalxComponentProps,
  ThemedFalxComponentProps,
} from "../../types/FalxComponent";
import { prefixCss } from "../../util/prefixCss";
import { useTheme } from "../Theme/Theme";

type DropShadowTheme = {
  color: string;
};

type DropShadowProps = FalxComponentProps &
  ThemedFalxComponentProps<DropShadowTheme> & {
    offsetX: Pixels;
    offsetY: Pixels;
    deviation: Pixels;
  };

export function DropShadow(props: DropShadowProps) {
  const theme = useTheme(props.themeSelector);

  const style = prefixCss(
    props,
    `
      filter: drop-shadow(
        ${props.offsetX} ${props.offsetY} ${props.deviation} ${theme.color}
      );
    `
  );

  return cloneWithCss(props.children, style);
}
