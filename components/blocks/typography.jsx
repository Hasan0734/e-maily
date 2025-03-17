import { Text } from "lucide-react";

export const text = {
  title: "Text",
  description: "Just smart typing with plain text.",
  searchTerms: ["p", "paragraph"],
  icon: <Text className="size-4" />,
  command: ({ editor, range }) => {
    editor
      .chain()
      .focus()
      .deleteRange(range)
      .toggleNode("paragraph", "paragraph")
      .run();
  },
};
