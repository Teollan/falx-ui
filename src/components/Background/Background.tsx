import { prefixCss } from "../../util/prefixCss";
import {
  FalxComponentProps,
  ThemedFalxComponentProps,
} from "../../types/FalxComponent";
import { cloneWithCss } from "../../util/cloneWithCss";
import { useTheme } from "../Theme/Theme";

type BackgroundTheme = {
  color: string;
};

type BackgroundProps = FalxComponentProps &
  ThemedFalxComponentProps<BackgroundTheme>;

export function Background(props: BackgroundProps) {
  const theme = useTheme(props.themeSelector);

  const style = prefixCss(
    props,
    `
      background-color: ${theme.color};
    `
  );

  return cloneWithCss(props.children, style);
}
