import { CodeXmlIcon } from "lucide-react";

export const htmlCodeBlock = {
  title: "Custom HTML",
  description: "Insert a custom HTML block",
  searchTerms: ["html", "code", "custom"],
  icon: <CodeXmlIcon className="size-4" />,
  command: ({ editor, range }) => {
    editor
      .chai()
      .focus()
      .deleteRange(range)
      .setHtmlCodeBlock({ language: "html" })
      .run();
  },
};
