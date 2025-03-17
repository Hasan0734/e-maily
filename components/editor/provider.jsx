import { createContext, useContext } from "react";
import { DEFAULT_SLASH_COMMANDS } from "./extensions/slash-command/default-slash-command";

export const DEFAULT_PLACEHOLDER_URL = "https://maily.to/";

export const TempContext = createContext({
  placeholderUrl: DEFAULT_PLACEHOLDER_URL,
  blocks: DEFAULT_SLASH_COMMANDS,
});

export const TempProvider = (props) => {
  const { children, ...defaultValues } = props;

  return (
    <TempContext.Provider value={defaultValues}>
      {children}
    </TempContext.Provider>
  );
};

export const useTempContext = () => {
  const values = useContext(TempContext);
  if (!values) {
    throw new Error("Missing TempContext.Provider in the component tree");
  }
  return values;
};
