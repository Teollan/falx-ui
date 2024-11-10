import { createContext, ReactNode, useContext } from "react";

const Context = createContext<object>(null!);

type ThemeProps = {
  theme: object;
  children: ReactNode;
};

export function Theme(props: ThemeProps) {
  return (
    <Context.Provider value={props.theme}>{props.children}</Context.Provider>
  );
}

export function useTheme<T>(selector: ((theme: any) => T) | undefined): T {
  const theme = useContext(Context);

  return selector ? selector(theme) : (theme as T);
}
