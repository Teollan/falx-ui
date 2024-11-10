import { ChildlessFalxComponentProps } from "../types/FalxComponent";

export function prefixCss(props: ChildlessFalxComponentProps, body: string) {
  return `
    ${props._cssPrefix ?? ""}
    ${body}
  `;
}
