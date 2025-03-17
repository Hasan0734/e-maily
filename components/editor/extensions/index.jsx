import { SlashCommandExtension } from "./slash-command/slash-command";
import { getSlashCommandSuggestions } from "./slash-command/slash-command-view";

export const extensions = (props) => {
  const { blocks, extensions = [] } = props;

  const defaultExtensions = [
    SlashCommandExtension.confirgure({
      suggestion: getSlashCommandSuggestions(blocks),
    }),
    VariableExtension.configure({
      suggestion: getVariableSuggestions(),
    }),
  ].filter((ext) => {
    return !extensions.some((e) => e.name === ext.name);
  });

  return [...defaultExtensions, ...extensions];
};
