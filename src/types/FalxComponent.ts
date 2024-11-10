import { ReactNode } from "react";

export type ChildlessFalxComponentProps = {
  _cssPrefix?: string;
};

export type ThemedFalxComponentProps<T extends object> = {
  themeSelector?: (theme: any) => T;
};

export type FalxComponentProps = ChildlessFalxComponentProps & {
  children: ReactNode;
};
